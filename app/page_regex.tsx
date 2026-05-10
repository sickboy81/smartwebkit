import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Regex, CheckCircle, XCircle } from 'lucide-react';

interface RegexProps {
  dict: Dictionary;
}

export const RegexPage: React.FC<RegexProps> = ({ dict }) => {
  const t = dict.tools.regex_tester;
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("Hello world! 123");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (!pattern) {
        setMatches([]);
        setError("");
        return;
      }
      const regex = new RegExp(pattern, flags);
      const found = text.match(regex);
      setMatches(found ? Array.from(found) : []);
      setError("");
    } catch (e: any) {
      setError(e.message);
      setMatches([]);
    }
  }, [pattern, flags, text]);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Regex className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="flex gap-4">
               <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">{t.label_pattern}</label>
                  <input 
                    type="text" 
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 font-mono text-sm"
                    placeholder="[a-z]+"
                  />
               </div>
               <div className="w-24 space-y-2">
                  <label className="text-sm font-medium">{t.label_flags}</label>
                  <input 
                    type="text" 
                    value={flags}
                    onChange={(e) => setFlags(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 font-mono text-sm"
                    placeholder="gim"
                  />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_text}</label>
               <textarea 
                 className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 font-mono text-sm"
                 value={text}
                 onChange={(e) => setText(e.target.value)}
               />
            </div>

            <div className={`p-4 rounded-lg border ${error ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                {error ? (
                    <div className="text-red-600 text-sm font-mono">{error}</div>
                ) : (
                    <div>
                        <div className="flex items-center gap-2 mb-2 font-medium text-sm text-slate-700">
                            {matches.length > 0 ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-slate-400" />}
                            {matches.length > 0 ? `${t.res_match} (${matches.length})` : t.res_no_match}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {matches.map((m, i) => (
                                <span key={i} className="bg-yellow-200 px-2 py-0.5 rounded text-xs font-mono border border-yellow-300">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
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