import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Terminal, Check, Copy, ArrowRightLeft } from 'lucide-react';

interface BinaryProps {
  dict: Dictionary;
}

export const BinaryPage: React.FC<BinaryProps> = ({ dict }) => {
  const t = dict.tools.binary_converter;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const textToBinary = () => {
    const bin = input.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    setOutput(bin);
  };

  const binaryToText = () => {
    const text = input.split(' ').map(bin => {
      return String.fromCharCode(parseInt(bin, 2));
    }).join('');
    setOutput(text);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
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
              <Terminal className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Texto para Binário</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Binário é o sistema numérico base 2 usado por computadores para representar dados. Cada caractere de texto pode ser 
                representado como uma sequência de 8 bits (0s e 1s). Nossa ferramenta converte texto legível em representação 
                binária e vice-versa, facilitando a compreensão de como computadores armazenam e processam texto.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Para converter texto em binário, cada caractere é convertido em seu valor ASCII correspondente, que é então representado 
                em binário. Por exemplo, a letra 'A' tem o valor ASCII 65, que em binário é 01000001. A conversão reversa faz o processo 
                inverso, convertendo sequências binárias de volta para texto legível.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é útil para estudantes aprendendo ciência da computação, desenvolvedores que precisam trabalhar com 
                dados binários, ou qualquer pessoa interessada em entender como computadores representam texto. É uma ferramenta educacional 
                valiosa que ajuda a visualizar a relação entre texto humano e representação binária de computadores.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4">
               <Button onClick={textToBinary} className="gap-2">
                  <ArrowRightLeft className="h-4 w-4" /> {t.btn_to_binary}
               </Button>
               <Button onClick={binaryToText} variant="outline" className="gap-2">
                  <ArrowRightLeft className="h-4 w-4" /> {t.btn_to_text}
               </Button>
            </div>

            <div className="space-y-2">
               <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">{t.output_label}</label>
                  <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {t.btn_copied}
                  </Button>
               </div>
               <textarea 
                 readOnly
                 className="w-full h-32 p-3 border rounded-md bg-slate-50 font-mono text-sm focus:outline-none"
                 value={output}
               />
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