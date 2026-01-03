import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { CalendarDays } from 'lucide-react';

interface WeekProps {
  dict: Dictionary;
}

export const WeekNumberPage: React.FC<WeekProps> = ({ dict }) => {
  const t = dict.tools.week_number;
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [week, setWeek] = useState(0);

  // ISO 8601 Week Number
  const getWeekNumber = (d: Date) => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  };

  useEffect(() => {
    if (date) {
      setWeek(getWeekNumber(new Date(date)));
    }
  }, [date]);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <CalendarDays className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            
            <div className="bg-slate-900 text-white rounded-xl p-10">
               <span className="text-sm uppercase tracking-widest opacity-70 mb-2 block">{t.label_current}</span>
               <div className="text-8xl font-bold">{week}</div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-500">{t.label_check}</label>
               <input 
                 type="date" 
                 value={date}
                 onChange={(e) => setDate(e.target.value)}
                 className="w-full p-3 border rounded-md text-center bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
               />
            </div>

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none text-center">
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