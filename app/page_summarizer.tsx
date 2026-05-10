import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileOutput } from 'lucide-react';

interface SummarizerProps {
  dict: Dictionary;
}

export const SummarizerPage: React.FC<SummarizerProps> = ({ dict }) => {
  const t = dict.tools.text_summarizer;
  const [input, setInput] = useState("");
  const [sentencesCount, setSentencesCount] = useState(3);
  const [summary, setSummary] = useState("");

  const summarize = () => {
    if (!input.trim()) return;

    // 1. Clean and split sentences
    const sentences = input.match(/[^\.!\?]+[\.!\?]+/g) || [input];
    
    // 2. Tokenize words and frequency map
    const wordFreq: Record<string, number> = {};
    const stopwords = new Set(['the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'but', 'if', 'then', 'else', 'when', 'at', 'from', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once']);
    
    sentences.forEach(s => {
      const words: string[] = s.toLowerCase().match(/\b\w+\b/g) || [];
      words.forEach(w => {
        if (!stopwords.has(w) && w.length > 2) {
          wordFreq[w] = (wordFreq[w] || 0) + 1;
        }
      });
    });

    // 3. Score sentences
    const sentenceScores = sentences.map((s, index) => {
      const words: string[] = s.toLowerCase().match(/\b\w+\b/g) || [];
      let score = 0;
      words.forEach(w => {
        if (wordFreq[w]) score += wordFreq[w];
      });
      // Normalize by length to avoid bias towards long sentences
      if (words.length > 0) score = score / words.length;
      return { index, text: s, score };
    });

    // 4. Sort and pick top N
    sentenceScores.sort((a, b) => b.score - a.score);
    const topSentences = sentenceScores.slice(0, sentencesCount);
    
    // 5. Reorder by original index to maintain flow
    topSentences.sort((a, b) => a.index - b.index);

    setSummary(topSentences.map(s => s.text.trim()).join(' '));
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileOutput className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.input_label}</label>
               <textarea 
                 className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none"
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 placeholder="Paste your long text here..."
               />
            </div>

            <div className="flex items-center gap-4">
               <label className="text-sm font-medium whitespace-nowrap">{t.range_label}: {sentencesCount}</label>
               <input 
                 type="range" 
                 min="1" 
                 max="10" 
                 value={sentencesCount}
                 onChange={e => setSentencesCount(Number(e.target.value))}
                 className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
               />
            </div>

            <Button onClick={summarize} size="lg" className="w-full">
               {t.btn_summarize}
            </Button>

            {summary && (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg">
                 <h3 className="text-xs uppercase font-bold text-slate-500 mb-2">{t.res_summary}</h3>
                 <p className="text-slate-800 leading-relaxed">{summary}</p>
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