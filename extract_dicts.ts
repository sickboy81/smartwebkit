
import { en, pt } from './dictionaries';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./dictionaries_dump');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(path.join(outDir, 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(outDir, 'pt.json'), JSON.stringify(pt, null, 2));

console.log('Dictionaries dumped to ' + outDir);
