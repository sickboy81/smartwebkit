import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Instagram, Check, Copy } from 'lucide-react';

interface InstagramProps {
  dict: Dictionary;
}

export const InstagramPage: React.FC<InstagramProps> = ({ dict }) => {
  const t = dict.tools.instagram_caption;
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const formatAndCopy = async () => {
    if (!input) return;
    
    // Replace empty lines with invisible separator (Braille Pattern Blank - U+2800)
    // or simply ensure lines are preserved. Instagram often eats standard newlines if there's no char.
    // U+2800 is a common trick.
    const formatted = input.replace(/\n\n/g, '\n⠀\n');

    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-64 p-4 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-base resize-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write your caption here..."
              />
            </div>

            <Button onClick={formatAndCopy} className="w-full gap-2">
               {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
               {copied ? t.btn_copied : t.btn_format}
            </Button>

            <div className="text-xs text-slate-500 text-center">
              * Automatically replaces empty lines with invisible characters to preserve spacing.
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