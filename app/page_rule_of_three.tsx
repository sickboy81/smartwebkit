import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calculator } from 'lucide-react';

interface RuleOfThreeProps {
  dict: Dictionary;
}

export const RuleOfThreePage: React.FC<RuleOfThreeProps> = ({ dict }) => {
  const t = dict.tools.rule_of_three;
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [x, setX] = useState<string | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const valA = parseFloat(a);
    const valB = parseFloat(b);
    const valC = parseFloat(c);

    if (isNaN(valA) || isNaN(valB) || isNaN(valC)) {
      setError(t.error_invalid);
      setX(null);
      return;
    }
    
    if (valA === 0) {
      setError(t.error_invalid);
      setX(null);
      return;
    }

    // A -> B
    // C -> X
    // X = (B * C) / A
    const result = (valB * valC) / valA;
    setX(result.toFixed(2));
    setError("");
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de Regra de Três</h3>
              <p className="text-slate-600 leading-7 mb-3">
                A Regra de Três é um método matemático simples e poderoso para resolver problemas de proporção. É amplamente usada 
                em situações do dia a dia, como calcular quantidades em receitas, converter medidas, calcular descontos ou resolver 
                problemas de proporcionalidade direta. A fórmula básica é: se A está para B, então C está para X, onde X = (B × C) / A.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa calculadora facilita o uso da Regra de Três, permitindo que você insira três valores conhecidos e calcule 
                automaticamente o quarto valor desconhecido. A interface visual mostra claramente a relação entre os valores, tornando 
                fácil entender e verificar seus cálculos.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é útil para estudantes aprendendo matemática, profissionais que precisam fazer cálculos rápidos de 
                proporção, ou qualquer pessoa que precise resolver problemas de proporcionalidade. A Regra de Três é uma das técnicas 
                matemáticas mais práticas e amplamente aplicáveis.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
              {/* Group 1 */}
              <div className="flex flex-col gap-2 w-full md:w-auto">
                 <label className="text-xs font-bold text-slate-500 uppercase">{t.label_a}</label>
                 <input 
                    type="number" 
                    value={a} 
                    onChange={e => setA(e.target.value)}
                    className="p-3 text-lg border rounded-md shadow-sm w-full md:w-32 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="A"
                 />
              </div>
              
              <div className="text-2xl font-bold text-slate-300">→</div>

              <div className="flex flex-col gap-2 w-full md:w-auto">
                 <label className="text-xs font-bold text-slate-500 uppercase">{t.label_b}</label>
                 <input 
                    type="number" 
                    value={b} 
                    onChange={e => setB(e.target.value)}
                    className="p-3 text-lg border rounded-md shadow-sm w-full md:w-32 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="B"
                 />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
               <div className="flex flex-col gap-2 w-full md:w-auto">
                 <label className="text-xs font-bold text-slate-500 uppercase">{t.label_c}</label>
                 <input 
                    type="number" 
                    value={c} 
                    onChange={e => setC(e.target.value)}
                    className="p-3 text-lg border rounded-md shadow-sm w-full md:w-32 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="C"
                 />
              </div>

              <div className="text-2xl font-bold text-slate-300">→</div>

               <div className="flex flex-col gap-2 w-full md:w-auto relative">
                 <label className="text-xs font-bold text-slate-500 uppercase">{t.label_x}</label>
                 <div className={`flex items-center justify-center p-3 text-lg border rounded-md shadow-sm w-full h-[54px] md:w-32 bg-white ${x ? 'text-slate-900 font-bold bg-green-50 border-green-200' : 'text-slate-400'}`}>
                    {x ? x : "X"}
                 </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button onClick={calculate} size="lg" className="w-full md:w-1/2">
                {t.btn_calculate}
              </Button>
            </div>
            {error && <p className="text-center text-red-500 font-medium">{error}</p>}
            
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