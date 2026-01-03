import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Globe2 } from 'lucide-react';

interface TimeProps {
  dict: Dictionary;
}

export const TimePage: React.FC<TimeProps> = ({ dict }) => {
  const t = dict.tools.time_converter;
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const zones = [
    { label: "UTC", zone: "UTC" },
    { label: "London (GMT/BST)", zone: "Europe/London" },
    { label: "Paris (CET)", zone: "Europe/Paris" },
    { label: "New York (EST)", zone: "America/New_York" },
    { label: "Los Angeles (PST)", zone: "America/Los_Angeles" },
    { label: "São Paulo (BRT)", zone: "America/Sao_Paulo" },
    { label: "Tokyo (JST)", zone: "Asia/Tokyo" },
    { label: "Sydney (AEST)", zone: "Australia/Sydney" },
    { label: "Dubai (GST)", zone: "Asia/Dubai" },
  ];

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Globe2 className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
               <div className="text-xs uppercase opacity-70 tracking-widest mb-2">{t.label_local}</div>
               <div className="text-5xl font-bold font-mono">
                  {localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
               </div>
               <div className="text-sm opacity-50 mt-2">
                  {localTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
               </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200">
               <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 font-medium text-slate-500 border-b border-slate-200">
                     <tr>
                        <th className="px-6 py-3">{t.col_zone}</th>
                        <th className="px-6 py-3">{t.col_time}</th>
                        <th className="px-6 py-3 hidden sm:table-cell">{t.col_date}</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                     {zones.map(z => {
                        const dateStr = localTime.toLocaleDateString('en-US', { timeZone: z.zone, weekday: 'short', month: 'short', day: 'numeric' });
                        const timeStr = localTime.toLocaleTimeString('en-US', { timeZone: z.zone, hour: '2-digit', minute: '2-digit' });
                        return (
                           <tr key={z.zone} className="hover:bg-slate-50/50">
                              <td className="px-6 py-4 font-medium text-slate-900">{z.label}</td>
                              <td className="px-6 py-4 font-mono text-slate-600 font-bold">{timeStr}</td>
                              <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">{dateStr}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
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