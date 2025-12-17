import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Timer, Play, Pause, RotateCcw } from 'lucide-react';

interface PomodoroProps {
  dict: Dictionary;
}

export const PomodoroPage: React.FC<PomodoroProps> = ({ dict }) => {
  const t = dict.tools.pomodoro_timer;
  
  const MODES = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
  };

  const [timeLeft, setTimeLeft] = useState(MODES.focus);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'focus' | 'short' | 'long'>('focus');

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Optional: Add audio beep here
      if (document.title !== "🔔 Done!") document.title = "🔔 Done!";
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Update document title for visibility in tabs
  useEffect(() => {
    if (isActive) {
      const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
      const s = (timeLeft % 60).toString().padStart(2, '0');
      document.title = `${m}:${s} - Pomodoro`;
    } else {
      document.title = "SmartWebKit - Pomodoro";
    }
  }, [timeLeft, isActive]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(MODES[mode]);
  };

  const changeMode = (newMode: 'focus' | 'short' | 'long') => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(MODES[newMode]);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Timer className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Técnica Pomodoro para Produtividade</h3>
              <p className="text-slate-600 leading-7 mb-3">
                A Técnica Pomodoro é um método de gerenciamento de tempo comprovado que ajuda a aumentar a produtividade 
                e reduzir a fadiga mental. Desenvolvida por Francesco Cirillo no final dos anos 1980, a técnica divide o 
                trabalho em intervalos focados de 25 minutos (chamados "pomodoros"), separados por pausas curtas. Este 
                método treina seu cérebro para manter o foco e a concentração por períodos definidos.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Como usar: Selecione o modo "Foco" para uma sessão de trabalho de 25 minutos. Quando o timer terminar, 
                faça uma pausa curta de 5 minutos (modo "Pausa Curta"). Após completar 4 pomodoros, faça uma pausa longa 
                de 15 minutos (modo "Pausa Longa") para recarregar completamente. Este ciclo ajuda a manter altos níveis 
                de produtividade ao longo do dia.
              </p>
              <p className="text-slate-600 leading-7">
                A técnica é especialmente eficaz para tarefas que requerem concentração profunda, como programação, 
                escrita, estudo ou qualquer trabalho que exija foco mental. Ao dividir o trabalho em blocos gerenciáveis, 
                você reduz a procrastinação e aumenta a sensação de realização. O timer visual ajuda a manter a consciência 
                do tempo e cria um senso de urgência positiva que impulsiona a produtividade.
              </p>
            </div>
            
            <div className="flex justify-center gap-2 p-1 bg-slate-100 rounded-lg inline-flex mx-auto">
               <button 
                 onClick={() => changeMode('focus')}
                 className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${mode === 'focus' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
               >
                 {t.mode_focus}
               </button>
               <button 
                 onClick={() => changeMode('short')}
                 className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${mode === 'short' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
               >
                 {t.mode_short}
               </button>
               <button 
                 onClick={() => changeMode('long')}
                 className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${mode === 'long' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
               >
                 {t.mode_long}
               </button>
            </div>

            <div className="text-8xl font-bold tracking-tighter text-slate-900 font-mono my-8">
               {formatTime(timeLeft)}
            </div>

            <div className="flex justify-center gap-4">
               <Button onClick={toggleTimer} size="lg" className={`w-32 gap-2 ${isActive ? 'bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200' : ''}`}>
                  {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isActive ? t.btn_pause : t.btn_start}
               </Button>
               <Button onClick={resetTimer} variant="outline" size="lg">
                  <RotateCcw className="w-5 h-5" />
               </Button>
            </div>

            <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">
               {isActive ? t.status_running : t.status_paused}
            </div>

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none text-center">
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