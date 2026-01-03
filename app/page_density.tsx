import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BarChart } from 'lucide-react';

interface DensityProps {
  dict: Dictionary;
}

export const DensityPage: React.FC<DensityProps> = ({ dict }) => {
  const t = dict.tools.keyword_density;
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState<{word: string, count: number, density: string}[]>([]);

  const analyze = () => {
    if (!text.trim()) return;
    
    const words: string[] = text.toLowerCase().match(/\b\w+\b/g) || [];
    const total = words.length;
    const freq: Record<string, number> = {};
    const stopwords = new Set(['the', 'and', 'a', 'to', 'of', 'in', 'i', 'is', 'that', 'it', 'on', 'you', 'this', 'for', 'but', 'with', 'are', 'have', 'be', 'at', 'or', 'as', 'was', 'so', 'if', 'out', 'not']);

    words.forEach(w => {
      if (!stopwords.has(w) && w.length > 2) {
        freq[w] = (freq[w] || 0) + 1;
      }
    });

    const sorted = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / total) * 100).toFixed(2) + "%"
      }));

    setKeywords(sorted);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <BarChart className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.input_label}</label>
               <textarea 
                 className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none"
                 value={text}
                 onChange={e => setText(e.target.value)}
                 placeholder="Paste text here to analyze..."
               />
            </div>

            <Button onClick={analyze} size="lg" className="w-full">
               Check Density
            </Button>

            {keywords.length > 0 && (
              <div className="border rounded-md overflow-hidden">
                 <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 font-medium text-slate-500 border-b">
                       <tr>
                          <th className="px-4 py-2">{t.col_word}</th>
                          <th className="px-4 py-2">{t.col_count}</th>
                          <th className="px-4 py-2">{t.col_density}</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {keywords.map((k, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                             <td className="px-4 py-2 font-medium">{k.word}</td>
                             <td className="px-4 py-2">{k.count}</td>
                             <td className="px-4 py-2 text-slate-500">{k.density}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
            )}

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};