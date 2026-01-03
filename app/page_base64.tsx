import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Binary, Check, Copy, ArrowDownUp } from 'lucide-react';

interface Base64Props {
  dict: Dictionary;
}

export const Base64Page: React.FC<Base64Props> = ({ dict }) => {
  const t = dict.tools.base64_converter;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch (e) {
      setOutput("Error: Invalid character for Base64 encoding.");
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch (e) {
      setOutput("Error: Invalid Base64 string.");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Binary className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Codificador e Decodificador Base64</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Base64 é um esquema de codificação que converte dados binários em uma representação de texto usando apenas 64 
                caracteres ASCII. É amplamente usado para transmitir dados binários através de meios projetados para texto, como 
                e-mail, XML ou JSON. Base64 não é criptografia, mas sim uma forma de codificação que permite que dados binários 
                sejam representados como texto.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta permite codificar qualquer string de texto em Base64 ou decodificar uma string Base64 de volta 
                ao texto original. Isso é útil para desenvolvedores que precisam incorporar imagens em HTML/CSS usando Data URIs, 
                transmitir dados complexos como strings simples, ou para ofuscação básica de dados.
              </p>
              <p className="text-slate-600 leading-7">
                Todo o processamento acontece localmente no seu navegador, garantindo que seus dados permaneçam privados. A 
                ferramenta suporta texto UTF-8 padrão, preservando emojis e caracteres especiais corretamente durante a codificação 
                e decodificação.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-32 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={encode} className="gap-2">
                <ArrowDownUp className="h-4 w-4" /> {t.btn_encode}
              </Button>
              <Button onClick={decode} variant="outline" className="gap-2">
                <ArrowDownUp className="h-4 w-4" /> {t.btn_decode}
              </Button>
            </div>

            {output && (
              <div className="space-y-2">
                 <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">{t.output_label}</label>
                  <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? t.btn_copied : t.btn_copy}
                  </Button>
                </div>
                <textarea 
                  readOnly
                  className="w-full h-32 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none"
                  value={output}
                />
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