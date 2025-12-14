import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Radio } from 'lucide-react';

interface MorseProps {
  dict: Dictionary;
}

const MORSE_MAP: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

const REV_MORSE_MAP = Object.fromEntries(Object.entries(MORSE_MAP).map(([k, v]) => [v, k]));

export const MorsePage: React.FC<MorseProps> = ({ dict }) => {
  const t = dict.tools.morse_code;
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value.toUpperCase();
    setText(val);
    setMorse(val.split('').map(char => MORSE_MAP[char] || char).join(' '));
  };

  const handleMorseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMorse(val);
    setText(val.split(' ').map(code => REV_MORSE_MAP[code] || code).join(''));
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Radio className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_text}</label>
                  <textarea 
                    className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white uppercase"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="SOS"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_morse}</label>
                  <textarea 
                    className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-slate-50 font-mono"
                    value={morse}
                    onChange={handleMorseChange}
                    placeholder="... --- ..."
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