import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Type, Check, Copy } from 'lucide-react';

interface CaseConverterProps {
  dict: Dictionary;
}

export const CaseConverterPage: React.FC<CaseConverterProps> = ({ dict }) => {
  const t = dict.tools.case_converter;
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const toUpper = () => setInput(input.toUpperCase());
  const toLower = () => setInput(input.toLowerCase());
  
  const toCapital = () => {
    setInput(input.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '));
  };

  const toSpongeBob = () => {
    setInput(input.split('').map((char, index) => 
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join(''));
  };

  const handleCopy = async () => {
    if (!input) return;
    try {
      await navigator.clipboard.writeText(input);
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
              <Type className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Maiúsculas e Minúsculas</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta permite converter texto entre diferentes formatos de maiúsculas e minúsculas instantaneamente. 
                Se você acidentalmente deixou o Caps Lock ativado, precisa formatar títulos ou quer padronizar texto para 
                programação, esta ferramenta resolve o problema com um único clique.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A ferramenta oferece quatro modos de conversão: Maiúsculas (TUDO EM MAIÚSCULAS), Minúsculas (tudo em minúsculas), 
                Capitalizado (Primeira Letra De Cada Palavra) e Inverso (aLtErNaDo). Cada modo é útil para diferentes situações: 
                maiúsculas para títulos ou ênfase, minúsculas para normalização, capitalizado para títulos de artigos, e inverso 
                para efeitos especiais.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é especialmente útil para escritores, editores, desenvolvedores e qualquer pessoa que trabalhe 
                com texto. Ela economiza tempo e garante consistência em documentos, código-fonte ou qualquer conteúdo textual. 
                Basta colar seu texto, escolher o formato desejado e copiar o resultado.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-48 p-3 rounded-md border border-slate-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button onClick={toUpper} variant="outline">{t.btn_upper}</Button>
              <Button onClick={toLower} variant="outline">{t.btn_lower}</Button>
              <Button onClick={toCapital} variant="outline">{t.btn_capital}</Button>
              <Button onClick={toSpongeBob} variant="outline">{t.btn_inverse}</Button>
            </div>

            <Button onClick={handleCopy} className="w-full gap-2">
               {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
               {copied ? t.btn_copied : t.btn_copy}
            </Button>
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