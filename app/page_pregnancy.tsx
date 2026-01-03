import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Baby } from 'lucide-react';

interface PregnancyProps {
  dict: Dictionary;
}

export const PregnancyPage: React.FC<PregnancyProps> = ({ dict }) => {
  const t = dict.tools.pregnancy_calculator;
  const [lmp, setLmp] = useState("");
  const [cycle, setCycle] = useState(28);
  const [dueDate, setDueDate] = useState<string>("");
  const [weeks, setWeeks] = useState(0);

  const calculate = () => {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    // Naegele's Rule: +280 days standard. 
    // Adjustment for cycle: (cycle - 28)
    const cycleAdjustment = cycle - 28;
    const daysToAdd = 280 + cycleAdjustment;
    
    const due = new Date(lmpDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    setDueDate(due.toDateString());

    // Calculate current progress
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lmpDate.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    setWeeks(diffWeeks);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Baby className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_lmp}</label>
                  <input 
                    type="date" 
                    value={lmp}
                    onChange={(e) => setLmp(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_cycle}</label>
                  <input 
                    type="number" 
                    value={cycle}
                    onChange={(e) => setCycle(Number(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="28"
                  />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {dueDate && (
              <div className="bg-pink-50 border border-pink-100 p-8 rounded-xl text-center space-y-4">
                 <div>
                    <h3 className="text-pink-900 uppercase text-xs font-bold tracking-widest mb-1">{t.res_due}</h3>
                    <div className="text-4xl font-bold text-pink-600">{dueDate}</div>
                 </div>
                 <div className="pt-4 border-t border-pink-100">
                    <span className="text-pink-800 font-medium">{t.res_progress}: {weeks} Weeks</span>
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