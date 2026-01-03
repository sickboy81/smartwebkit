import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { CalendarClock, Check, Copy } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface CronProps {
  dict: Dictionary;
}

export const CronPage: React.FC<CronProps> = ({ dict }) => {
  const t = dict.tools.cron_generator;
  
  const [min, setMin] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [week, setWeek] = useState("*");
  const [copied, setCopied] = useState(false);

  const expression = `${min} ${hour} ${day} ${month} ${week}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(expression);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const InputBlock = ({ label, val, setVal, placeholder }: any) => (
      <div className="flex flex-col space-y-1">
          <label className="text-xs uppercase font-bold text-slate-500">{label}</label>
          <input 
            type="text" 
            value={val} 
            onChange={e => setVal(e.target.value)}
            className="w-full p-3 text-center text-lg font-mono border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none"
            placeholder={placeholder}
          />
      </div>
  );

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <CalendarClock className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
               <div className="text-3xl md:text-5xl font-mono tracking-wider break-all">
                  {expression}
               </div>
               <div className="mt-6">
                 <Button onClick={handleCopy} variant="ghost" className="text-white hover:bg-white/20 hover:text-white gap-2">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy
                 </Button>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               <InputBlock label={t.label_minute} val={min} setVal={setMin} placeholder="*" />
               <InputBlock label={t.label_hour} val={hour} setVal={setHour} placeholder="*" />
               <InputBlock label={t.label_day} val={day} setVal={setDay} placeholder="*" />
               <InputBlock label={t.label_month} val={month} setVal={setMonth} placeholder="*" />
               <InputBlock label={t.label_week} val={week} setVal={setWeek} placeholder="*" />
            </div>

            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-100">
                <h4 className="font-semibold mb-2">Quick Reference</h4>
                <ul className="space-y-1 list-disc pl-4">
                    <li><code>*</code> = {t.desc_every}</li>
                    <li><code>*/5</code> = {t.desc_every} 5</li>
                    <li><code>1,2,3</code> = 1, 2 and 3</li>
                    <li><code>1-5</code> = 1 to 5</li>
                </ul>
            </div>

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