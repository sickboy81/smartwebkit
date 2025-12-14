import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar } from 'lucide-react';

interface AgeProps {
  dict: Dictionary;
}

export const AgePage: React.FC<AgeProps> = ({ dict }) => {
  const t = dict.tools.age_calculator;
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ y: number, m: number, d: number } | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ y: years, m: months, d: days });
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center justify-center bg-slate-50 p-6 rounded-lg">
              <div className="w-full sm:w-auto space-y-2">
                <label className="text-sm font-medium">{t.label_dob}</label>
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  value={dob}
                  onChange={e => setDob(e.target.value)}
                />
              </div>
              <Button onClick={calculateAge} className="w-full sm:w-auto">{t.btn_calculate}</Button>
            </div>

            {result && (
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-900 text-white rounded-lg">
                  <span className="block text-4xl font-bold">{result.y}</span>
                  <span className="text-xs uppercase opacity-80">{t.result_years}</span>
                </div>
                <div className="p-4 bg-slate-800 text-white rounded-lg">
                  <span className="block text-4xl font-bold">{result.m}</span>
                  <span className="text-xs uppercase opacity-80">{t.result_months}</span>
                </div>
                <div className="p-4 bg-slate-700 text-white rounded-lg">
                  <span className="block text-4xl font-bold">{result.d}</span>
                  <span className="text-xs uppercase opacity-80">{t.result_days}</span>
                </div>
              </div>
            )}
            
            {result && (
               <p className="text-center text-lg font-medium text-slate-700">
                 {t.result_summary
                    .replace('{0}', result.y.toString())
                    .replace('{1}', result.m.toString())
                    .replace('{2}', result.d.toString())
                 }
               </p>
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