import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PieChart, Sparkles, RefreshCw } from 'lucide-react';

interface WheelProps {
  dict: Dictionary;
}

const COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#f59e0b', // amber
  '#84cc16', // lime
  '#10b981', // emerald
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#d946ef', // fuchsia
  '#f43f5e', // rose
];

export const WheelPage: React.FC<WheelProps> = ({ dict }) => {
  const t = dict.tools.decision_wheel;
  const [input, setInput] = useState("Pizza\nSushi\nBurger\nSalad\nTacos\nPasta");
  const [options, setOptions] = useState<string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Parse input into options
  useEffect(() => {
    const list = input.split('\n').filter(s => s.trim().length > 0);
    setOptions(list.length > 0 ? list : ["Add Options..."]);
  }, [input]);

  const spin = () => {
    if (options.length < 1 || spinning) return;
    
    setSpinning(true);
    setWinner(null);

    // Calculate a random spin (at least 5 full rotations + random segment)
    // We add to the current rotation to prevent "rewinding"
    const fullSpins = 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalSpin = (fullSpins * 360) + randomDegree;
    const newRotation = rotation + totalSpin;

    setRotation(newRotation);

    // Transition time matches CSS duration (4s)
    setTimeout(() => {
      setSpinning(false);
      
      // Calculate winner based on final angle
      // The pointer is at TOP (0deg). 
      // The wheel rotates Clockwise.
      // The segment under the pointer is calculated by normalizing the rotation.
      const normalizedRotation = newRotation % 360;
      const anglePerSegment = 360 / options.length;
      
      // Since CSS rotate moves clockwise, the index under the needle (at 0deg)
      // effectively moves "backwards" through the array relative to the rotation.
      // Or simply: 360 - normalized gives the angle relative to start.
      const effectiveAngle = (360 - normalizedRotation) % 360;
      const winnerIndex = Math.floor(effectiveAngle / anglePerSegment);
      
      setWinner(options[winnerIndex]);
    }, 4000);
  };

  // SVG Helper: Calculate polar coordinates
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  // Generate Wheel Segments (Slices and Text)
  const wheelSegments = useMemo(() => {
    if (options.length === 0) return null;
    
    let cumulativePercent = 0;
    
    return options.map((opt, index) => {
      const startPercent = cumulativePercent;
      const slicePercent = 1 / options.length;
      const endPercent = cumulativePercent + slicePercent;
      
      // Calculate path coordinates
      const [startX, startY] = getCoordinatesForPercent(startPercent);
      const [endX, endY] = getCoordinatesForPercent(endPercent);
      
      // SVG Path command
      // Move to center (0,0), Line to start, Arc to end, Close path
      // Determine if the arc should be greater than 180 degrees (large arc flag)
      const largeArcFlag = slicePercent > 0.5 ? 1 : 0;
      const pathData = [
        `M 0 0`,
        `L ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(' ');

      // Calculate text rotation angle
      // Middle of the slice
      const middleAngle = (startPercent + slicePercent / 2) * 360; 
      // SVG rotates clockwise from 3 o'clock (0 rads). 
      // We need to adjust text to be upright or radial.
      
      cumulativePercent += slicePercent;

      // Truncate text if too long
      const label = opt.length > 14 ? opt.substring(0, 12) + '..' : opt;

      return (
        <g key={index}>
          <path 
            d={pathData} 
            fill={COLORS[index % COLORS.length]} 
            stroke="white"
            strokeWidth="0.01"
          />
          {/* Text Label */}
          <text
            x={0.6} // Distance from center (radius is 1)
            y={0}
            fill="white"
            fontSize="0.12"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${middleAngle})`}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            {label}
          </text>
        </g>
      );
    });
  }, [options]);

  return (
    <div className="container max-w-5xl mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <Card className="shadow-xl border-slate-200 overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-2xl flex items-center gap-2">
              <PieChart className="w-6 h-6 text-slate-700" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="grid lg:grid-cols-12 gap-8 p-8">
            
            {/* Left Column: Inputs */}
            <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
               <div className="space-y-2 flex-1">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">{t.label_input}</label>
                  <div className="relative h-full min-h-[200px]">
                    <textarea 
                        className="w-full h-full min-h-[300px] p-4 border rounded-xl focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-base resize-none shadow-inner"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Option 1&#10;Option 2&#10;Option 3"
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white/80 px-2 rounded">
                        {options.length} items
                    </div>
                  </div>
               </div>
               
               <Button 
                onClick={spin} 
                size="lg" 
                className={`w-full h-14 text-xl font-bold uppercase tracking-widest shadow-lg transform transition-all active:scale-95 ${spinning ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                disabled={spinning || options.length < 1}
               >
                  {spinning ? '...' : t.btn_spin}
               </Button>
            </div>

            {/* Right Column: The Wheel */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center relative min-h-[400px] bg-slate-50/50 rounded-2xl border border-slate-100 p-4">
                
                {/* Winner Overlay / Confetti */}
                {winner && !spinning && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[2px] rounded-2xl animate-in fade-in duration-500">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center transform animate-in zoom-in-50 duration-300 border-4 border-yellow-400 max-w-sm">
                            <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-2 animate-bounce" />
                            <div className="text-sm uppercase font-bold text-slate-400 mb-2">{t.res_winner}</div>
                            <div className="text-4xl font-black text-slate-900 leading-tight break-words">
                                {winner}
                            </div>
                            <Button onClick={() => setWinner(null)} variant="ghost" size="sm" className="mt-6 text-slate-400 hover:text-slate-600">
                                Close
                            </Button>
                        </div>
                    </div>
                )}

                {/* Pointer (Static) */}
                <div className="absolute top-[10%] lg:top-[5%] z-10 filter drop-shadow-lg transform translate-y-1/2">
                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-slate-800"></div>
                </div>

                {/* Wheel Container */}
                <div 
                    className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] transition-transform duration-[4000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    <svg viewBox="-1 -1 2 2" className="w-full h-full transform -rotate-90" style={{ overflow: 'visible' }}>
                        {/* Wheel Segments */}
                        {wheelSegments}
                        
                        {/* Outer Border */}
                        <circle cx="0" cy="0" r="1" fill="none" stroke="#1e293b" strokeWidth="0.02" />
                    </svg>
                </div>

                {/* Central Hub (Static visual, moves with div but looks like hub) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-slate-200 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-900 rounded-full"></div>
                </div>

            </div>

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">
            {t.seo_title}
          </h2>
          <div className="text-slate-600 space-y-4 leading-7 max-w-2xl mx-auto">
            {t.seo_content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};