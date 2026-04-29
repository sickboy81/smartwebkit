
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://smartwebkit.net';
const langs = ['en', 'pt', 'es'];

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

const uniqueRoutes = [...new Set(routes)];

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// Add language root URLs (skip "/" because it redirects)
langs.forEach(lang => {
    xml += `  <url>
    <loc>${baseUrl}/${lang}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>\n`;

    // Add alternates
    langs.forEach(altLang => {
        if (altLang !== lang) {
            xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}" />\n`;
        }
    });
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en" />\n`;
    xml += `  </url>\n`;
});

// Add tool URLs
uniqueRoutes.forEach(route => {
    langs.forEach(lang => {
        const url = `${baseUrl}/${lang}/${route}`;
        xml += `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>\n`;

        // Add alternates
        langs.forEach(altLang => {
            if (altLang !== lang) {
                xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}/${route}" />\n`;
            }
        });
        xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/${route}" />\n`;

        xml += `  </url>\n`;
    });
});

xml += `</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${uniqueRoutes.length} routes x ${langs.length} langs.`);
