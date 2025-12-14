import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MessageCircle, Check, Copy, ExternalLink } from 'lucide-react';

interface WhatsAppProps {
  dict: Dictionary;
}

export const WhatsAppPage: React.FC<WhatsAppProps> = ({ dict }) => {
  const t = dict.tools.whatsapp_link;
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    // Clean phone: remove non-numeric chars
    let cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone) return;

    const encodedMessage = encodeURIComponent(message);
    const finalLink = `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;
    setLink(finalLink);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpen = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_phone}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                    placeholder="5511999999999"
                  />
                  <p className="text-xs text-slate-500">Include Country Code (e.g. 55 for Brazil)</p>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_message}</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    placeholder="Hello! I'm interested in..."
                  />
               </div>
            </div>

            <Button onClick={generate} size="lg" className="w-full">
               {t.btn_generate}
            </Button>

            {link && (
              <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                 <div className="break-all text-slate-600 font-mono text-sm bg-white p-3 rounded border border-slate-200">
                    {link}
                 </div>
                 <div className="flex gap-4">
                    <Button onClick={handleCopy} className="flex-1 gap-2">
                       {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                       {copied ? t.btn_copied : t.btn_copy}
                    </Button>
                    <Button onClick={handleOpen} variant="outline" className="flex-1 gap-2">
                       <ExternalLink className="h-4 w-4" /> {t.btn_open}
                    </Button>
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