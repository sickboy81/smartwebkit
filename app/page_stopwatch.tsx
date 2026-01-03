import React, { useState, useEffect, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Timer, Play, Pause, RotateCcw, Flag } from 'lucide-react';

interface StopwatchProps {
  dict: Dictionary;
}

export const StopwatchPage: React.FC<StopwatchProps> = ({ dict }) => {
  const t = dict.tools.stopwatch;
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Timer className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Cronômetro Online Preciso</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nosso Cronômetro Online oferece uma maneira precisa e fácil de medir intervalos de tempo. Perfeito para 
                treinos esportivos, experimentos científicos, testes de desempenho ou qualquer situação onde você precise 
                cronometrar eventos com precisão de centésimos de segundo.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A ferramenta inclui funcionalidades avançadas como marcação de voltas (laps), permitindo que você registre 
                múltiplos tempos durante uma única sessão. Isso é especialmente útil para corridas, natação ou qualquer 
                atividade onde você precise medir tempos parciais. Cada volta é registrada com seu número e tempo total 
                desde o início, permitindo uma análise detalhada do desempenho.
              </p>
              <p className="text-slate-600 leading-7">
                O cronômetro exibe o tempo no formato MM:SS.CC (minutos:segundos.centésimos), proporcionando uma leitura 
                clara e precisa. Os controles são intuitivos: use o botão Play/Pause para iniciar ou pausar, o botão 
                de bandeira para marcar voltas, e o botão de reset para zerar tudo. A interface é responsiva e funciona 
                perfeitamente em dispositivos móveis e desktop.
              </p>
            </div>
            
            <div className="text-7xl font-bold tracking-tighter text-slate-900 font-mono my-8">
               {formatTime(time)}
            </div>

            <div className="flex justify-center gap-4">
               <Button onClick={handleStartStop} size="lg" className={`w-32 gap-2 ${isRunning ? 'bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200' : ''}`}>
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isRunning ? t.btn_stop : t.btn_start}
               </Button>
               <Button onClick={handleLap} variant="outline" size="lg" disabled={!isRunning && time === 0}>
                  <Flag className="w-5 h-5" />
               </Button>
               <Button onClick={handleReset} variant="outline" size="lg">
                  <RotateCcw className="w-5 h-5" />
               </Button>
            </div>

            {laps.length > 0 && (
              <div className="mt-8 border rounded-md overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-medium">
                    <tr>
                      <th className="px-4 py-2">{t.th_lap}</th>
                      <th className="px-4 py-2 text-right">{t.th_total}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {laps.map((lapTime, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-4 py-2 text-slate-900 font-mono">#{index + 1}</td>
                        <td className="px-4 py-2 text-right text-slate-600 font-mono">{formatTime(lapTime)}</td>
                      </tr>
                    )).reverse()}
                  </tbody>
                </table>
              </div>
            )}

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