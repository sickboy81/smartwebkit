import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Type } from 'lucide-react';

interface RomanProps {
  dict: Dictionary;
}

export const RomanPage: React.FC<RomanProps> = ({ dict }) => {
  const t = dict.tools.roman_numeral;
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const intToRoman = (num: number) => {
    if (isNaN(num) || num <= 0 || num > 3999) return "Invalid Number (1-3999)";
    const map = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ] as const;
    
    let roman = "";
    for (const [val, sym] of map) {
      while (num >= val) {
        roman += sym;
        num -= val;
      }
    }
    return roman;
  };

  const romanToInt = (s: string) => {
    const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    s = s.toUpperCase();
    
    if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(s)) return "Invalid Roman Numeral";

    for (let i = 0; i < s.length; i++) {
      const curr = map[s[i]];
      const next = map[s[i + 1]];
      if (next && curr < next) {
        num -= curr;
      } else {
        num += curr;
      }
    }
    return num.toString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    
    if (!val) {
      setResult("");
      return;
    }

    if (/^\d+$/.test(val)) {
      setResult(intToRoman(parseInt(val)));
    } else {
      setResult(romanToInt(val));
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Type className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            
            <div className="space-y-4">
               <label className="text-sm font-medium text-slate-500 uppercase">{t.label_input}</label>
               <input 
                 type="text" 
                 value={input}
                 onChange={handleChange}
                 className="w-full text-center text-3xl p-4 border-b-2 border-slate-200 focus:border-slate-900 outline-none uppercase font-serif"
                 placeholder="ex: 2024 or MMXXIV"
               />
            </div>

            {result && (
              <div className="bg-slate-50 p-8 rounded-xl">
                 <h3 className="text-xs uppercase font-bold text-slate-400 mb-2">{t.res_result}</h3>
                 <div className="text-5xl font-bold text-slate-900 font-serif">{result}</div>
              </div>
            )}

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