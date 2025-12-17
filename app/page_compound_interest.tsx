import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TrendingUp } from 'lucide-react';

interface InterestProps {
  dict: Dictionary;
}

export const CompoundInterestPage: React.FC<InterestProps> = ({ dict }) => {
  const t = dict.tools.compound_interest;
  const [principal, setPrincipal] = useState("1000");
  const [monthly, setMonthly] = useState("100");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");
  const [result, setResult] = useState<{ total: number, interest: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const m = parseFloat(monthly);
    const r = parseFloat(rate) / 100;
    const t_years = parseFloat(years);
    const n = 12; // Monthly compounding

    // Formula: A = P(1 + r/n)^(nt) + PMT * (((1 + r/n)^(nt) - 1) / (r/n))
    const compoundPrincipal = p * Math.pow(1 + r/n, n * t_years);
    const futureValueSeries = m * ((Math.pow(1 + r/n, n * t_years) - 1) / (r/n));
    const totalValue = compoundPrincipal + futureValueSeries;
    const totalInvested = p + (m * 12 * t_years);
    
    setResult({
        total: totalValue,
        interest: totalValue - totalInvested
    });
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de Juros Compostos</h3>
              <p className="text-slate-600 leading-7 mb-3">
                A Calculadora de Juros Compostos ajuda você a entender o poder dos juros compostos no crescimento de seus investimentos 
                ou economias. Juros compostos são juros calculados sobre o valor principal inicial e também sobre os juros acumulados 
                de períodos anteriores, resultando em crescimento exponencial ao longo do tempo.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Esta calculadora leva em conta não apenas um investimento inicial, mas também contribuições mensais regulares. Ela 
                mostra o valor total que você terá após o período especificado e quanto desse valor são juros ganhos. Quanto mais 
                tempo você investir e quanto maior a taxa de juros, maior será o efeito dos juros compostos.
              </p>
              <p className="text-slate-600 leading-7">
                Use esta ferramenta para planejar sua aposentadoria, calcular o crescimento de poupanças, comparar diferentes opções 
                de investimento ou entender o impacto de começar a investir cedo. Os juros compostos são frequentemente chamados de 
                "a oitava maravilha do mundo" devido ao seu poder de multiplicar riqueza ao longo do tempo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_principal}</label>
                  <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_monthly}</label>
                  <input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_rate}</label>
                  <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_years}</label>
                  <input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-green-50 border border-green-100 p-6 rounded-lg text-center">
                    <div className="text-xs uppercase text-green-800 font-bold mb-1">{t.res_total}</div>
                    <div className="text-3xl font-bold text-green-700">
                       {result.total.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                    </div>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center">
                    <div className="text-xs uppercase text-slate-500 font-bold mb-1">{t.res_interest}</div>
                    <div className="text-2xl font-bold text-slate-700">
                       {result.interest.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                    </div>
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