import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Code2, ArrowDownUp } from 'lucide-react';

interface EncodersProps {
  dict: Dictionary;
}

export const WebEncodersPage: React.FC<EncodersProps> = ({ dict }) => {
  const t = dict.tools.web_encoders;
  const [tab, setTab] = useState<'url' | 'html'>('url');
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const process = (action: 'encode' | 'decode') => {
    try {
      if (tab === 'url') {
        setOutput(action === 'encode' ? encodeURIComponent(input) : decodeURIComponent(input));
      } else {
        if (action === 'encode') {
          setOutput(input.replace(/[\u00A0-\u9999<>&]/g, (i) => '&#' + i.charCodeAt(0) + ';'));
        } else {
          const doc = new DOMParser().parseFromString(input, "text/html");
          setOutput(doc.documentElement.textContent || "");
        }
      }
    } catch (e) {
      setOutput("Error processing text.");
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="flex border-b border-slate-200 mb-4">
              <button
                onClick={() => { setTab('url'); setOutput(''); }}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'url' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500'
                }`}
              >
                {t.tab_url}
              </button>
              <button
                onClick={() => { setTab('html'); setOutput(''); }}
                className={`px-6 py-2 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'html' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500'
                }`}
              >
                {t.tab_html}
              </button>
            </div>

            <textarea 
              className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Input..."
            />

            <div className="flex gap-4">
               <Button onClick={() => process('encode')} className="flex-1 gap-2">
                  <ArrowDownUp className="h-4 w-4" /> {t.btn_encode}
               </Button>
               <Button onClick={() => process('decode')} variant="outline" className="flex-1 gap-2">
                  <ArrowDownUp className="h-4 w-4" /> {t.btn_decode}
               </Button>
            </div>

            {output && (
               <textarea 
                 readOnly
                 className="w-full h-32 p-3 border rounded-md bg-slate-50 font-mono text-sm focus:outline-none"
                 value={output}
               />
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