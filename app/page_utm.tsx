import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Megaphone, Check, Copy } from 'lucide-react';

interface UtmProps {
  dict: Dictionary;
}

export const UtmPage: React.FC<UtmProps> = ({ dict }) => {
  const t = dict.tools.utm_builder;
  
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!url || !source || !medium || !name) {
      setResult("");
      return;
    }

    try {
      const u = new URL(url);
      u.searchParams.set('utm_source', source);
      u.searchParams.set('utm_medium', medium);
      u.searchParams.set('utm_campaign', name);
      if (term) u.searchParams.set('utm_term', term);
      if (content) u.searchParams.set('utm_content', content);
      setResult(u.toString());
    } catch (e) {
      // Fallback simple string concat if URL is invalid
      let res = `${url}?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(name)}`;
      if (term) res += `&utm_term=${encodeURIComponent(term)}`;
      if (content) res += `&utm_content=${encodeURIComponent(content)}`;
      setResult(res);
    }
  }, [url, source, medium, name, term, content]);

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
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
              <Megaphone className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_url} <span className="text-red-500">*</span></label>
                  <input 
                    type="url" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="https://example.com"
                  />
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_source} <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        placeholder="google, newsletter"
                      />
                  </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_medium} <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        value={medium}
                        onChange={(e) => setMedium(e.target.value)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        placeholder="cpc, email"
                      />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_name} <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="spring_sale"
                  />
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_term}</label>
                      <input 
                        type="text" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      />
                  </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_content}</label>
                      <input 
                        type="text" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      />
                  </div>
               </div>
            </div>

            {result && (
              <div className="space-y-2 p-4 bg-slate-50 rounded-lg border border-slate-100 mt-4">
                 <label className="text-sm font-medium text-slate-700">Generated URL</label>
                 <textarea 
                    readOnly 
                    value={result}
                    className="w-full h-24 p-2 text-sm bg-white border rounded resize-none focus:outline-none"
                 />
                 <Button onClick={handleCopy} className="w-full gap-2">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? t.btn_copied : t.btn_copy}
                 </Button>
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