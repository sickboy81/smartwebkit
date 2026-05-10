import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Trophy, Plus, Minus, RotateCcw } from 'lucide-react';

interface ScoreProps {
  dict: Dictionary;
}

export const ScoreboardPage: React.FC<ScoreProps> = ({ dict }) => {
  const t = dict.tools.scoreboard;
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid grid-cols-2 gap-4 md:gap-12 text-center">
               {/* Team A */}
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">{t.team_a}</h2>
                  <div className="text-8xl font-bold text-blue-600 mb-6 font-mono">{scoreA}</div>
                  <div className="flex gap-4">
                     <Button onClick={() => setScoreA(Math.max(0, scoreA - 1))} variant="outline" size="icon" className="h-12 w-12 rounded-full border-blue-200 text-blue-600 hover:bg-blue-100">
                        <Minus className="w-6 h-6" />
                     </Button>
                     <Button onClick={() => setScoreA(scoreA + 1)} size="icon" className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="w-6 h-6" />
                     </Button>
                  </div>
               </div>

               {/* Team B */}
               <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col items-center">
                  <h2 className="text-xl font-bold text-red-900 mb-4">{t.team_b}</h2>
                  <div className="text-8xl font-bold text-red-600 mb-6 font-mono">{scoreB}</div>
                  <div className="flex gap-4">
                     <Button onClick={() => setScoreB(Math.max(0, scoreB - 1))} variant="outline" size="icon" className="h-12 w-12 rounded-full border-red-200 text-red-600 hover:bg-red-100">
                        <Minus className="w-6 h-6" />
                     </Button>
                     <Button onClick={() => setScoreB(scoreB + 1)} size="icon" className="h-12 w-12 rounded-full bg-red-600 hover:bg-red-700 text-white">
                        <Plus className="w-6 h-6" />
                     </Button>
                  </div>
               </div>
            </div>

            <div className="flex justify-center pt-8">
               <Button onClick={() => {setScoreA(0); setScoreB(0);}} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" /> {t.btn_reset}
               </Button>
            </div>

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};