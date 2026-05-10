import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Landmark } from 'lucide-react';

interface LoanProps {
  dict: Dictionary;
}

export const LoanPage: React.FC<LoanProps> = ({ dict }) => {
  const t = dict.tools.loan_calculator;
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (p && r && n) {
      // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
      const monthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = monthly * n;
      const interest = total - p;
      
      setResult({
        monthly: monthly.toFixed(2),
        total: total.toFixed(2),
        interest: interest.toFixed(2)
      });
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Landmark className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_amount}</label>
                  <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_rate}</label>
                  <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_term}</label>
                  <input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>
            <Button onClick={calculate} size="lg" className="w-full">{t.btn_calculate}</Button>
            
            {result && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
                    <div className="text-xs uppercase opacity-70 mb-1">{t.res_monthly}</div>
                    <div className="text-2xl font-bold">{result.monthly}</div>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center">
                    <div className="text-xs uppercase text-slate-500 font-bold mb-1">{t.res_total}</div>
                    <div className="text-xl font-bold text-slate-700">{result.total}</div>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center">
                    <div className="text-xs uppercase text-slate-500 font-bold mb-1">{t.res_interest}</div>
                    <div className="text-xl font-bold text-slate-700">{result.interest}</div>
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