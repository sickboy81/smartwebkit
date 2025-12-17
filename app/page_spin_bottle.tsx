import React, { useState, useEffect, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RotateCcw, Zap, HelpCircle, Settings, PlayCircle, Sparkles, Share2 } from 'lucide-react';

interface BottleProps {
  dict: Dictionary;
}

const DEFAULT_QUESTIONS = {
  truth: [
    "What is your biggest fear?",
    "What is the most embarrassing thing you've ever done?",
    "Who is your secret crush?",
    "What is a lie you told recently?",
    "What is your worst habit?",
    "What is the last thing you searched for on your phone?",
    "What is your biggest regret?",
    "Who is the last person you texted?",
    "What is something you're glad your family doesn't know about you?",
    "Have you ever cheated on a test?",
    "What is the meanest thing you've ever said to someone?",
    "What is your guilty pleasure?",
    "What is one thing you would change about your life?",
    "Have you ever peed in a pool?",
    "What is the worst gift you have ever received?",
    "What is your biggest insecurity?"
  ],
  dare: [
    "Do 10 pushups.",
    "Sing a song loudly.",
    "Do your best dance impression.",
    "Let someone check your search history.",
    "Call a friend and speak in a fake accent.",
    "Eat a spoonful of mustard/hotsauce.",
    "Try to lick your elbow.",
    "Act like a chicken for 30 seconds.",
    "Let the group pose you in an embarrassing position and take a picture.",
    "Post something embarrassing on your social media.",
    "Speak in rhymes for the next 3 rounds.",
    "Let someone draw on your face with a pen.",
    "Do a cartwheel.",
    "Walk backwards for the rest of the game.",
    "Hold an ice cube in your hand until it melts."
  ]
};

