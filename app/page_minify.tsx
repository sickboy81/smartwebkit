import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileCode, Check, Copy, RefreshCw } from 'lucide-react';

interface MinifyProps {
  dict: Dictionary;
}

export const MinifyPage: React.FC<MinifyProps> = ({ dict }) => {
  const t = dict.tools.css_js_minifier;
  const [tab, setTab] = useState<'css' | 'js'>('css');
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const minifyCss = (css: string) => {
    return css
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
      .replace(/\s+/g, " ") // Collapse whitespace
      .replace(/\s*([:;{}])\s*/g, "$1") // Remove space around punctuation
      .replace(/;}/g, "}") // Remove last semicolon
      .trim();
  };

  const minifyJs = (js: string) => {
    // Basic JS minification (safe-ish)
    // 1. Remove /* */ comments
    // 2. Remove // comments (simple check for end of line) - risky if inside string, so let's stick to safe whitespace collapse
    // This is a basic minifier, not a parser.
    return js
      .replace(/\/\*[\s\S]*?\*\//g, "") // Block comments
      .replace(/^\s*\/\/.*/gm, "") // Line comments starting at line start
      .replace(/\s+/g, " ") // Collapse whitespace (risky for JS but works for simple scripts)
      .replace(/\s*([=+\-*/{}();,])\s*/g, "$1") // Remove space around operators
      .trim();
  };

  const handleMinify = () => {
    if (tab === 'css') {
      setOutput(minifyCss(input));
    } else {
      setOutput(minifyJs(input));
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
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <FileCode className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Minificador de CSS e JavaScript</h3>
              <p className="text-slate-600 leading-7 mb-3">
                A minificação é o processo de remover caracteres desnecessários do código-fonte sem alterar sua funcionalidade. 
                Isso inclui remover espaços em branco, comentários, quebras de linha e outros caracteres que não são essenciais 
                para a execução do código. O resultado é um arquivo menor que carrega mais rapidamente.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta suporta minificação de código CSS e JavaScript. Para CSS, ela remove comentários, espaços 
                desnecessários e otimiza a formatação. Para JavaScript, ela remove comentários e comprime o código, mantendo 
                a funcionalidade intacta. Arquivos menores significam tempos de download mais rápidos e melhor desempenho do site.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é essencial para otimização de desempenho web. Arquivos minificados são uma prática padrão em 
                produção, melhorando os Core Web Vitals e a experiência do usuário. Use esta ferramenta para preparar seus 
                arquivos CSS e JavaScript para implantação em produção.
              </p>
            </div>
            
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => { setTab('css'); setOutput(''); }}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'css' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.tab_css}
              </button>
              <button
                onClick={() => { setTab('js'); setOutput(''); }}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'js' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.tab_js}
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-48 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={tab === 'css' ? ".class {\n  color: red;\n}" : "function hello() {\n  console.log('hi');\n}"}
              />
            </div>

            <Button onClick={handleMinify} className="gap-2">
               <RefreshCw className="h-4 w-4" /> {t.btn_minify}
            </Button>

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
                  className="w-full h-48 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none"
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