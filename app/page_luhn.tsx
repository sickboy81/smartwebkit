import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CreditCard, CheckCircle, XCircle } from 'lucide-react';

interface LuhnProps {
  dict: Dictionary;
}

export const LuhnPage: React.FC<LuhnProps> = ({ dict }) => {
  const t = dict.tools.luhn_validator;
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validate = () => {
    // Remove non-digits
    const val = input.replace(/\D/g, "");
    if (!val) {
      setIsValid(null);
      return;
    }

    let sum = 0;
    let shouldDouble = false;
    
    // Loop from right to left
    for (let i = val.length - 1; i >= 0; i--) {
      let digit = parseInt(val.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    setIsValid((sum % 10) === 0);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            
            <div className="space-y-4 max-w-md mx-auto">
               <label className="text-sm font-medium block text-left">{t.label_input}</label>
               <input 
                 type="text" 
                 value={input}
                 onChange={e => { setInput(e.target.value); setIsValid(null); }}
                 className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none text-lg text-center tracking-widest font-mono"
                 placeholder="0000 0000 0000 0000"
               />
               <Button onClick={validate} size="lg" className="w-full">
                  {t.btn_validate}
               </Button>
            </div>

            {isValid !== null && (
              <div className={`p-6 rounded-xl border flex flex-col items-center gap-2 ${isValid ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                 {isValid ? <CheckCircle className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                 <div className="text-xl font-bold">
                    {isValid ? t.res_valid : t.res_invalid}
                 </div>
              </div>
            )}

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