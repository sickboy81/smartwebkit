import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Droplets } from 'lucide-react';

interface WaterProps {
  dict: Dictionary;
}

export const WaterPage: React.FC<WaterProps> = ({ dict }) => {
  const t = dict.tools.water_intake;
  const [weight, setWeight] = useState(70);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Basic formula: 35ml per kg
    const intake = weight * 35;
    setResult(intake);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Droplets className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="flex flex-col items-center gap-4">
               <div className="w-full max-w-xs space-y-2">
                  <label className="text-sm font-medium">{t.label_weight}</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-center text-lg"
                  />
               </div>

               <Button onClick={calculate} size="lg" className="w-full max-w-xs">
                  {t.btn_calculate}
               </Button>
            </div>

            {result && (
              <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl text-center space-y-2">
                 <h3 className="text-blue-900 uppercase text-xs font-bold tracking-widest">{t.res_amount}</h3>
                 <div className="text-5xl font-bold text-blue-600">
                    {(result / 1000).toFixed(1)} L
                 </div>
                 <div className="text-blue-400 font-medium">
                    {Math.round(result)} ml
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