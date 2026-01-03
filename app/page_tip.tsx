import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Coins } from 'lucide-react';

interface TipProps {
  dict: Dictionary;
}

export const TipPage: React.FC<TipProps> = ({ dict }) => {
  const t = dict.tools.tip_calculator;
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const b = parseFloat(bill);
    if (!b) return;
    
    const tipAmount = b * (tipPercent / 100);
    const total = b + tipAmount;
    const perPerson = total / people;

    setResult({ tip: tipAmount, total, perPerson });
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de Gorjeta</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa Calculadora de Gorjeta ajuda você a calcular rapidamente quanto deixar de gorjeta em restaurantes, 
                bares ou serviços. A gorjeta é uma prática comum em muitos países para mostrar apreço por um bom serviço. 
                As porcentagens padrão variam entre 10% e 20%, dependendo da qualidade do serviço e das normas culturais locais.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A ferramenta permite que você insira o valor da conta, escolha uma porcentagem de gorjeta (10%, 15% ou 20% 
                são valores comuns, mas você pode inserir qualquer valor) e especifique quantas pessoas vão dividir a conta. 
                A calculadora mostrará o valor da gorjeta, o total a pagar e quanto cada pessoa deve contribuir.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é especialmente útil quando você está jantando em grupo e precisa dividir a conta de forma 
                justa, incluindo a gorjeta. Ela elimina a necessidade de cálculos mentais e garante que todos paguem sua 
                parte correta. Use os botões rápidos para porcentagens comuns ou insira um valor personalizado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_bill}</label>
                  <input type="number" value={bill} onChange={e => setBill(e.target.value)} className="w-full p-2 border rounded-md" placeholder="100.00" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_tip}</label>
                  <div className="flex gap-2">
                     {[10, 15, 20].map(p => (
                        <button 
                           key={p} 
                           onClick={() => setTipPercent(p)}
                           className={`flex-1 rounded border text-sm font-bold ${tipPercent === p ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}
                        >
                           {p}%
                        </button>
                     ))}
                     <input type="number" value={tipPercent} onChange={e => setTipPercent(Number(e.target.value))} className="w-16 p-2 border rounded-md text-center" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_people}</label>
                  <div className="flex items-center gap-2">
                     <button onClick={() => setPeople(Math.max(1, people - 1))} className="p-2 border rounded bg-slate-50">-</button>
                     <span className="flex-1 text-center font-bold">{people}</span>
                     <button onClick={() => setPeople(people + 1)} className="p-2 border rounded bg-slate-50">+</button>
                  </div>
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                 <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">{t.res_tip}</div>
                    <div className="text-xl font-bold">{result.tip.toFixed(2)}</div>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">{t.res_total}</div>
                    <div className="text-xl font-bold">{result.total.toFixed(2)}</div>
                 </div>
                 <div className="bg-slate-900 text-white p-6 rounded-lg">
                    <div className="text-xs text-slate-300 uppercase font-bold mb-1">{t.res_per_person}</div>
                    <div className="text-3xl font-bold">{result.perPerson.toFixed(2)}</div>
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