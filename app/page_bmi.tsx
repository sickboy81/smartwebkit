import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Activity } from 'lucide-react';

interface BMIProps {
  dict: Dictionary;
}

export const BMIPage: React.FC<BMIProps> = ({ dict }) => {
  const t = dict.tools.bmi_calculator;
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      // Metric: kg / (m^2) -> Input assumes cm for height usually
      const hM = h / 100; 
      const val = w / (hM * hM);
      setBmi(val);

      if (val < 18.5) setCategory("Underweight");
      else if (val < 25) setCategory("Normal weight");
      else if (val < 30) setCategory("Overweight");
      else setCategory("Obesity");
    }
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
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de IMC (Índice de Massa Corporal)</h3>
              <p className="text-slate-600 leading-7 mb-3">
                O IMC (Índice de Massa Corporal) é uma medida amplamente utilizada para avaliar se uma pessoa está com peso 
                adequado em relação à sua altura. É calculado dividindo o peso (em quilogramas) pelo quadrado da altura 
                (em metros). O IMC fornece uma estimativa geral da composição corporal e é usado por profissionais de saúde 
                como uma ferramenta de triagem inicial.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                As categorias de IMC são: Abaixo do peso (menos de 18,5), Peso normal (18,5-24,9), Sobrepeso (25-29,9) e 
                Obesidade (30 ou mais). É importante notar que o IMC é uma medida geral e não leva em conta fatores como 
                massa muscular, densidade óssea ou distribuição de gordura. Atletas com muita massa muscular podem ter um 
                IMC alto mesmo estando em excelente forma física.
              </p>
              <p className="text-slate-600 leading-7">
                Para usar esta calculadora, insira seu peso em quilogramas e sua altura em centímetros. A ferramenta calculará 
                automaticamente seu IMC e mostrará em qual categoria você se encontra. Consulte sempre um profissional de saúde 
                para uma avaliação completa e personalizada do seu peso e saúde.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_weight} (kg)</label>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_height} (cm)</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>
            <Button onClick={calculate} size="lg" className="w-full">{t.btn_calculate}</Button>
            
            {bmi !== null && (
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl text-center space-y-2">
                 <h3 className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t.res_bmi}</h3>
                 <div className="text-5xl font-bold text-slate-900">{bmi.toFixed(1)}</div>
                 <div className={`text-lg font-medium ${bmi < 18.5 ? 'text-blue-500' : bmi < 25 ? 'text-green-500' : bmi < 30 ? 'text-orange-500' : 'text-red-500'}`}>
                    {category}
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