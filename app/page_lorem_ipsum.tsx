import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AlignLeft, Check, Copy, RefreshCw } from 'lucide-react';

interface LoremProps {
  dict: Dictionary;
}

const LOREM_TEXT = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
  "Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
];

// Helper to get sentences from paragraphs
const getSentences = () => {
  return LOREM_TEXT.join(' ')
    .split(/(?<=[.!?])\s+/)
    .filter(s => s.trim().length > 0);
};

export const LoremPage: React.FC<LoremProps> = ({ dict }) => {
  const t = dict.tools.lorem_ipsum;
  const [count, setCount] = useState(3);
  const [mode, setMode] = useState<'paragraphs' | 'sentences'>('paragraphs');
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let result = [];
    
    if (mode === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        result.push(LOREM_TEXT[i % LOREM_TEXT.length]);
      }
      setOutput(result.join('\n\n'));
    } else {
      const sentences = getSentences();
      for (let i = 0; i < count; i++) {
        result.push(sentences[i % sentences.length]);
      }
      setOutput(result.join(' '));
    }
    
    setCopied(false);
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
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlignLeft className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gerador de Texto Lorem Ipsum</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Lorem Ipsum é um texto padrão usado na indústria gráfica e de design desde os anos 1500. É um texto em latim 
                que não tem significado real, mas simula a aparência de texto real, permitindo que designers se concentrem no 
                layout, tipografia e esquemas de cores sem serem distraídos por conteúdo legível.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta gera texto Lorem Ipsum personalizado para seus projetos de design e desenvolvimento. Você pode 
                escolher entre gerar parágrafos completos ou sentenças individuais, e especificar a quantidade desejada. Isso é 
                essencial para prototipagem, mockups e testes de layout antes que o conteúdo final esteja disponível.
              </p>
              <p className="text-slate-600 leading-7">
                Usar texto placeholder é uma prática recomendada em UI/UX design, pois simula a aparência de texto real, permitindo 
                que stakeholders revisem a estrutura do design antes que o texto final seja finalizado. Nosso gerador garante que 
                você não precise copiar e colar a mesma sentença repetidamente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-end gap-4">
              
              <div className="w-full sm:w-auto space-y-2">
                <label className="text-sm font-medium">{t.label_type}</label>
                <div className="flex bg-slate-100 p-1 rounded-md border border-slate-200">
                  <button
                    onClick={() => setMode('paragraphs')}
                    className={`flex-1 px-4 py-1.5 text-sm font-medium rounded transition-all ${
                      mode === 'paragraphs' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t.opt_paragraphs}
                  </button>
                  <button
                    onClick={() => setMode('sentences')}
                    className={`flex-1 px-4 py-1.5 text-sm font-medium rounded transition-all ${
                      mode === 'sentences' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t.opt_sentences}
                  </button>
                </div>
              </div>

               <div className="w-full sm:w-32 space-y-2">
                <label className="text-sm font-medium">{t.label_quantity}</label>
                <input 
                  type="number" 
                  min="1" 
                  max="50" 
                  value={count} 
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                />
              </div>

              <div className="w-full sm:w-auto">
                <Button onClick={generate} className="w-full gap-2">
                  <RefreshCw className="h-4 w-4" /> {t.btn_generate}
                </Button>
              </div>

            </div>

            {output && (
              <div className="relative p-4 rounded-md border border-slate-200 bg-slate-50 min-h-[10rem]">
                <div className="absolute right-2 top-2">
                   <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1 bg-white border shadow-sm">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? t.btn_copied : t.btn_copy}
                  </Button>
                </div>
                <div className="pr-12 whitespace-pre-wrap text-slate-800 leading-relaxed">
                  {output}
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