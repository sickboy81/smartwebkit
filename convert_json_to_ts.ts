
import fs from 'fs';
import path from 'path';

const dumpDir = path.resolve('./dictionaries_dump');
const outDir = path.resolve('./dictionaries');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const langs = ['en', 'pt'];

langs.forEach(lang => {
    const json = fs.readFileSync(path.join(dumpDir, `${lang}.json`), 'utf-8');
    // Add type annotation
    const content = `import { Dictionary } from '../types';

export const ${lang}: Dictionary = ${json};
`;
    fs.writeFileSync(path.join(outDir, `${lang}.ts`), content);
    console.log(`Created ${lang}.ts`);
});

// Create ES from PT for now
const ptJson = fs.readFileSync(path.join(dumpDir, 'pt.json'), 'utf-8');
const esContent = `import { Dictionary } from '../types';

export const es: Dictionary = ${ptJson};
`;
fs.writeFileSync(path.join(outDir, 'es.ts'), esContent);
console.log(`Created es.ts (cloned from pt)`);
