import React, { useState, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { TimerReset } from 'lucide-react';

interface ReactionProps {
  dict: Dictionary;
}

export const ReactionTimePage: React.FC<ReactionProps> = ({ dict }) => {
  const t = dict.tools.reaction_time;
  const [state, setState] = useState<'idle' | 'wait' | 'click' | 'result'>('idle');
  const [time, setTime] = useState(0);
  const timeoutRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);

  const handleClick = () => {
    if (state === 'idle' || state === 'result') {
      setState('wait');
      const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
      timeoutRef.current = setTimeout(() => {
        setState('click');
        startTimeRef.current = Date.now();
      }, randomDelay);
    } else if (state === 'wait') {
      // Too early
      clearTimeout(timeoutRef.current);
      setState('idle');
      alert(t.msg_too_early);
    } else if (state === 'click') {
      const endTime = Date.now();
      setTime(endTime - startTimeRef.current);
      setState('result');
    }
  };

  const getBgColor = () => {
    switch (state) {
      case 'idle': return 'bg-slate-200 hover:bg-slate-300';
      case 'wait': return 'bg-red-500 cursor-default';
      case 'click': return 'bg-green-500 cursor-pointer';
      case 'result': return 'bg-blue-500 text-white hover:bg-blue-600';
      default: return 'bg-slate-200';
    }
  };

  const getText = () => {
    switch (state) {
      case 'idle': return t.state_idle;
      case 'wait': return t.state_wait;
      case 'click': return t.state_click;
      case 'result': return `${time} ${t.state_result}`;
      default: return '';
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TimerReset className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent>
            
            <div 
              onClick={handleClick}
              className={`w-full h-80 rounded-xl flex items-center justify-center text-3xl font-bold transition-colors select-none cursor-pointer ${getBgColor()} ${state === 'wait' ? 'text-white' : 'text-slate-800'}`}
            >
               {getText()}
            </div>

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