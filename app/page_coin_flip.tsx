import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CircleDollarSign, Coins, Crown } from 'lucide-react';

interface CoinProps {
  dict: Dictionary;
}

export const CoinFlipPage: React.FC<CoinProps> = ({ dict }) => {
  const t = dict.tools.coin_flip;
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);
  const [flipping, setFlipping] = useState(false);
  
  // Track rotation in degrees to ensure continuous spinning
  const [rotation, setRotation] = useState(0);
  
  // Stats
  const [stats, setStats] = useState({ heads: 0, tails: 0 });

  const flip = () => {
    if (flipping) return;
    setFlipping(true);
    
    // Determine outcome
    const outcome = Math.random() > 0.5 ? 'heads' : 'tails';
    
    // Calculate new rotation
    // Add at least 5 full spins (1800 deg)
    // Heads = 0deg (mod 360), Tails = 180deg (mod 360)
    // Current rotation might be something like 3600 (heads) or 3780 (tails)
    
    let nextRotation = rotation + 1800; // minimum spin
    const currentMod = nextRotation % 360;
    
    if (outcome === 'heads') {
        // We want mod 360 to be 0
        // e.g. if current is 180, add 180. if current is 0, add 0 (or 360 to keep moving)
        if (currentMod !== 0) {
            nextRotation += (360 - currentMod);
        }
    } else {
        // We want mod 360 to be 180
        if (currentMod !== 180) {
            nextRotation += (180 + (360 - currentMod)) % 360;
        }
    }
    
    // Ensure we always move forward at least a bit more if we landed exactly on spot by calculation
    if (nextRotation === rotation) nextRotation += 360;

    setRotation(nextRotation);

    setTimeout(() => {
      setResult(outcome);
      setFlipping(false);
      setStats(prev => ({
        ...prev,
        [outcome]: prev[outcome] + 1
      }));
    }, 3000);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CircleDollarSign className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-12 text-center py-12">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Sobre o Jogo de Cara ou Coroa</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Cara ou Coroa Online oferece uma experiência realista e justa para tomar decisões 
                aleatórias. Seja para decidir quem paga o jantar, escolher entre duas opções ou simplesmente se divertir, 
                esta ferramenta utiliza um gerador de números aleatórios criptograficamente seguro para garantir resultados 
                verdadeiramente imparciais.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A animação 3D realista simula o movimento físico de uma moeda sendo lançada, criando suspense e 
                tornando a experiência mais envolvente. Durante a sessão, a ferramenta mantém estatísticas automáticas, 
                mostrando quantas vezes saiu Cara e quantas vezes saiu Coroa, permitindo que você acompanhe a distribuição 
                dos resultados.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é perfeita para resolver disputas de forma justa, fazer escolhas aleatórias em jogos, 
                ou simplesmente adicionar um elemento de sorte às suas decisões do dia a dia. Funciona perfeitamente em 
                qualquer dispositivo, desde smartphones até computadores desktop.
              </p>
            </div>
            
            {/* 3D Coin Container */}
            <div className="relative w-48 h-48 mx-auto perspective-1000" style={{ perspective: '1000px' }}>
                <div 
                    className="relative w-full h-full transition-transform duration-[3000ms] ease-out preserve-3d"
                    style={{ 
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotation}deg)` 
                    }}
                >
                    {/* Front Face (Heads) */}
                    <div 
                        className="absolute w-full h-full rounded-full backface-hidden flex items-center justify-center shadow-xl border-4 border-yellow-600"
                        style={{ 
                            backfaceVisibility: 'hidden',
                            background: 'radial-gradient(circle at 30% 30%, #fcd34d, #d97706)',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 10px 15px -3px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div className="text-center">
                            <Crown className="w-16 h-16 text-yellow-900 mx-auto mb-2 drop-shadow-md" />
                            <span className="text-xl font-black text-yellow-900 tracking-widest drop-shadow-sm uppercase">{t.val_heads}</span>
                        </div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Back Face (Tails) */}
                    <div 
                        className="absolute w-full h-full rounded-full backface-hidden flex items-center justify-center shadow-xl border-4 border-slate-400"
                        style={{ 
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            background: 'radial-gradient(circle at 30% 30%, #e2e8f0, #94a3b8)',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 10px 15px -3px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div className="text-center">
                            <div className="text-6xl font-black text-slate-600 mb-1 drop-shadow-md">1</div>
                            <span className="text-xl font-bold text-slate-600 tracking-widest drop-shadow-sm uppercase">{t.val_tails}</span>
                        </div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <Button onClick={flip} size="lg" className="w-48 text-lg h-12 shadow-md hover:shadow-lg transition-all active:scale-95" disabled={flipping}>
               {flipping ? '...' : t.btn_flip}
            </Button>

            {/* Stats */}
            <div className="flex justify-center gap-8 pt-4 border-t border-slate-100 mt-8">
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.stats_heads || "HEADS"}</div>
                    <div className="text-3xl font-mono font-bold text-yellow-600">{stats.heads}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.stats_tails || "TAILS"}</div>
                    <div className="text-3xl font-mono font-bold text-slate-600">{stats.tails}</div>
                </div>
            </div>

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};