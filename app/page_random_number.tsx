import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Dices, Copy, Check } from 'lucide-react';

interface RandomProps {
  dict: Dictionary;
}

export const RandomPage: React.FC<RandomProps> = ({ dict }) => {
  const t = dict.tools.random_number_generator;
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [qty, setQty] = useState(1);
  const [unique, setUnique] = useState(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let result: number[] = [];
    if (unique && (max - min + 1) < qty) {
      alert("Range too small for unique numbers");
      return;
    }

    if (unique) {
      const available = Array.from({length: max - min + 1}, (_, i) => i + min);
      for (let i = 0; i < qty; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        result.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }
    } else {
      for (let i = 0; i < qty; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
    setNumbers(result);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (numbers.length === 0) return;
    try {
      await navigator.clipboard.writeText(numbers.join(', '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Dices className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gerador de Números Aleatórios</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nosso Gerador de Números Aleatórios permite criar números aleatórios dentro de um intervalo especificado. 
                Você pode definir o valor mínimo, o valor máximo, a quantidade de números a gerar e escolher se deseja números 
                únicos (sem repetição) ou permitir duplicatas.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Esta ferramenta é útil para uma variedade de propósitos: sorteios, jogos, testes aleatórios, amostragem estatística, 
                geração de dados de teste para desenvolvimento de software, ou qualquer situação onde você precise de números aleatórios. 
                A opção de números únicos é especialmente útil para sorteios onde cada número só pode aparecer uma vez.
              </p>
              <p className="text-slate-600 leading-7">
                Os números gerados são verdadeiramente aleatórios e são gerados usando o gerador de números aleatórios do navegador. 
                Você pode copiar os números gerados facilmente com um único clique. A ferramenta suporta até 1000 números por vez, 
                tornando-a adequada tanto para uso simples quanto para necessidades mais complexas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_min}</label>
                  <input 
                    type="number" 
                    value={min}
                    onChange={(e) => setMin(Number(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_max}</label>
                  <input 
                    type="number" 
                    value={max}
                    onChange={(e) => setMax(Number(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_quantity}</label>
                  <input 
                    type="number" 
                    value={qty}
                    min="1"
                    max="1000"
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <div className="flex items-center h-10">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={unique} 
                      onChange={(e) => setUnique(e.target.checked)} 
                      className="w-4 h-4 text-slate-900 rounded focus:ring-slate-900"
                    />
                    <span className="text-sm text-slate-600">{t.label_unique}</span>
                  </label>
               </div>
            </div>

            <Button onClick={generate} size="lg" className="w-full">
               {t.btn_generate}
            </Button>

            {numbers.length > 0 && (
              <div className="relative p-6 bg-slate-50 rounded-lg border border-slate-100">
                 <div className="absolute top-2 right-2">
                    <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      {copied ? t.btn_copied : t.btn_copy}
                    </Button>
                 </div>
                 <div className="flex flex-wrap gap-2 pt-2">
                    {numbers.map((n, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full font-mono text-lg font-medium text-slate-900 shadow-sm">
                        {n}
                      </span>
                    ))}
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