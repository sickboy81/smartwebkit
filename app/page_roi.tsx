import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TrendingUp } from 'lucide-react';

interface ROIProps {
  dict: Dictionary;
}

export const ROIPage: React.FC<ROIProps> = ({ dict }) => {
  const t = dict.tools.roi_calculator;
  const [invested, setInvested] = useState("");
  const [returned, setReturned] = useState("");
  const [roi, setRoi] = useState<number | null>(null);

  const calculate = () => {
    const inv = parseFloat(invested);
    const ret = parseFloat(returned);

    if (inv && !isNaN(ret)) {
      const val = ((ret - inv) / inv) * 100;
      setRoi(val);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_invested}</label>
                  <input type="number" value={invested} onChange={e => setInvested(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_returned}</label>
                  <input type="number" value={returned} onChange={e => setReturned(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {roi !== null && (
              <div className={`p-8 rounded-xl text-center border ${roi >= 0 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                 <h3 className={`uppercase text-xs font-bold tracking-widest mb-1 ${roi >= 0 ? 'text-green-800' : 'text-red-800'}`}>{t.res_roi}</h3>
                 <div className={`text-5xl font-bold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {roi.toFixed(2)}%
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