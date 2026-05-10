import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link2, Check, Copy } from 'lucide-react';

interface SlugProps {
  dict: Dictionary;
}

export const SlugPage: React.FC<SlugProps> = ({ dict }) => {
  const t = dict.tools.url_slug;
  const [input, setInput] = useState("");
  const [slug, setSlug] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const newSlug = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Trim hyphens
    setSlug(newSlug);
  }, [input]);

  const handleCopy = async () => {
    if (!slug) return;
    try {
      await navigator.clipboard.writeText(slug);
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
            <CardTitle className="text-2xl flex items-center gap-2">
              <Link2 className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <input 
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How to build a website in 2024?"
              />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium">{t.output_label}</label>
               <div className="flex gap-2">
                  <div className="flex-1 p-3 border rounded-md bg-slate-50 font-mono text-slate-700 overflow-x-auto whitespace-nowrap">
                     {slug || "..."}
                  </div>
                  <Button onClick={handleCopy} className="gap-2">
                     {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                     {t.btn_copy}
                  </Button>
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