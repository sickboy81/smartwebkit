import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Footprints } from 'lucide-react';

interface ShoeProps {
  dict: Dictionary;
}

// Simple approximate conversion tables
const SHOE_DATA: any = {
  men: [
    { us: 6, uk: 5.5, eu: 38, br: 36 },
    { us: 6.5, uk: 6, eu: 39, br: 37 },
    { us: 7, uk: 6.5, eu: 40, br: 38 },
    { us: 7.5, uk: 7, eu: 40.5, br: 38.5 },
    { us: 8, uk: 7.5, eu: 41, br: 39 },
    { us: 8.5, uk: 8, eu: 42, br: 40 },
    { us: 9, uk: 8.5, eu: 42.5, br: 40.5 },
    { us: 9.5, uk: 9, eu: 43, br: 41 },
    { us: 10, uk: 9.5, eu: 44, br: 42 },
    { us: 10.5, uk: 10, eu: 44.5, br: 42.5 },
    { us: 11, uk: 10.5, eu: 45, br: 43 },
    { us: 12, uk: 11.5, eu: 46, br: 44 },
    { us: 13, uk: 12.5, eu: 47, br: 45 },
  ],
  women: [
    { us: 5, uk: 3, eu: 35, br: 33 },
    { us: 5.5, uk: 3.5, eu: 36, br: 34 },
    { us: 6, uk: 4, eu: 36.5, br: 34.5 },
    { us: 6.5, uk: 4.5, eu: 37, br: 35 },
    { us: 7, uk: 5, eu: 37.5, br: 35.5 },
    { us: 7.5, uk: 5.5, eu: 38, br: 36 },
    { us: 8, uk: 6, eu: 38.5, br: 36.5 },
    { us: 8.5, uk: 6.5, eu: 39, br: 37 },
    { us: 9, uk: 7, eu: 40, br: 38 },
    { us: 9.5, uk: 7.5, eu: 40.5, br: 38.5 },
    { us: 10, uk: 8, eu: 41, br: 39 },
    { us: 11, uk: 9, eu: 42, br: 40 },
  ]
};

export const ShoeSizePage: React.FC<ShoeProps> = ({ dict }) => {
  const t = dict.tools.shoe_size;
  const [gender, setGender] = useState<'men' | 'women'>('men');
  const [region, setRegion] = useState<'us' | 'uk' | 'eu' | 'br'>('us');
  const [size, setSize] = useState<number>(gender === 'men' ? 9 : 7);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    // Find closest match
    const table = SHOE_DATA[gender];
    const match = table.find((row: any) => row[region] == size) || 
                  table.find((row: any) => row[region] >= size); // Closest up
    
    if (match) {
      setResult(match);
    } else {
      setResult(null);
    }
  }, [gender, region, size]);

  const availableSizes = SHOE_DATA[gender].map((r: any) => r[region]);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Footprints className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_gender}</label>
                  <div className="flex bg-slate-100 p-1 rounded-md border border-slate-200">
                     <button onClick={() => setGender('men')} className={`flex-1 py-2 text-sm font-medium rounded transition-all ${gender === 'men' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>{t.opt_men}</button>
                     <button onClick={() => setGender('women')} className={`flex-1 py-2 text-sm font-medium rounded transition-all ${gender === 'women' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>{t.opt_women}</button>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_region}</label>
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="w-full p-2.5 border rounded-md bg-white focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="us">USA</option>
                    <option value="uk">UK</option>
                    <option value="eu">Europe</option>
                    <option value="br">Brasil</option>
                  </select>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_size}</label>
                  <select 
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full p-2.5 border rounded-md bg-white focus:ring-2 focus:ring-slate-900"
                  >
                    {availableSizes.map((s: number) => (
                       <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
               </div>
            </div>

            {result && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                 <h3 className="text-center text-sm uppercase text-slate-500 font-bold mb-6">{t.res_conversions}</h3>
                 <div className="grid grid-cols-4 gap-4 text-center">
                    <SizeBox label="USA" value={result.us} highlight={region === 'us'} />
                    <SizeBox label="UK" value={result.uk} highlight={region === 'uk'} />
                    <SizeBox label="EU" value={result.eu} highlight={region === 'eu'} />
                    <SizeBox label="BR" value={result.br} highlight={region === 'br'} />
                 </div>
              </div>
            )}

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

const SizeBox = ({ label, value, highlight }: any) => (
  <div className={`p-4 rounded-lg border ${highlight ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-900'}`}>
     <div className={`text-xs font-bold uppercase mb-1 ${highlight ? 'text-slate-300' : 'text-slate-400'}`}>{label}</div>
     <div className="text-2xl font-bold">{value}</div>
  </div>
);