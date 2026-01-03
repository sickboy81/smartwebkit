import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tag } from 'lucide-react';

interface DiscountProps {
  dict: Dictionary;
}

export const DiscountPage: React.FC<DiscountProps> = ({ dict }) => {
  const t = dict.tools.discount_calculator;
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<{ final: number; saved: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (!isNaN(p) && !isNaN(d)) {
      const saved = (p * d) / 100;
      const final = p - saved;
      setResult({ final, saved });
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Tag className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calculadora de Desconto</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa Calculadora de Desconto ajuda você a determinar rapidamente o preço final de um item após aplicar um desconto 
                percentual e quanto você está economizando. Esta ferramenta é útil ao fazer compras, comparar ofertas ou verificar 
                se uma promoção realmente oferece uma boa economia.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Para usar a calculadora, simplesmente insira o preço original do item e a porcentagem de desconto. A ferramenta 
                calculará automaticamente o valor do desconto e o preço final que você pagará. Isso ajuda a tomar decisões de compra 
                mais informadas e a identificar as melhores ofertas.
              </p>
              <p className="text-slate-600 leading-7">
                Esta calculadora é especialmente útil durante períodos de promoção, como Black Friday, liquidações de fim de temporada 
                ou vendas especiais. Ela elimina a necessidade de cálculos mentais e garante que você saiba exatamente quanto está 
                economizando antes de fazer uma compra.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_price}</label>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                    placeholder="100.00"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_discount}</label>
                  <input 
                    type="number" 
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                    placeholder="20"
                  />
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result && (
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                 <div className="p-6 bg-slate-900 text-white rounded-lg text-center">
                    <span className="text-sm uppercase opacity-70 mb-1 block">{t.res_final}</span>
                    <span className="text-4xl font-bold">{result.final.toFixed(2)}</span>
                 </div>
                 <div className="p-6 bg-green-50 text-green-800 border border-green-100 rounded-lg text-center">
                    <span className="text-sm uppercase opacity-70 mb-1 block">{t.res_saved}</span>
                    <span className="text-4xl font-bold">{result.saved.toFixed(2)}</span>
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