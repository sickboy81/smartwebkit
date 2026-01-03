import React, { useState, useEffect, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Music2, Play, Square } from 'lucide-react';

interface MetronomeProps {
  dict: Dictionary;
}

export const MetronomePage: React.FC<MetronomeProps> = ({ dict }) => {
  const t = dict.tools.metronome;
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nextNoteTimeRef = useRef(0);
  const timerIDRef = useRef<number | null>(null);
  const lookahead = 25.0; // ms
  const scheduleAheadTime = 0.1; // s

  const playClick = (time: number) => {
    if (!audioCtxRef.current) return;
    const osc = audioCtxRef.current.createOscillator();
    const gainNode = audioCtxRef.current.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtxRef.current.destination);

    osc.frequency.value = 1000;
    gainNode.gain.value = 1;
    
    osc.start(time);
    osc.stop(time + 0.05);
  };

  const scheduler = () => {
    if (!audioCtxRef.current) return;
    while (nextNoteTimeRef.current < audioCtxRef.current.currentTime + scheduleAheadTime) {
      playClick(nextNoteTimeRef.current);
      const secondsPerBeat = 60.0 / bpm;
      nextNoteTimeRef.current += secondsPerBeat;
    }
    timerIDRef.current = window.setTimeout(scheduler, lookahead);
  };

  const toggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerIDRef.current) window.clearTimeout(timerIDRef.current);
    } else {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      setIsPlaying(true);
      nextNoteTimeRef.current = audioCtxRef.current.currentTime + 0.05;
      scheduler();
    }
  };

  useEffect(() => {
    return () => {
      if (timerIDRef.current) window.clearTimeout(timerIDRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Music2 className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-12 text-center py-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Metrônomo Online Preciso</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Um metrônomo é uma ferramenta essencial para músicos de todos os níveis, desde iniciantes aprendendo a manter 
                o ritmo até profissionais praticando peças complexas. Ele produz um pulso constante (batida) para ajudar você 
                a tocar em uma velocidade consistente, melhorando sua precisão rítmica e senso de tempo.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta permite ajustar o BPM (batidas por minuto) de 40 a 240, cobrindo desde tempos muito lentos 
                (Largo) até tempos muito rápidos (Presto). Use o controle deslizante para ajustar o tempo desejado ou clique 
                nos botões de play/stop para iniciar ou pausar o metrônomo. O som de clique é gerado usando a Web Audio API 
                do navegador, garantindo precisão e sincronização perfeita.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é perfeita para prática de instrumentos musicais, composição, gravação ou qualquer atividade 
                que requeira manter um ritmo constante. Funciona perfeitamente em qualquer dispositivo com um navegador moderno, 
                tornando-se uma alternativa conveniente e gratuita aos metrônomos físicos tradicionais.
              </p>
            </div>
            
            <div className="text-8xl font-bold font-mono text-slate-900">
               {bpm}
            </div>
            
            <div className="space-y-4">
               <input 
                 type="range" 
                 min="40" 
                 max="240" 
                 value={bpm} 
                 onChange={e => setBpm(Number(e.target.value))}
                 className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
               />
               <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Largo (40)</span>
                  <span>Andante (90)</span>
                  <span>Allegro (140)</span>
                  <span>Presto (200+)</span>
               </div>
            </div>

            <Button onClick={toggle} size="lg" className={`w-32 gap-2 h-16 text-lg ${isPlaying ? 'bg-slate-100 text-slate-900 border border-slate-300' : ''}`}>
               {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
               {isPlaying ? t.btn_stop : t.btn_start}
            </Button>

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