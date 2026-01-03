import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface GradeProps {
  dict: Dictionary;
}

export const GradePage: React.FC<GradeProps> = ({ dict }) => {
  const t = dict.tools.grade_calculator;
  const [rows, setRows] = useState([{ grade: '', weight: '' }, { grade: '', weight: '' }]);
  const [result, setResult] = useState<number | null>(null);

  const addRow = () => setRows([...rows, { grade: '', weight: '' }]);
  
  const removeRow = (index: number) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  const updateRow = (index: number, field: 'grade' | 'weight', value: string) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const calculate = () => {
    let totalWeight = 0;
    let weightedSum = 0;

    rows.forEach(r => {
      const g = parseFloat(r.grade);
      const w = parseFloat(r.weight);
      if (!isNaN(g) && !isNaN(w)) {
        weightedSum += g * w;
        totalWeight += w;
      }
    });

    if (totalWeight > 0) {
      setResult(weightedSum / totalWeight);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-4">
               {rows.map((row, i) => (
                 <div key={i} className="flex gap-4 items-center">
                    <div className="flex-1">
                       <label className="text-xs text-slate-500 mb-1 block">{t.col_grade}</label>
                       <input 
                         type="number" 
                         value={row.grade} 
                         onChange={e => updateRow(i, 'grade', e.target.value)}
                         className="w-full p-2 border rounded-md"
                         placeholder="95"
                       />
                    </div>
                    <div className="flex-1">
                       <label className="text-xs text-slate-500 mb-1 block">{t.col_weight}</label>
                       <input 
                         type="number" 
                         value={row.weight} 
                         onChange={e => updateRow(i, 'weight', e.target.value)}
                         className="w-full p-2 border rounded-md"
                         placeholder="1"
                       />
                    </div>
                    <div className="pt-5">
                       <Button onClick={() => removeRow(i)} variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                       </Button>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-4">
               <Button onClick={addRow} variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" /> {t.btn_add}
               </Button>
               <Button onClick={calculate} className="flex-1">
                  {t.btn_calculate}
               </Button>
            </div>

            {result !== null && (
              <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
                 <h3 className="uppercase text-xs font-bold tracking-widest mb-2 opacity-70">{t.res_avg}</h3>
                 <div className="text-5xl font-bold">{result.toFixed(2)}</div>
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