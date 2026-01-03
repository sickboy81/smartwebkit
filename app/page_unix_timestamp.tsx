import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Clock, Check, Copy } from 'lucide-react';

interface UnixProps {
  dict: Dictionary;
}

export const UnixPage: React.FC<UnixProps> = ({ dict }) => {
  const t = dict.tools.unix_timestamp;
  const [current, setCurrent] = useState(Math.floor(Date.now() / 1000));
  const [inputTs, setInputTs] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTsChange = (val: string) => {
    setInputTs(val);
    if (!val) {
      setInputDate("");
      return;
    }
    const ts = parseInt(val);
    if (!isNaN(ts)) {
      // Use local datetime for input type="datetime-local" format YYYY-MM-DDTHH:mm
      const date = new Date(ts * 1000);
      const iso = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 16);
      setInputDate(iso);
    }
  };

  const handleDateChange = (val: string) => {
    setInputDate(val);
    if (val) {
      const ts = Math.floor(new Date(val).getTime() / 1000);
      setInputTs(ts.toString());
    } else {
      setInputTs("");
    }
  };

  const copyCurrent = async () => {
    try {
      await navigator.clipboard.writeText(current.toString());
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
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Clock className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Timestamp Unix</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Unix Timestamp é uma representação numérica de data e hora que conta os segundos desde 1º de janeiro de 1970 (Epoch Unix). 
                É amplamente usado em programação, bancos de dados e sistemas porque é um formato universal e fácil de manipular 
                programaticamente. Cada timestamp Unix representa um momento único na história.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta permite converter entre timestamps Unix e datas legíveis por humanos em ambas as direções. Você pode 
                inserir um timestamp e ver a data correspondente, ou selecionar uma data e ver o timestamp Unix equivalente. A ferramenta 
                também exibe o timestamp atual em tempo real, atualizando a cada segundo.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é essencial para desenvolvedores que trabalham com APIs, bancos de dados ou sistemas que usam timestamps 
                Unix. É também útil para depuração, análise de logs ou qualquer situação onde você precise converter entre formatos de 
                data. A conversão leva em conta o fuso horário local do seu navegador.
              </p>
            </div>
            
            {/* Current Timestamp Hero */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center space-y-2">
               <div className="text-sm uppercase tracking-widest opacity-70">{t.label_current}</div>
               <div className="text-5xl font-mono font-bold tracking-tight">{current}</div>
               <Button onClick={copyCurrent} variant="ghost" className="text-white hover:bg-white/20 hover:text-white gap-2 mt-4">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {t.btn_copy}
               </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_timestamp}</label>
                  <input 
                    type="number" 
                    value={inputTs}
                    onChange={(e) => handleTsChange(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono"
                    placeholder={current.toString()}
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_date}</label>
                  <input 
                    type="datetime-local" 
                    value={inputDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
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