export const SpinBottlePage: React.FC<BottleProps> = ({ dict }) => {
  const t = dict.tools.spin_bottle;
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [mode, setMode] = useState<'classic' | 'players'>('classic');
  const [activeTab, setActiveTab] = useState<'game' | 'settings'>('game');
  
  const [input, setInput] = useState("");
  const [customTruths, setCustomTruths] = useState("");
  const [customDares, setCustomDares] = useState("");
  
  const [players, setPlayers] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  
  // Game State
  const [gameState, setGameState] = useState<'idle' | 'spinning' | 'result'>('idle');
  const [card, setCard] = useState<{ type: 'truth' | 'dare', text: string } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Parse inputs
  useEffect(() => {
    const list = input.split('\n').filter(s => s.trim().length > 0);
    setPlayers(list);
  }, [input]);

  const spin = () => {
    if (spinning) return;
    if (mode === 'players' && players.length < 2) {
      alert("Please add at least 2 players!");
      return;
    }

    setSpinning(true);
    setGameState('spinning');
    setWinner(null);
    setCard(null);
    setShowConfetti(false);

    // Random spin: Minimum 5 full rotations (1800 deg) + random 0-360
    const randomDeg = Math.floor(Math.random() * 360);
    const fullSpins = 360 * 5;
    // Add to current rotation to keep spinning in same direction
    const newRotation = rotation + fullSpins + randomDeg;

    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setGameState('result');
      
      if (mode === 'players' && players.length > 0) {
        const finalAngle = newRotation % 360; 
        const segmentSize = 360 / players.length;
        // Simple logic: Index = round(Angle / Segment)
        const winningIndex = Math.round(finalAngle / segmentSize) % players.length;
        setWinner(players[winningIndex]);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }, 3000);
  };

  const pickCard = (type: 'truth' | 'dare') => {
    let list = type === 'truth' ? [...DEFAULT_QUESTIONS.truth] : [...DEFAULT_QUESTIONS.dare];
    
    // Merge Custom Questions
    const customList = type === 'truth' ? customTruths : customDares;
    const customs = customList.split('\n').filter(s => s.trim().length > 0);
    if (customs.length > 0) {
        list = [...list, ...customs];
    }

    const randomText = list[Math.floor(Math.random() * list.length)];
    setCard({ type, text: randomText });
  };

  const resetGame = () => {
      setGameState('idle');
      setCard(null);
      setWinner(null);
      setShowConfetti(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: t.title,
                text: t.description,
                url: window.location.href,
            });
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        try {
            await navigator.clipboard.writeText(window.location.href);
            // Simple alert fallback for desktop without share API
            // Or ideally use a toast, but keeping it simple as requested
            alert(t.msg_copied);
        } catch (err) {
            console.error('Error copying link:', err);
        }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-xl border-slate-200 overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <CardTitle className="text-2xl flex items-center gap-2 text-slate-800">
                <RotateCcw className="w-6 h-6" />
                {t.title}
                </CardTitle>
                
                <div className="flex items-center gap-2">
                    <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                        <button 
                            onClick={() => setActiveTab('game')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'game' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            <PlayCircle className="w-4 h-4" /> {t.tab_game}
                        </button>
                        <button 
                            onClick={() => setActiveTab('settings')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'settings' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            <Settings className="w-4 h-4" /> {t.tab_settings}
                        </button>
                    </div>

                    <Button onClick={handleShare} variant="outline" className="h-9 px-3 gap-2 bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900" title={t.btn_share}>
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            {activeTab === 'game' ? (
                <div className="p-6 md:p-8 space-y-8 relative">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Jogo de Verdade ou Desafio com Garrafa</h3>
                      <p className="text-slate-600 leading-7 mb-3">
                        O jogo de Verdade ou Desafio (Truth or Dare) com garrafa é um clássico jogo de festa que combina sorte 
                        com desafios divertidos. Nossa versão digital traz toda a diversão do jogo tradicional com uma garrafa 
                        animada que gira e seleciona aleatoriamente jogadores ou desafios. É perfeito para festas, encontros com 
                        amigos ou qualquer momento onde você queira adicionar um pouco de emoção e risadas.
                      </p>
                      <p className="text-slate-600 leading-7 mb-3">
                        O jogo oferece dois modos: Clássico (onde a garrafa gira e você escolhe Verdade ou Desafio) e Jogadores 
                        (onde você adiciona nomes de jogadores e a garrafa seleciona quem deve responder ou realizar o desafio). 
                        Cada modo oferece uma experiência única, com perguntas e desafios pré-definidos que você pode personalizar 
                        nas configurações.
                      </p>
                      <p className="text-slate-600 leading-7">
                        Você pode adicionar suas próprias perguntas de Verdade e Desafios personalizados nas configurações, 
                        tornando o jogo ainda mais divertido e adequado ao seu grupo. A garrafa animada com física realista adiciona 
                        um elemento visual emocionante, e os efeitos de confete celebram quando um jogador é selecionado. Divirta-se 
                        e crie memórias inesquecíveis com seus amigos!
                      </p>
                    </div>
                    {/* Confetti Overlay */}
                    {showConfetti && (
                        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden flex justify-center items-center">
                            <div className="animate-ping absolute w-full h-full bg-yellow-100 opacity-20 rounded-full scale-150"></div>
                            <Sparkles className="w-32 h-32 text-yellow-400 animate-bounce absolute top-1/4 left-1/4 opacity-50" />
                            <Sparkles className="w-24 h-24 text-blue-400 animate-pulse absolute bottom-1/4 right-1/4 opacity-50" />
                        </div>
                    )}

                    {/* Mode Switch */}
                    <div className="flex justify-center gap-4 bg-slate-100/50 p-1.5 rounded-lg inline-flex mx-auto w-full max-w-md border border-slate-200">
                        <button 
                            onClick={() => { setMode('classic'); resetGame(); }}
                            className={`flex-1 py-2 px-4 text-sm font-bold rounded-md transition-all ${mode === 'classic' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            {t.mode_classic}
                        </button>
                        <button 
                            onClick={() => { setMode('players'); resetGame(); }}
                            className={`flex-1 py-2 px-4 text-sm font-bold rounded-md transition-all ${mode === 'players' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            {t.mode_players}
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                        {/* Bottle Area Container - NO Overflow Hidden to prevent clipping names */}
                        <div className="relative h-[450px] w-full max-w-[450px] mx-auto flex items-center justify-center">
                            
                            {/* Table Background Layer (Separated so it doesn't clip names) */}
                            <div className="absolute inset-4 rounded-full bg-amber-100/30 border-[12px] border-slate-100 shadow-inner ring-1 ring-slate-200"></div>
                            {/* Table Texture Effect */}
                            <div className="absolute inset-4 rounded-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-transparent to-transparent pointer-events-none"></div>

                            {/* Player Labels Ring */}
                            {mode === 'players' && players.length > 0 && (
                                <div className="absolute inset-0 pointer-events-none z-30">
                                    {players.map((p, i) => {
                                        const angleDeg = (i * (360 / players.length)); 
                                        const angleRad = (angleDeg - 90) * (Math.PI / 180); 
                                        const radius = 160; 
                                        const x = Math.cos(angleRad) * radius;
                                        const y = Math.sin(angleRad) * radius;
                                        
                                        return (
                                            <div 
                                                key={i}
                                                className={`absolute text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap transition-all duration-300 border flex items-center justify-center ${winner === p ? 'bg-yellow-400 text-slate-900 scale-125 z-40 border-yellow-500 ring-4 ring-yellow-200' : 'bg-white text-slate-600 border-slate-200'}`}
                                                style={{ 
                                                    left: `calc(50% + ${x}px)`, 
                                                    top: `calc(50% + ${y}px)`,
                                                    transform: 'translate(-50%, -50%)',
                                                    maxWidth: '120px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}
                                            >
                                                {p.length > 12 ? p.substring(0,12)+'..' : p}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* The Bottle */}
                            <div 
                                className="relative z-20 transition-transform duration-[3000ms] ease-[cubic-bezier(0.2,0.8,0.2,1.05)] origin-center"
                                style={{ transform: `rotate(${rotation}deg)` }}
                            >
                                {/* SVG Bottle shape */}
                                <svg width="100" height="300" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl filter" style={{ overflow: 'visible' }}>
                                    <defs>
                                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feDropShadow dx="5" dy="10" stdDeviation="5" floodOpacity="0.3"/>
                                        </filter>
                                    </defs>
                                    {/* Bottle Shadow (Rotates with bottle) */}
                                    <path d="M25 290H75C83.2843 290 90 283.284 90 275V110C90 80 70 50 65 40V10H35V40C30 50 10 80 10 110V275C10 283.284 16.7157 290 25 290Z" fill="black" fillOpacity="0.1" transform="translate(10, 10)" />

                                    {/* Glass Body - Dark Green Gradient */}
                                    <path d="M25 290H75C83.2843 290 90 283.284 90 275V110C90 80 70 50 65 40V10H35V40C30 50 10 80 10 110V275C10 283.284 16.7157 290 25 290Z" fill="#15803d" stroke="#14532d" strokeWidth="2" fillOpacity="0.9"/>
                                    
                                    {/* Reflection Highlights */}
                                    <path d="M30 280V120C30 100 45 60 45 60" stroke="white" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round"/>
                                    <path d="M70 270V130" stroke="white" strokeWidth="1" strokeOpacity="0.15" strokeLinecap="round"/>

                                    {/* Label */}
                                    <rect x="20" y="130" width="60" height="90" rx="2" fill="#fefce8" stroke="#ca8a04" strokeWidth="1"/>
                                    <text x="50" y="160" textAnchor="middle" fill="#854d0e" fontSize="12" fontWeight="bold" fontFamily="serif" letterSpacing="1">PREMIUM</text>
                                    <text x="50" y="185" textAnchor="middle" fill="#a16207" fontSize="22" fontWeight="black" fontFamily="sans-serif">SPIN</text>
                                    <line x1="30" y1="195" x2="70" y2="195" stroke="#ca8a04" strokeWidth="1" />

                                    {/* Cap */}
                                    <rect x="35" y="0" width="30" height="15" rx="2" fill="#fbbf24" stroke="#d97706"/>
                                    <path d="M35 5H65" stroke="#d97706" strokeWidth="1" strokeOpacity="0.5"/>
                                </svg>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute w-8 h-8 bg-slate-800 rounded-full z-20 shadow-inner flex items-center justify-center border-2 border-slate-600">
                                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Controls Area */}
                        <div className="space-y-6 flex flex-col h-full justify-center">
                            
                            {/* Mode: Player Input (Only shows if mode is players AND we are in idle/setup state to avoid clutter) */}
                            {mode === 'players' && gameState === 'idle' && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex justify-between">
                                        {t.label_players}
                                        <span className="text-slate-400 font-normal normal-case">{players.length} added</span>
                                    </label>
                                    <textarea 
                                        className="w-full h-40 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-slate-900 resize-none shadow-sm text-base"
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        placeholder={t.placeholder_players}
                                    />
                                </div>
                            )}

                            {/* Game Actions */}
                            <div className="space-y-6 w-full">
                                
                                {/* Winner Display */}
                                {winner && !spinning && (
                                    <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-center animate-in zoom-in duration-300 shadow-sm">
                                        <div className="text-xs text-yellow-800 font-bold uppercase mb-2 tracking-widest">{t.res_winner}</div>
                                        <div className="text-4xl font-black text-slate-900 break-words">{winner}</div>
                                    </div>
                                )}

                                {/* Spin Button */}
                                <Button 
                                    onClick={spin} 
                                    size="lg" 
                                    className={`w-full h-16 text-xl font-black tracking-widest uppercase shadow-xl transform transition-all active:scale-95 rounded-xl ${spinning ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 bg-slate-900 hover:bg-slate-800'}`}
                                    disabled={spinning}
                                >
                                    {spinning ? '...' : t.btn_spin}
                                </Button>

                                {/* Truth or Dare Section */}
                                {gameState === 'result' && !spinning && (
                                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
                                        
                                        {!card ? (
                                            <div className="grid grid-cols-2 gap-4">
                                                <button 
                                                    onClick={() => pickCard('truth')}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 flex flex-col items-center gap-2 group"
                                                >
                                                    <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                                                        <HelpCircle className="w-6 h-6" />
                                                    </div>
                                                    {t.btn_truth}
                                                </button>
                                                <button 
                                                    onClick={() => pickCard('dare')}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 flex flex-col items-center gap-2 group"
                                                >
                                                    <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                                                        <Zap className="w-6 h-6" />
                                                    </div>
                                                    {t.btn_dare}
                                                </button>
                                            </div>
                                        ) : (
                                            <div className={`p-8 rounded-xl text-center text-white shadow-xl animate-in flip-in-y duration-500 relative overflow-hidden ${card.type === 'truth' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-red-500 to-red-600'}`}>
                                                {/* Background decoration */}
                                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                                                    {card.type === 'truth' ? <HelpCircle className="w-32 h-32" /> : <Zap className="w-32 h-32" />}
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="text-xs font-bold uppercase opacity-80 mb-4 tracking-[0.2em]">{card.type === 'truth' ? t.title_truth : t.title_dare}</div>
                                                    <div className="text-2xl font-bold leading-relaxed mb-6">"{card.text}"</div>
                                                    <button 
                                                        onClick={() => setCard(null)} 
                                                        className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                                    >
                                                        Pick Again
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* SETTINGS TAB */
                <div className="p-6 md:p-8 space-y-8 bg-slate-50 min-h-[400px]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <HelpCircle className="w-5 h-5 text-blue-500" />
                                <h3 className="font-bold text-slate-800">{t.btn_truth} {t.label_custom}</h3>
                            </div>
                            <textarea 
                                className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900 shadow-sm resize-none"
                                value={customTruths}
                                onChange={e => setCustomTruths(e.target.value)}
                                placeholder={t.placeholder_truth}
                            />
                            <p className="text-xs text-slate-500">Add one question per line. These will be mixed with default questions.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-5 h-5 text-red-500" />
                                <h3 className="font-bold text-slate-800">{t.btn_dare} {t.label_custom}</h3>
                            </div>
                            <textarea 
                                className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-white text-slate-900 shadow-sm resize-none"
                                value={customDares}
                                onChange={e => setCustomDares(e.target.value)}
                                placeholder={t.placeholder_dare}
                            />
                            <p className="text-xs text-slate-500">Add one dare per line. These will be mixed with default dares.</p>
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