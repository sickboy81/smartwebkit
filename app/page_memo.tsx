import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { StickyNote, Trash2 } from 'lucide-react';

interface MemoProps {
  dict: Dictionary;
}

export const MemoPage: React.FC<MemoProps> = ({ dict }) => {
  const t = dict.tools.memo_pad;
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('smartwebkit_memo');
    if (saved) setNote(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    localStorage.setItem('smartwebkit_memo', val);
  };

  const clear = () => {
    if (confirm("Are you sure?")) {
      setNote("");
      localStorage.removeItem('smartwebkit_memo');
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <StickyNote className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Bloco de Notas Online com Salvamento Automático</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nosso Bloco de Notas Online oferece uma experiência de escrita simples e intuitiva, perfeita para 
                capturar pensamentos rápidos, anotações temporárias ou rascunhos. Diferente de aplicativos complexos 
                de anotações, esta ferramenta fornece um ambiente livre de distrações, focado apenas no essencial: 
                escrever e salvar automaticamente.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A principal característica desta ferramenta é o salvamento automático em tempo real. Cada caractere 
                que você digita é salvo instantaneamente no armazenamento local do seu navegador. Isso significa que 
                você pode fechar a aba, reiniciar o navegador ou até desligar o computador, e quando voltar, suas 
                notas estarão exatamente como você as deixou. Não há necessidade de pressionar um botão de salvar 
                ou se preocupar em perder dados.
              </p>
              <p className="text-slate-600 leading-7">
                Todas as suas notas são armazenadas localmente no seu dispositivo, garantindo privacidade total. 
                Nenhum dado é enviado para servidores na nuvem, tornando esta ferramenta perfeita para redigir 
                e-mails confidenciais, armazenar trechos de código temporários ou manter lembretes privados. 
                A interface limpa e minimalista maximiza a área de escrita, permitindo que você se concentre 
                completamente no conteúdo.
              </p>
            </div>
            
            <textarea 
              className="w-full h-[500px] p-6 border rounded-lg focus:ring-2 focus:ring-yellow-200 focus:outline-none bg-yellow-50 text-slate-800 text-lg leading-relaxed resize-none shadow-inner font-handwriting"
              value={note}
              onChange={handleChange}
              placeholder={t.placeholder}
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
            />

            <div className="flex justify-end">
               <Button onClick={clear} variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50 gap-2">
                  <Trash2 className="w-4 h-4" /> {t.btn_clear}
               </Button>
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