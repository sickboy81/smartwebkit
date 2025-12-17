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
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Contador de Palavras Online</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Contador de Palavras fornece estatísticas detalhadas sobre seu texto em tempo real. Ela conta 
                palavras, caracteres, parágrafos e linhas enquanto você digita, ajudando você a atender requisitos de contagem de 
                palavras para artigos, ensaios, postagens de blog ou qualquer conteúdo escrito.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A ferramenta é especialmente útil para escritores, estudantes, blogueiros e profissionais de marketing que precisam 
                manter seus textos dentro de limites específicos. Muitas plataformas e publicações têm requisitos de contagem de 
                palavras, e esta ferramenta ajuda você a monitorar seu progresso em tempo real.
              </p>
              <p className="text-slate-600 leading-7">
                Todas as contagens são calculadas localmente no seu navegador, garantindo que seu conteúdo permaneça privado. A 
                ferramenta atualiza automaticamente as estatísticas conforme você digita, fornecendo feedback imediato sobre o 
                comprimento do seu texto.
              </p>
            </div>
            
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
