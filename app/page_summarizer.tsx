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
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <FileOutput className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Resumidor de Texto Inteligente</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Resumo de Texto utiliza um algoritmo baseado em frequência de palavras para identificar e 
                extrair as sentenças mais importantes de um texto. Esta técnica analisa a frequência de palavras-chave (excluindo 
                palavras comuns como "o", "a", "e") e pontua cada sentença com base na importância das palavras que contém.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Para usar a ferramenta, cole seu texto longo no campo de entrada e ajuste o controle deslizante para escolher 
                quantas sentenças você deseja no resumo (de 1 a 10). Clique em "Resumir" e a ferramenta identificará automaticamente 
                as sentenças mais importantes, mantendo a ordem original do texto para preservar o contexto e o fluxo.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é perfeita para estudantes que precisam resumir artigos longos, profissionais que precisam criar 
                resumos executivos, ou qualquer pessoa que queira extrair rapidamente os pontos principais de um texto extenso. 
                O resumo é gerado localmente no seu navegador, garantindo que seu conteúdo permaneça privado e seguro.
              </p>
            </div>
            
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