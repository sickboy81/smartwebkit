import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Activity } from 'lucide-react';

interface TDEEProps {
  dict: Dictionary;
}

export const TDEEPage: React.FC<TDEEProps> = ({ dict }) => {
  const t = dict.tools.tdee_calculator;
  
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [activity, setActivity] = useState(1.2);
  
  const [result, setResult] = useState<{tdee: number, bmr: number} | null>(null);

  const calculate = () => {
    // Mifflin-St Jeor Equation
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    const tdee = bmr * activity;
    setResult({ tdee: Math.round(tdee), bmr: Math.round(bmr) });
  };

  const MacroCard = ({ title, calories, label }: { title: string, calories: number, label: string }) => {
    // Basic Split: 40% Carb, 30% Protein, 30% Fat
    const protein = Math.round((calories * 0.3) / 4);
    const fat = Math.round((calories * 0.3) / 9);
    const carbs = Math.round((calories * 0.4) / 4);

    return (
      <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg space-y-3">
         <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-700">{title}</span>
            <span className="font-mono text-sm bg-slate-200 px-2 py-1 rounded">{calories} kcal</span>
         </div>
         <div className="text-xs text-slate-500 uppercase tracking-widest">{label}</div>
         <div className="grid grid-cols-3 gap-2 text-center text-sm">
            <div>
               <div className="font-bold text-blue-600">{protein}g</div>
               <div className="text-xs text-slate-500">Protein</div>
            </div>
            <div>
               <div className="font-bold text-yellow-600">{fat}g</div>
               <div className="text-xs text-slate-500">Fat</div>
            </div>
            <div>
               <div className="font-bold text-green-600">{carbs}g</div>
               <div className="text-xs text-slate-500">Carbs</div>
            </div>
         </div>
      </div>
    );
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Activity className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_gender}</label>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2 px-4 rounded border transition-colors ${gender === 'male' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`}
                    >
                      {t.opt_male}
                    </button>
                     <button 
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2 px-4 rounded border transition-colors ${gender === 'female' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`}
                    >
                      {t.opt_female}
                    </button>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_age}</label>
                  <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} className="w-full p-2 border rounded bg-white" />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_weight}</label>
                  <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full p-2 border rounded bg-white" />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_height}</label>
                  <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full p-2 border rounded bg-white" />
               </div>

               <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t.label_activity}</label>
                  <select 
                     value={activity} 
                     onChange={e => setActivity(Number(e.target.value))}
                     className="w-full p-2 border rounded bg-white"
                  >
                     <option value={1.2}>{t.opt_sedentary}</option>
                     <option value={1.375}>{t.opt_light}</option>
                     <option value={1.55}>{t.opt_moderate}</option>
                     <option value={1.725}>{t.opt_active}</option>
                     <option value={1.9}>{t.opt_very_active}</option>
                  </select>
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
               <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="text-center pb-4">
                     <span className="block text-slate-500 text-sm uppercase mb-1">{t.res_bmr}</span>
                     <span className="text-2xl font-bold text-slate-400">{result.bmr} kcal</span>
                  </div>
                  
                  <div className="grid gap-4">
                     <MacroCard title="Maintenance" calories={result.tdee} label={t.res_tdee} />
                     <MacroCard title="Cutting (-500)" calories={result.tdee - 500} label={t.res_cutting} />
                     <MacroCard title="Bulking (+500)" calories={result.tdee + 500} label={t.res_bulking} />
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