import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Keyboard } from 'lucide-react';

interface KeycodeProps {
  dict: Dictionary;
}

export const KeycodePage: React.FC<KeycodeProps> = ({ dict }) => {
  const t = dict.tools.keycode_info;
  const [eventData, setEventData] = useState<{key: string, code: string, which: number} | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      setEventData({
        key: e.key,
        code: e.code,
        which: e.which
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Keyboard className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 min-h-[300px] flex flex-col justify-center items-center text-center">
            
            {!eventData ? (
               <div className="text-2xl font-medium text-slate-400 animate-pulse">
                  {t.msg_press}
               </div>
            ) : (
               <div className="w-full space-y-8">
                  <div className="text-8xl font-bold text-slate-900 font-mono">
                     {eventData.which}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="bg-slate-50 p-4 rounded border border-slate-100">
                        <span className="text-xs uppercase text-slate-500 font-bold block mb-2">event.key</span>
                        <code className="text-xl text-blue-600 bg-white px-2 py-1 rounded border border-blue-100">
                           {eventData.key === " " ? "(Space)" : eventData.key}
                        </code>
                     </div>
                     <div className="bg-slate-50 p-4 rounded border border-slate-100">
                        <span className="text-xs uppercase text-slate-500 font-bold block mb-2">event.code</span>
                        <code className="text-xl text-green-600 bg-white px-2 py-1 rounded border border-green-100">
                           {eventData.code}
                        </code>
                     </div>
                     <div className="bg-slate-50 p-4 rounded border border-slate-100">
                        <span className="text-xs uppercase text-slate-500 font-bold block mb-2">event.which</span>
                        <code className="text-xl text-purple-600 bg-white px-2 py-1 rounded border border-purple-100">
                           {eventData.which}
                        </code>
                     </div>
                  </div>
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