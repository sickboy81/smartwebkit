import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Globe, RefreshCw } from 'lucide-react';

interface IpProps {
  dict: Dictionary;
}

export const MyIpPage: React.FC<IpProps> = ({ dict }) => {
  const t = dict.tools.my_ip;
  const [ip, setIp] = useState("Loading...");
  
  const fetchIp = async () => {
    setIp("Loading...");
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      setIp(data.ip);
    } catch (e) {
      setIp("Error fetching IP");
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            
            <div className="py-12 bg-slate-50 rounded-xl border border-slate-100">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{t.label_ip}</h3>
               <div className="text-4xl md:text-6xl font-mono font-bold text-slate-900 break-all px-4">
                  {ip}
               </div>
            </div>

            <Button onClick={fetchIp} variant="outline" className="gap-2">
               <RefreshCw className="h-4 w-4" /> {t.btn_refresh}
            </Button>

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