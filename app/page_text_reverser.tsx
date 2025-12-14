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
            <CardTitle className="text-2xl flex items-center gap-2">
              <ArrowLeftRight className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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