import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileType, ArrowLeftRight, Check, Copy } from 'lucide-react';
import yaml from 'js-yaml';

interface YamlProps {
  dict: Dictionary;
}

export const YamlPage: React.FC<YamlProps> = ({ dict }) => {
  const t = dict.tools.yaml_json;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const toJson = () => {
    try {
      if (!input.trim()) return;
      const obj = yaml.load(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError("");
    } catch (e: any) {
      setError(e.message || t.error_invalid);
      setOutput("");
    }
  };

  const toYaml = () => {
    try {
      if (!input.trim()) return;
      const obj = JSON.parse(input);
      const yml = yaml.dump(obj);
      setOutput(yml);
      setError("");
    } catch (e: any) {
      setError(e.message || t.error_invalid);
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
      console.error(err);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4">
      <div className="space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileType className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">Input (YAML / JSON)</label>
                  <textarea 
                    className="w-full h-80 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="name: John Doe&#10;age: 30"
                  />
                  {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-medium">Output</label>
                     <Button onClick={handleCopy} size="sm" variant="ghost" className="h-6 gap-1">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        Copy
                     </Button>
                  </div>
                  <textarea 
                    readOnly
                    className="w-full h-80 p-3 border rounded-md bg-slate-50 font-mono text-sm focus:outline-none"
                    value={output}
                  />
               </div>
            </div>

            <div className="flex justify-center gap-4">
               <Button onClick={toJson} className="w-32 gap-2">
                  <ArrowLeftRight className="h-4 w-4" /> {t.btn_to_json}
               </Button>
               <Button onClick={toYaml} className="w-32 gap-2">
                  <ArrowLeftRight className="h-4 w-4" /> {t.btn_to_yaml}
               </Button>
            </div>

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none mx-auto max-w-3xl">
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