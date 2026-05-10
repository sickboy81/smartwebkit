import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Clapperboard } from 'lucide-react';

interface BitrateProps {
  dict: Dictionary;
}

export const BitratePage: React.FC<BitrateProps> = ({ dict }) => {
  const t = dict.tools.bitrate_calculator;
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [size, setSize] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const h = parseFloat(hours) || 0;
    const m = parseFloat(minutes) || 0;
    const s = parseFloat(seconds) || 0;
    const sizeGB = parseFloat(size);

    if (sizeGB > 0) {
      const totalSeconds = (h * 3600) + (m * 60) + s;
      if (totalSeconds > 0) {
        // Size (GB) to Megabits (Mb)
        // 1 GB = 1024 MB = 1024 * 8 Megabits = 8192 Mb
        const totalMegabits = sizeGB * 8192;
        const bitrate = totalMegabits / totalSeconds;
        setResult(bitrate);
      }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clapperboard className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid grid-cols-3 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_hours}</label>
                  <input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full p-2 border rounded-md" placeholder="0" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_minutes}</label>
                  <input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full p-2 border rounded-md" placeholder="5" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_seconds}</label>
                  <input type="number" value={seconds} onChange={e => setSeconds(e.target.value)} className="w-full p-2 border rounded-md" placeholder="30" />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_size}</label>
               <input type="number" value={size} onChange={e => setSize(e.target.value)} className="w-full p-2 border rounded-md" placeholder="1.5" />
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               {t.btn_calculate}
            </Button>

            {result !== null && (
              <div className="bg-slate-900 text-white p-8 rounded-xl text-center space-y-2">
                 <h3 className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t.label_bitrate}</h3>
                 <div className="text-5xl font-bold">{result.toFixed(2)}</div>
                 <div className="text-sm text-slate-400">Mbps (Megabits per second)</div>
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