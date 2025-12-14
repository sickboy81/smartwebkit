import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { ShieldCheck } from 'lucide-react';

interface PassCheckProps {
  dict: Dictionary;
}

export const PasswordStrengthPage: React.FC<PassCheckProps> = ({ dict }) => {
  const t = dict.tools.password_strength;
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const check = (val: string) => {
    setPassword(val);
    let s = 0;
    let fb = [];
    if (val.length > 8) s += 1;
    else fb.push("Too short");
    if (/[A-Z]/.test(val)) s += 1;
    else fb.push("Add uppercase");
    if (/[0-9]/.test(val)) s += 1;
    else fb.push("Add numbers");
    if (/[^A-Za-z0-9]/.test(val)) s += 1;
    else fb.push("Add symbols");
    
    setScore(s);
    setFeedback(fb);
  };

  const getParams = () => {
    switch (score) {
        case 0: return { w: '0%', c: 'bg-slate-200', t: 'Weak' };
        case 1: return { w: '25%', c: 'bg-red-500', t: 'Weak' };
        case 2: return { w: '50%', c: 'bg-orange-500', t: 'Medium' };
        case 3: return { w: '75%', c: 'bg-yellow-500', t: 'Good' };
        case 4: return { w: '100%', c: 'bg-green-500', t: 'Strong' };
        default: return { w: '0%', c: 'bg-slate-200', t: '' };
    }
  };

  const { w, c, t: textScore } = getParams();

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_pass}</label>
               <input 
                 type="password" 
                 value={password} 
                 onChange={e => check(e.target.value)} 
                 className="w-full p-3 border rounded-md text-lg"
               />
            </div>
            
            {password && (
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>{t.res_score}</span>
                        <span>{textScore}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-500 ${c}`} style={{ width: w }}></div>
                    </div>
                    {feedback.length > 0 && (
                        <div className="text-sm text-slate-500 mt-2">
                            Suggestions: {feedback.join(", ")}
                        </div>
                    )}
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