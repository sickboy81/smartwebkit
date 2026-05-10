import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Hash, Copy, Check } from 'lucide-react';

interface TagsProps {
  dict: Dictionary;
}

export const YouTubeTagsPage: React.FC<TagsProps> = ({ dict }) => {
  const t = dict.tools.youtube_tags;
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!keyword) return;
    const base = keyword.trim().toLowerCase();
    // Simple logic to generate relevant tag variations without external API
    const generated = [
      base,
      `${base} tutorial`,
      `how to ${base}`,
      `${base} guide`,
      `${base} review`,
      `best ${base}`,
      `${base} 2024`,
      `${base} tips`,
      `${base} tricks`,
      `${base} explained`,
      `${base} for beginners`,
      `${base} vs`,
      `learn ${base}`,
      `${base} walkthrough`,
      `free ${base}`
    ];
    setTags(generated);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (tags.length === 0) return;
    try {
      await navigator.clipboard.writeText(tags.join(', '));
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
              <Hash className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="flex gap-4">
               <input 
                 type="text" 
                 value={keyword}
                 onChange={e => setKeyword(e.target.value)}
                 className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none"
                 placeholder="e.g. Minecraft"
               />
               <Button onClick={generate}>
                  {t.btn_generate}
               </Button>
            </div>

            {tags.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs uppercase font-bold text-slate-500">{t.res_tags}</h3>
                    <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        Copy All
                    </Button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                       <span key={i} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">
                          {tag}
                       </span>
                    ))}
                 </div>
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