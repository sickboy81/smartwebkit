import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen } from 'lucide-react';

interface ReadingProps {
  dict: Dictionary;
}

export const ReadingPage: React.FC<ReadingProps> = ({ dict }) => {
  const t = dict.tools.reading_planner;
  const [pages, setPages] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const p = parseInt(pages);
    const d = parseInt(days);
    
    if (p && d) {
      const daily = Math.ceil(p / d);
      setResult(daily.toString());
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_pages}</label>
                  <input type="number" value={pages} onChange={e => setPages(e.target.value)} className="w-full p-2 border rounded-md" placeholder="300" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_days}</label>
                  <input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full p-2 border rounded-md" placeholder="30" />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
                 <h3 className="uppercase text-xs font-bold tracking-widest mb-2 opacity-70">{t.res_daily}</h3>
                 <div className="text-5xl font-bold">{result}</div>
                 <div className="text-sm text-slate-400 mt-2">Pages</div>
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