import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Layers } from 'lucide-react';

interface GlassProps {
  dict: Dictionary;
}

export const GlassPage: React.FC<GlassProps> = ({ dict }) => {
  const t = dict.tools.glassmorphism;
  const [blur, setBlur] = useState(10);
  const [transparency, setTransparency] = useState(0.25);
  const [color, setColor] = useState("#ffffff");

  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const rgba = `rgba(${r}, ${g}, ${b}, ${transparency})`;

  const css = `background: ${rgba};
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border: 1px solid rgba(255, 255, 255, 0.3);`;

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Layers className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_blur}: {blur}px</label>
                  <input type="range" min="0" max="40" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_transparency}: {transparency}</label>
                  <input type="range" min="0" max="1" step="0.05" value={transparency} onChange={e => setTransparency(Number(e.target.value))} className="w-full" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_color}</label>
                  <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-10 cursor-pointer" />
               </div>
               
               <div className="p-4 bg-slate-900 rounded-md">
                  <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap">{css}</pre>
               </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500">
                <div 
                  className="w-48 h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                  style={{
                    background: rgba,
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                   Glass Effect
                </div>
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