import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeftRight, Check, Copy } from 'lucide-react';

interface TextReverserProps {
  dict: Dictionary;
}

export const TextReverserPage: React.FC<TextReverserProps> = ({ dict }) => {
  const t = dict.tools.text_reverser;
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const reverseText = () => {
    setInput(input.split('').reverse().join(''));
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
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <ArrowLeftRight className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Inversor de Texto</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Inversão de Texto inverte a ordem dos caracteres em qualquer string de texto. Esta ferramenta 
                simples mas útil pode ser usada para uma variedade de propósitos: criar efeitos visuais interessantes, testar 
                algoritmos de processamento de texto, ou simplesmente para diversão e criatividade.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A inversão acontece caractere por caractere, então "Hello World" se torna "dlroW olleH". Esta operação preserva 
                espaços, pontuação e todos os caracteres especiais, apenas invertendo sua ordem. A ferramenta funciona com qualquer 
                tipo de texto, incluindo números, símbolos e caracteres Unicode.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é útil para desenvolvedores testando funções de manipulação de string, criadores de conteúdo 
                buscando efeitos visuais únicos, ou qualquer pessoa que precise inverter texto para fins específicos. O processamento 
                é instantâneo e acontece completamente no seu navegador.
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={reverseText} className="flex-1 gap-2">
                 <ArrowLeftRight className="h-4 w-4" /> {t.btn_reverse}
              </Button>
              <Button onClick={handleCopy} variant="outline" className="flex-1 gap-2">
                 {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 {copied ? t.btn_copied : t.btn_copy}
              </Button>
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