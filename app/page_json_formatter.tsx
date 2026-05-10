import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Copy, Check, FileJson, Minus, RefreshCw } from 'lucide-react';

interface JsonPageProps {
  dict: Dictionary;
}

export const JsonPage: React.FC<JsonPageProps> = ({ dict }) => {
  const t = dict.tools.json_formatter;
  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError(t.error_invalid);
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError(t.error_invalid);
      setOutput("");
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
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileJson className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-40 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"key": "value"}'
              />
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={formatJson} className="gap-2">
                <RefreshCw className="h-4 w-4" /> {t.btn_format}
              </Button>
              <Button onClick={minifyJson} variant="outline" className="gap-2">
                <Minus className="h-4 w-4" /> {t.btn_minify}
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
                  className="w-full h-64 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none"
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