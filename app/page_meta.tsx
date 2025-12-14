import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Check, Copy, RefreshCw } from 'lucide-react';

interface MetaProps {
  dict: Dictionary;
}

export const MetaPage: React.FC<MetaProps> = ({ dict }) => {
  const t = dict.tools.meta_tag_generator;
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [author, setAuthor] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let code = `<!-- SEO Meta Tags -->\n`;
    if (title) code += `<title>${title}</title>\n`;
    if (desc) code += `<meta name="description" content="${desc}">\n`;
    if (keywords) code += `<meta name="keywords" content="${keywords}">\n`;
    if (author) code += `<meta name="author" content="${author}">\n`;
    code += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
    code += `<meta name="robots" content="index, follow">\n`;
    code += `<meta charset="UTF-8">`;
    setOutput(code);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
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
              <Search className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.label_title}</label>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Recom: 50-60 chars</span>
                  <span className={title.length > 60 ? "text-red-500" : ""}>{title.length} chars</span>
                </div>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="My Amazing Website"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.label_description}</label>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Recom: 150-160 chars</span>
                  <span className={desc.length > 160 ? "text-red-500" : ""}>{desc.length} chars</span>
                </div>
                <textarea 
                  className="w-full h-20 p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="A brief description of my page..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_keywords}</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    placeholder="react, tools, web"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_author}</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            <Button onClick={generate} className="gap-2">
               <RefreshCw className="h-4 w-4" /> {t.btn_generate}
            </Button>

            {output && (
              <div className="space-y-2">
                 <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">HTML Output</label>
                  <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? t.btn_copied : t.btn_copy}
                  </Button>
                </div>
                <textarea 
                  readOnly
                  className="w-full h-48 p-3 rounded-md border border-slate-300 bg-white font-mono text-sm focus:outline-none"
                  value={output}
                />
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