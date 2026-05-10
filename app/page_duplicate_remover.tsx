import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ListX, Check, Copy, Trash2 } from 'lucide-react';

interface DuplicateRemoverProps {
  dict: Dictionary;
}

export const DuplicateRemoverPage: React.FC<DuplicateRemoverProps> = ({ dict }) => {
  const t = dict.tools.duplicate_remover;
  const [input, setInput] = useState("");
  const [stats, setStats] = useState("");
  const [copied, setCopied] = useState(false);

  const removeDuplicates = () => {
    const lines = input.split('\n');
    const unique = new Set(lines);
    const result = Array.from(unique).join('\n');
    const removedCount = lines.length - unique.size;
    
    setInput(result);
    setStats(t.result_stats.replace('{0}', removedCount.toString()).replace('{1}', unique.size.toString()));
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
              <ListX className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-64 p-3 rounded-md border border-slate-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-900"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={removeDuplicates} className="flex-1 gap-2">
                 <Trash2 className="h-4 w-4" /> {t.btn_remove}
              </Button>
              <Button onClick={handleCopy} variant="outline" className="flex-1 gap-2">
                 {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                 {copied ? t.btn_copied : t.btn_copy}
              </Button>
            </div>

            {stats && (
               <p className="text-sm text-slate-600 font-medium text-center bg-slate-50 p-2 rounded">
                 {stats}
               </p>
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