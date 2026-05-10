import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { StickyNote, Trash2 } from 'lucide-react';

interface MemoProps {
  dict: Dictionary;
}

export const MemoPage: React.FC<MemoProps> = ({ dict }) => {
  const t = dict.tools.memo_pad;
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('smartwebkit_memo');
    if (saved) setNote(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    localStorage.setItem('smartwebkit_memo', val);
  };

  const clear = () => {
    if (confirm("Are you sure?")) {
      setNote("");
      localStorage.removeItem('smartwebkit_memo');
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <StickyNote className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <textarea 
              className="w-full h-[500px] p-6 border rounded-lg focus:ring-2 focus:ring-yellow-200 focus:outline-none bg-yellow-50 text-slate-800 text-lg leading-relaxed resize-none shadow-inner font-handwriting"
              value={note}
              onChange={handleChange}
              placeholder={t.placeholder}
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
            />

            <div className="flex justify-end">
               <Button onClick={clear} variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50 gap-2">
                  <Trash2 className="w-4 h-4" /> {t.btn_clear}
               </Button>
            </div>

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