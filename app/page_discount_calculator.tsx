import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tag } from 'lucide-react';

interface DiscountProps {
  dict: Dictionary;
}

export const DiscountPage: React.FC<DiscountProps> = ({ dict }) => {
  const t = dict.tools.discount_calculator;
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<{ final: number; saved: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (!isNaN(p) && !isNaN(d)) {
      const saved = (p * d) / 100;
      const final = p - saved;
      setResult({ final, saved });
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Tag className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_price}</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                    placeholder="100.00"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_discount}</label>
                  <input 
                    type="number" 
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                    placeholder="20"
                  />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                 <div className="p-6 bg-slate-900 text-white rounded-lg text-center">
                    <span className="text-sm uppercase opacity-70 mb-1 block">{t.res_final}</span>
                    <span className="text-4xl font-bold">{result.final.toFixed(2)}</span>
                 </div>
                 <div className="p-6 bg-green-50 text-green-800 border border-green-100 rounded-lg text-center">
                    <span className="text-sm uppercase opacity-70 mb-1 block">{t.res_saved}</span>
                    <span className="text-4xl font-bold">{result.saved.toFixed(2)}</span>
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