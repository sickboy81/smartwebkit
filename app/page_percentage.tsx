import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Percent } from 'lucide-react';

interface PercentageProps {
  dict: Dictionary;
}

export const PercentagePage: React.FC<PercentageProps> = ({ dict }) => {
  const t = dict.tools.percentage_calculator;
  
  // State for 3 calculators
  const [c1, setC1] = useState({ x: "", y: "", res: "" });
  const [c2, setC2] = useState({ x: "", y: "", res: "" });
  const [c3, setC3] = useState({ x: "", y: "", res: "" });

  const calc1 = () => {
    const x = parseFloat(c1.x);
    const y = parseFloat(c1.y);
    if (!isNaN(x) && !isNaN(y)) {
      setC1({ ...c1, res: ((x / 100) * y).toFixed(2) });
    }
  };

  const calc2 = () => {
    const x = parseFloat(c2.x);
    const y = parseFloat(c2.y);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
      setC2({ ...c2, res: ((x / y) * 100).toFixed(2) + "%" });
    }
  };

  const calc3 = () => {
    const x = parseFloat(c3.x);
    const y = parseFloat(c3.y);
    if (!isNaN(x) && !isNaN(y) && x !== 0) {
      const change = ((y - x) / x) * 100;
      setC3({ ...c3, res: change.toFixed(2) + "%" });
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Percent className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de Porcentagem</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa Calculadora de Porcentagem oferece três modos diferentes para resolver problemas comuns envolvendo 
                porcentagens. As porcentagens são uma forma de expressar uma proporção ou fração de 100, e são amplamente 
                usadas em matemática, finanças, estatísticas e vida cotidiana.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                <strong>Modo 1 - "Quanto é X% de Y?"</strong>: Use este modo para encontrar uma porcentagem de um número. 
                Por exemplo, "Quanto é 20% de 500?" resulta em 100. Isso é útil para calcular descontos, impostos ou 
                qualquer parte de um todo.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                <strong>Modo 2 - "X é quantos por cento de Y?"</strong>: Use este modo para descobrir qual porcentagem 
                um número representa de outro. Por exemplo, "50 é quantos por cento de 200?" resulta em 25%. Isso é útil 
                para entender proporções e relações.
              </p>
              <p className="text-slate-600 leading-7">
                <strong>Modo 3 - "Variação percentual de X para Y"</strong>: Use este modo para calcular a mudança percentual 
                entre dois valores. Por exemplo, se algo mudou de 100 para 120, a variação é de 20%. Isso é útil para 
                calcular crescimento, declínio ou mudanças ao longo do tempo.
              </p>
            </div>
            
            {/* Mode 1: X% of Y */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-4">{t.mode_1}</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input 
                  type="number" 
                  placeholder="X"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c1.x}
                  onChange={e => setC1({ ...c1, x: e.target.value })}
                />
                <span className="text-slate-500 font-bold">%</span>
                <span className="text-slate-500 font-medium">of</span>
                <input 
                  type="number" 
                  placeholder="Y"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c1.y}
                  onChange={e => setC1({ ...c1, y: e.target.value })}
                />
                <Button onClick={calc1} size="sm">{t.btn_calculate}</Button>
                {c1.res && (
                  <div className="ml-auto font-bold text-xl text-slate-900 bg-white px-3 py-1 rounded border">
                    {c1.res}
                  </div>
                )}
              </div>
            </div>

            {/* Mode 2: X is what % of Y? */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-4">{t.mode_2}</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input 
                  type="number" 
                  placeholder="X"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c2.x}
                  onChange={e => setC2({ ...c2, x: e.target.value })}
                />
                <span className="text-slate-500 font-medium">is what % of</span>
                <input 
                  type="number" 
                  placeholder="Y"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c2.y}
                  onChange={e => setC2({ ...c2, y: e.target.value })}
                />
                <Button onClick={calc2} size="sm">{t.btn_calculate}</Button>
                 {c2.res && (
                  <div className="ml-auto font-bold text-xl text-slate-900 bg-white px-3 py-1 rounded border">
                    {c2.res}
                  </div>
                )}
              </div>
            </div>

            {/* Mode 3: Change from X to Y */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-4">{t.mode_3}</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <span className="text-slate-500 font-medium">From</span>
                <input 
                  type="number" 
                  placeholder="X"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c3.x}
                  onChange={e => setC3({ ...c3, x: e.target.value })}
                />
                <span className="text-slate-500 font-medium">to</span>
                <input 
                  type="number" 
                  placeholder="Y"
                  className="w-full sm:w-24 p-2 border rounded bg-white"
                  value={c3.y}
                  onChange={e => setC3({ ...c3, y: e.target.value })}
                />
                <Button onClick={calc3} size="sm">{t.btn_calculate}</Button>
                 {c3.res && (
                  <div className="ml-auto font-bold text-xl text-slate-900 bg-white px-3 py-1 rounded border">
                    {c3.res}
                  </div>
                )}
              </div>
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