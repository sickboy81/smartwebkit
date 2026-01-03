import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shuffle, Check, Copy } from 'lucide-react';

interface RandomizerProps {
  dict: Dictionary;
}

export const ListRandomizerPage: React.FC<RandomizerProps> = ({ dict }) => {
  const t = dict.tools.list_randomizer;
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const shuffleList = () => {
    const list = input.split('\n').filter(line => line.trim() !== "");
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    setInput(list.join('\n'));
    setCopied(false);
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
              <Shuffle className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-64 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Item 1&#10;Item 2&#10;Item 3"
              />
            </div>
            
            <div className="flex gap-4">
              <Button onClick={shuffleList} className="flex-1 gap-2">
                 <Shuffle className="h-4 w-4" /> {t.btn_shuffle}
              </Button>
              <Button onClick={handleCopy} variant="outline" className="flex-1 gap-2">
                 {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 {t.btn_copy}
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