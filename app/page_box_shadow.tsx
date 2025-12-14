import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Layers } from 'lucide-react';

interface ShadowProps {
  dict: Dictionary;
}

export const BoxShadowPage: React.FC<ShadowProps> = ({ dict }) => {
  const t = dict.tools.box_shadow;
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.5);

  const rgba = () => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const shadow = `${x}px ${y}px ${blur}px ${spread}px ${rgba()}`;
  const code = `box-shadow: ${shadow};`;

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Layers className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <div><label className="text-sm font-medium">{t.label_x}: {x}px</label><input type="range" min="-50" max="50" value={x} onChange={e => setX(Number(e.target.value))} className="w-full" /></div>
               <div><label className="text-sm font-medium">{t.label_y}: {y}px</label><input type="range" min="-50" max="50" value={y} onChange={e => setY(Number(e.target.value))} className="w-full" /></div>
               <div><label className="text-sm font-medium">{t.label_blur}: {blur}px</label><input type="range" min="0" max="100" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" /></div>
               <div><label className="text-sm font-medium">{t.label_spread}: {spread}px</label><input type="range" min="-50" max="50" value={spread} onChange={e => setSpread(Number(e.target.value))} className="w-full" /></div>
               <div><label className="text-sm font-medium">{t.label_opacity}: {opacity}</label><input type="range" min="0" max="1" step="0.01" value={opacity} onChange={e => setOpacity(Number(e.target.value))} className="w-full" /></div>
               <div><label className="text-sm font-medium">{t.label_color}</label><input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-10 cursor-pointer" /></div>
            </div>
            <div className="flex flex-col gap-4">
               <div className="flex-1 bg-white border rounded-lg flex items-center justify-center p-8">
                  <div className="w-32 h-32 bg-white border border-slate-100" style={{ boxShadow: shadow }}></div>
               </div>
               <div className="bg-slate-900 text-slate-300 p-4 rounded-md font-mono text-xs break-all">
                  {code}
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