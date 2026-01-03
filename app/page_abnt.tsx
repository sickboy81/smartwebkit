import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LayoutList, Copy, Check } from 'lucide-react';

interface ABNTProps {
  dict: Dictionary;
}

export const ABNTPage: React.FC<ABNTProps> = ({ dict }) => {
  const t = dict.tools.abnt_generator;
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [reference, setReference] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    // Format: LAST, First. Title. City: Publisher, Year.
    if (!last || !title) return;
    const author = `${last.toUpperCase()}, ${first}`;
    const result = `${author}. <b>${title}</b>. ${city}: ${publisher}, ${year}.`;
    setReference(result);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!reference) return;
    // Strip HTML for clipboard
    const plain = reference.replace(/<b>/g, '').replace(/<\/b>/g, '');
    try {
      await navigator.clipboard.writeText(plain);
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
              <LayoutList className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_author_first}</label>
                  <input type="text" value={first} onChange={e => setFirst(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_author_last}</label>
                  <input type="text" value={last} onChange={e => setLast(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t.label_title}</label>
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_city}</label>
                  <input type="text" value={city} onChange={e => setCity(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_publisher}</label>
                  <input type="text" value={publisher} onChange={e => setPublisher(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_year}</label>
                  <input type="text" value={year} onChange={e => setYear(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
            </div>

            <Button onClick={generate} size="lg" className="w-full">
               {t.btn_generate}
            </Button>

            {reference && (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg">
                 <div className="text-xs text-slate-500 font-bold uppercase mb-2">{t.res_reference}</div>
                 <div className="font-serif text-lg text-slate-800 mb-4" dangerouslySetInnerHTML={{__html: reference}}></div>
                 <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    Copy Text
                 </Button>
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