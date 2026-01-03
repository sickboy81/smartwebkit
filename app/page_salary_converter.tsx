import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Banknote } from 'lucide-react';

interface SalaryProps {
  dict: Dictionary;
}

export const SalaryPage: React.FC<SalaryProps> = ({ dict }) => {
  const t = dict.tools.salary_converter;
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("annual");
  const [hours, setHours] = useState("40");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const val = parseFloat(amount);
    const hrs = parseFloat(hours);

    if (isNaN(val) || isNaN(hrs)) return;

    let hourly = 0;
    
    // Normalize to hourly
    if (period === 'annual') {
      hourly = val / (52 * hrs);
    } else if (period === 'monthly') {
      hourly = val / (4.33 * hrs);
    } else if (period === 'hourly') {
      hourly = val;
    }

    setResult({
      hourly: hourly,
      daily: hourly * 8, // Assuming 8 hour day
      weekly: hourly * hrs,
      monthly: hourly * hrs * 4.33,
      annual: hourly * hrs * 52
    });
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Banknote className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_amount}</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="50000"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_period}</label>
                  <select 
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  >
                    <option value="annual">{t.opt_annual}</option>
                    <option value="monthly">{t.opt_monthly}</option>
                    <option value="hourly">{t.opt_hourly}</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_hours}</label>
                  <input 
                    type="number" 
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="40"
                  />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 text-center">
                 <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 block mb-1">{t.res_hourly}</span>
                    <span className="font-bold text-slate-900">{result.hourly.toFixed(2)}</span>
                 </div>
                 <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 block mb-1">{t.res_daily}</span>
                    <span className="font-bold text-slate-900">{result.daily.toFixed(2)}</span>
                 </div>
                 <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 block mb-1">{t.res_weekly}</span>
                    <span className="font-bold text-slate-900">{result.weekly.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                 </div>
                 <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 block mb-1">{t.res_monthly}</span>
                    <span className="font-bold text-slate-900">{result.monthly.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                 </div>
                 <div className="p-3 bg-slate-900 text-white rounded border border-slate-900 col-span-2 md:col-span-1">
                    <span className="text-xs uppercase text-slate-300 block mb-1">{t.res_annual}</span>
                    <span className="font-bold">{result.annual.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
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