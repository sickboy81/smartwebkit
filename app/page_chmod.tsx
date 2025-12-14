import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Terminal } from 'lucide-react';

interface ChmodProps {
  dict: Dictionary;
}

export const ChmodPage: React.FC<ChmodProps> = ({ dict }) => {
  const t = dict.tools.chmod_calculator;
  const [perms, setPerms] = useState({
    owner: { r: true, w: true, x: true }, // 7
    group: { r: true, w: false, x: true }, // 5
    public: { r: true, w: false, x: true } // 5
  });

  const calculate = () => {
    const getVal = (p: {r: boolean, w: boolean, x: boolean}) => (p.r ? 4 : 0) + (p.w ? 2 : 0) + (p.x ? 1 : 0);
    const getSym = (p: {r: boolean, w: boolean, x: boolean}) => `${p.r ? 'r' : '-'}${p.w ? 'w' : '-'}${p.x ? 'x' : '-'}`;

    const octal = `${getVal(perms.owner)}${getVal(perms.group)}${getVal(perms.public)}`;
    const symbolic = `-${getSym(perms.owner)}${getSym(perms.group)}${getSym(perms.public)}`;
    
    return { octal, symbolic };
  };

  const toggle = (scope: 'owner' | 'group' | 'public', type: 'r' | 'w' | 'x') => {
    setPerms({
        ...perms,
        [scope]: { ...perms[scope], [type]: !perms[scope][type] }
    });
  };

  const { octal, symbolic } = calculate();

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid grid-cols-3 gap-8">
               {['owner', 'group', 'public'].map((scope) => (
                 <div key={scope} className="space-y-4">
                    <h3 className="font-bold text-center capitalize text-slate-700">{t[`label_${scope}` as keyof typeof t]}</h3>
                    <div className="flex flex-col gap-2">
                       <label className="flex items-center space-x-2 cursor-pointer p-2 border rounded hover:bg-slate-50">
                          <input type="checkbox" checked={perms[scope as keyof typeof perms].r} onChange={() => toggle(scope as any, 'r')} />
                          <span>{t.opt_read}</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer p-2 border rounded hover:bg-slate-50">
                          <input type="checkbox" checked={perms[scope as keyof typeof perms].w} onChange={() => toggle(scope as any, 'w')} />
                          <span>{t.opt_write}</span>
                       </label>
                       <label className="flex items-center space-x-2 cursor-pointer p-2 border rounded hover:bg-slate-50">
                          <input type="checkbox" checked={perms[scope as keyof typeof perms].x} onChange={() => toggle(scope as any, 'x')} />
                          <span>{t.opt_exec}</span>
                       </label>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
                    <div className="text-xs uppercase opacity-70 mb-2">{t.res_octal}</div>
                    <div className="text-4xl font-mono font-bold">{octal}</div>
                    <div className="mt-2 text-sm font-mono opacity-50">chmod {octal} filename</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center">
                    <div className="text-xs uppercase text-slate-500 font-bold mb-2">{t.res_symbolic}</div>
                    <div className="text-3xl font-mono font-bold text-slate-700">{symbolic}</div>
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