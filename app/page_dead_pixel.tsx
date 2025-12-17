import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MonitorX, Maximize2 } from 'lucide-react';

interface PixelProps {
  dict: Dictionary;
}

export const DeadPixelPage: React.FC<PixelProps> = ({ dict }) => {
  const t = dict.tools.dead_pixel;
  const [active, setActive] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  if (active) {
    return (
      <div 
        onClick={handleClick}
        style={{ backgroundColor: colors[colorIndex] }}
        className="fixed inset-0 z-[100] cursor-pointer"
      >
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded text-sm pointer-events-none opacity-50">
           {t.msg_instruct}
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MonitorX className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-12 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 w-full text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Teste de Dead Pixel - Guia Completo</h3>
              <p className="text-slate-600 leading-7 mb-3">
                O Teste de Dead Pixel é uma ferramenta essencial para verificar a qualidade da sua tela. Pixels mortos 
                (dead pixels) são pontos que não acendem e aparecem como manchas pretas, enquanto pixels presos (stuck pixels) 
                ficam travados em uma cor específica, geralmente vermelho, verde ou azul. Esses defeitos podem ser muito 
                irritantes e muitas vezes são cobertos pela garantia se detectados precocemente.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta preenche toda a tela com cores sólidas e puras: Preto, Branco, Vermelho, Verde e Azul. 
                Ao alternar entre essas cores em tela cheia, qualquer irregularidade se torna imediatamente visível. 
                Um ponto escuro em um fundo branco indica um pixel morto, enquanto um ponto brilhante em um fundo preto 
                ou colorido indica um pixel preso.
              </p>
              <p className="text-slate-600 leading-7">
                Este teste é especialmente importante ao comprar um novo monitor, laptop ou smartphone, seja novo ou usado. 
                Recomendamos executar este teste antes que o período de devolução expire, garantindo que sua tela esteja 
                em perfeitas condições. A ferramenta funciona em todos os tipos de telas, desde monitores 4K até telas OLED 
                de smartphones.
              </p>
            </div>
            
            <div className="w-32 h-32 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full animate-pulse blur-xl opacity-50"></div>
            
            <Button onClick={() => setActive(true)} size="lg" className="gap-2 text-lg h-14 px-8">
               <Maximize2 className="h-5 w-5" /> {t.msg_start}
            </Button>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full text-left">
              <p className="text-sm text-blue-800 font-medium mb-2">💡 Dica:</p>
              <p className="text-sm text-blue-700">
                {t.seo_content[0]} Clique em qualquer lugar da tela durante o teste para alternar entre as cores. 
                Pressione ESC para sair do modo de teste a qualquer momento.
              </p>
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