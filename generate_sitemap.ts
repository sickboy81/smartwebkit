
import fs from 'fs';
import path from 'path';
import { en } from './dictionaries/en';

const baseUrl = 'https://smartwebkit.net';
const langs = ['en', 'pt', 'es'];

// Extract tool keys from English dictionary
const toolKeys = Object.keys(en);
// Filter out non-tool keys if any (assuming dictionary root has tools directly or in sub-objects)
// Looking at types.ts, Dictionary has { common, home, ...tools }. 
// Wait, looking at extract_dicts.ts or dictionaries.ts, the dictionary IS the object with keys.
// Let's re-verify stricture of `dictionaries/en.ts`. 
// It seems `dictionaries.ts` exported `en` which had keys like 'password_generator', etc.
// Actually, looking at `dictionaries_dump/en.json` (Step 313), the root keys ARE the tool IDs (e.g. "reaction_time", "morse_code").
// BUT Step 313 also shows "common" and "home" might be missing or mixed in?
// Step 313 line 806: "reaction_time": { ... }
// Step 332 App.tsx line 735: <Route path="password-generator" ... />
// The route path is NOT always the dictionary key. 
// Example: Dictionary key "password_generator" -> Route "password-generator".
// Example: Dictionary key "reaction_time" -> Route "reaction-time".
// It seems the convention is keys use underscores, routes use hyphens?
// Let's verify a few.
// App.tsx: "password-generator", "json-formatter"
// en.json (Step 313 doesn't show these). 
// I should check `dictionaries/en.ts` content for the keys.

// BETTER STRATEGY: extract routes directly from App.tsx using a Regex.
const appTsxPath = path.resolve('./App.tsx');
const appContent = fs.readFileSync(appTsxPath, 'utf-8');

const routeRegex = /<Route path="([^"]+)"/g;
let match;
const routes: string[] = [];

while ((match = routeRegex.exec(appContent)) !== null) {
    const route = match[1];
    if (route !== '/' && route !== '*' && route !== ':lang' && route !== '/:lang') {
        routes.push(route);
    }
}

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// Get current date in ISO format for lastmod
const lastmod = new Date().toISOString().split('T')[0];

// Add root urls
langs.forEach(lang => {
    xml += `  <url>
    <loc>${baseUrl}/${lang}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>\n`;

    // Add alternates
    langs.forEach(altLang => {
        if (altLang !== lang) {
            xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}" />\n`;
        }
    });
    xml += `  </url>\n`;
});

// Add tool urls
routes.forEach(route => {
    langs.forEach(lang => {
        const url = `${baseUrl}/${lang}/${route}`;
        xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>\n`;

        // Add alternates
        langs.forEach(altLang => {
            if (altLang !== lang) {
                xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}/${route}" />\n`;
            }
        });

        xml += `  </url>\n`;
    });
});

xml += `</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${routes.length} routes x ${langs.length} langs.`);
