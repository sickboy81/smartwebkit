import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shuffle, Trophy, Trash2 } from 'lucide-react';

interface NamePickerProps {
  dict: Dictionary;
}

export const NamePickerPage: React.FC<NamePickerProps> = ({ dict }) => {
  const t = dict.tools.name_picker;
  const [input, setInput] = useState("");
  const [winnerCount, setWinnerCount] = useState(1);
  const [winners, setWinners] = useState<string[]>([]);
  const [error, setError] = useState("");

  const pickWinners = () => {
    const names = input.split(/[\n,]+/).map(s => s.trim()).filter(s => s.length > 0);
    
    if (names.length === 0) {
      setError(t.err_empty);
      setWinners([]);
      return;
    }

    if (winnerCount < 1) {
      setWinnerCount(1);
      return;
    }

    // Fisher-Yates Shuffle
    const shuffled = [...names];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selected = shuffled.slice(0, winnerCount);
    setWinners(selected);
    setError("");
  };

  const clearList = () => {
    setInput("");
    setWinners([]);
    setError("");
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
                className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Alice&#10;Bob&#10;Charlie"
              />
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end">
               <div className="w-full sm:w-1/3 space-y-2">
                  <label className="text-sm font-medium">{t.label_count}</label>
                  <input 
                    type="number" 
                    min="1"
                    value={winnerCount}
                    onChange={(e) => setWinnerCount(Number(e.target.value))}
                    className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <Button onClick={pickWinners} size="lg" className="flex-1 gap-2">
                  <Trophy className="h-4 w-4" /> {t.btn_pick}
               </Button>
               <Button onClick={clearList} variant="outline" size="lg" className="gap-2">
                  <Trash2 className="h-4 w-4" />
               </Button>
            </div>

            {winners.length > 0 && (
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-100 rounded-xl text-center space-y-4 animate-in fade-in zoom-in duration-500">
                 <h3 className="text-yellow-800 uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4" /> {t.res_winners}
                 </h3>
                 <div className="flex flex-wrap gap-4 justify-center">
                    {winners.map((winner, idx) => (
                       <div key={idx} className="bg-white px-6 py-3 rounded-full shadow-sm border border-yellow-200 text-2xl font-bold text-slate-800">
                          {winner}
                       </div>
                    ))}
                 </div>
              </div>
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