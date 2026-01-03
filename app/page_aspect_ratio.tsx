import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Scaling } from 'lucide-react';

interface RatioProps {
  dict: Dictionary;
}

export const AspectRatioPage: React.FC<RatioProps> = ({ dict }) => {
  const t = dict.tools.aspect_ratio;
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [ratio, setRatio] = useState("");

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const calculate = () => {
    const width = parseFloat(w);
    const height = parseFloat(h);
    if (width && height) {
      const divisor = gcd(width, height);
      setRatio(`${width / divisor}:${height / divisor}`);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Scaling className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">{t.label_width}</label>
                  <input type="number" value={w} onChange={e => setW(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="text-xl pt-6">:</div>
               <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">{t.label_height}</label>
                  <input type="number" value={h} onChange={e => setH(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>
            <Button onClick={calculate} size="lg" className="w-full">{t.mode_calc_ratio}</Button>
            
            {ratio && (
              <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
                 <h3 className="uppercase text-xs font-bold tracking-widest mb-2 opacity-70">{t.res_ratio}</h3>
                 <div className="text-6xl font-bold">{ratio}</div>
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