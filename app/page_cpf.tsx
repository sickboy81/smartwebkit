import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UserCheck, Copy, Check, RefreshCw } from 'lucide-react';

interface CpfProps {
  dict: Dictionary;
}

export const CpfPage: React.FC<CpfProps> = ({ dict }) => {
  const t = dict.tools.cpf_generator;
  const [cpf, setCpf] = useState("");
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState(true);

  const generateCPF = () => {
    const rand = (n: number) => Math.floor(Math.random() * n);
    const n = Array(9).fill(0).map(() => rand(9));

    const d1 = n.reduce((acc, curr, i) => acc + curr * (10 - i), 0);
    let r1 = 11 - (d1 % 11);
    if (r1 >= 10) r1 = 0;
    
    const d2 = n.reduce((acc, curr, i) => acc + curr * (11 - i), 0) + (r1 * 2);
    let r2 = 11 - (d2 % 11);
    if (r2 >= 10) r2 = 0;

    let generated = [...n, r1, r2].join('');
    
    if (format) {
      generated = generated.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    
    setCpf(generated);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!cpf) return;
    try {
      await navigator.clipboard.writeText(cpf);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <UserCheck className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl">
               <h3 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-4">{t.label_cpf}</h3>
               <div className="text-4xl font-mono font-bold text-slate-900 tracking-wider h-12">
                  {cpf || "---.---.--- --"}
               </div>
            </div>

            <div className="flex flex-col items-center gap-4">
               <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked={format} onChange={e => setFormat(e.target.checked)} className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.btn_format} (123.456.789-00)</span>
               </label>

               <div className="flex gap-4 w-full max-w-md">
                  <Button onClick={generateCPF} size="lg" className="flex-1 gap-2">
                     <RefreshCw className="h-4 w-4" /> {t.btn_generate}
                  </Button>
                  <Button onClick={handleCopy} variant="outline" size="lg" className="flex-1 gap-2" disabled={!cpf}>
                     {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                     {copied ? "Copied" : "Copy"}
                  </Button>
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