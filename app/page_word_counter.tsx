import React, { useState, useMemo } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Type } from 'lucide-react';

interface WordCounterProps {
  dict: Dictionary;
}

export const WordCounterPage: React.FC<WordCounterProps> = ({ dict }) => {
  const t = dict.tools.word_counter;
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) return { words: 0, chars: 0, paragraphs: 0, lines: 0 };

    const words = trimmed.split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    // Simple paragraph detection based on double newlines or non-empty lines
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const lines = text.split('\n').length;

    return { words, chars, paragraphs, lines };
  }, [text]);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Type className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                <span className="block text-3xl font-bold text-slate-900">{stats.words}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{t.stat_words}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                <span className="block text-3xl font-bold text-slate-900">{stats.chars}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{t.stat_chars}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                <span className="block text-3xl font-bold text-slate-900">{stats.paragraphs}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{t.stat_paragraphs}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                <span className="block text-3xl font-bold text-slate-900">{stats.lines}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{t.stat_lines}</span>
              </div>
            </div>

            <textarea 
              className="w-full h-80 p-4 rounded-md border border-slate-300 bg-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-slate-900 resize-y"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t.input_placeholder}
            />
            
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
