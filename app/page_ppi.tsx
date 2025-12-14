import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MonitorSmartphone } from 'lucide-react';

interface PPIProps {
  dict: Dictionary;
}

export const PPIPage: React.FC<PPIProps> = ({ dict }) => {
  const t = dict.tools.ppi_calculator;
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [diag, setDiag] = useState("24");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    const d = parseFloat(diag);

    if (w && h && d) {
      const ppi = Math.sqrt(w * w + h * h) / d;
      setResult(ppi);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MonitorSmartphone className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_width}</label>
                  <input type="number" value={width} onChange={e => setWidth(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_height}</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_diagonal}</label>
                  <input type="number" value={diag} onChange={e => setDiag(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result !== null && (
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl text-center space-y-2">
                 <h3 className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t.res_ppi}</h3>
                 <div className="text-5xl font-bold text-slate-900">{result.toFixed(2)}</div>
                 <div className="text-sm text-slate-500 pt-2">
                    {t.res_total}: {(parseFloat(width) * parseFloat(height)).toLocaleString()} px
                 </div>
              </div>
            )}

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};