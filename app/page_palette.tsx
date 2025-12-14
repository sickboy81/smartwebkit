import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Brush } from 'lucide-react';

interface PaletteProps {
  dict: Dictionary;
}

export const PalettePage: React.FC<PaletteProps> = ({ dict }) => {
  const t = dict.tools.color_palette;
  const [base, setBase] = useState("#3b82f6");

  // Simple HSL conversion for harmony generation
  const hexToHsl = (hex: string) => {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generatePalette = (baseHex: string) => {
    const { h, s, l } = hexToHsl(baseHex);
    return {
      complementary: [hslToHex((h + 180) % 360, s, l)],
      analogous: [hslToHex((h + 30) % 360, s, l), hslToHex((h - 30 + 360) % 360, s, l)],
      triadic: [hslToHex((h + 120) % 360, s, l), hslToHex((h + 240) % 360, s, l)],
    };
  };

  const { complementary, analogous, triadic } = generatePalette(base);

  const Swatch = ({ color }: { color: string }) => (
    <div className="flex flex-col items-center gap-2">
       <div className="w-24 h-24 rounded-lg shadow-sm border border-slate-200" style={{ backgroundColor: color }}></div>
       <span className="font-mono text-xs uppercase text-slate-500">{color}</span>
    </div>
  );

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Brush className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-12">
            
            <div className="flex justify-center items-center gap-4">
               <label className="font-bold text-slate-700">{t.label_base}</label>
               <input 
                 type="color" 
                 value={base} 
                 onChange={e => setBase(e.target.value)} 
                 className="w-16 h-12 cursor-pointer border rounded bg-white p-1"
               />
               <span className="font-mono text-lg uppercase">{base}</span>
            </div>

            <div className="space-y-8">
               <div>
                  <h3 className="text-sm font-bold uppercase text-slate-400 mb-4 border-b pb-2">{t.sec_complementary}</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                     <Swatch color={base} />
                     <Swatch color={complementary[0]} />
                  </div>
               </div>

               <div>
                  <h3 className="text-sm font-bold uppercase text-slate-400 mb-4 border-b pb-2">{t.sec_analogous}</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                     <Swatch color={analogous[1]} />
                     <Swatch color={base} />
                     <Swatch color={analogous[0]} />
                  </div>
               </div>

               <div>
                  <h3 className="text-sm font-bold uppercase text-slate-400 mb-4 border-b pb-2">{t.sec_triadic}</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                     <Swatch color={base} />
                     <Swatch color={triadic[0]} />
                     <Swatch color={triadic[1]} />
                  </div>
               </div>
            </div>

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">
            {t.seo_title}
          </h2>
          <div className="text-slate-600 space-y-4 leading-7">
            {t.seo_content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};