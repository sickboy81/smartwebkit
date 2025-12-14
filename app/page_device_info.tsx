import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Monitor, Smartphone, Globe, Wifi } from 'lucide-react';

interface DeviceProps {
  dict: Dictionary;
}

export const DevicePage: React.FC<DeviceProps> = ({ dict }) => {
  const t = dict.tools.device_info;
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    const ua = navigator.userAgent;
    let browser = "Unknown";
    if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
    else if (ua.indexOf("SamsungBrowser") > -1) browser = "Samsung Internet";
    else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
    else if (ua.indexOf("Trident") > -1) browser = "Microsoft Internet Explorer";
    else if (ua.indexOf("Edge") > -1) browser = "Microsoft Edge";
    else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
    else if (ua.indexOf("Safari") > -1) browser = "Apple Safari";

    let os = "Unknown OS";
    if (ua.indexOf("Win") !== -1) os = "Windows";
    if (ua.indexOf("Mac") !== -1) os = "MacOS";
    if (ua.indexOf("Linux") !== -1) os = "Linux";
    if (ua.indexOf("Android") !== -1) os = "Android";
    if (ua.indexOf("like Mac") !== -1) os = "iOS";

    setInfo({
      screen: `${window.screen.width} x ${window.screen.height}`,
      viewport: `${window.innerWidth} x ${window.innerHeight}`,
      pixelRatio: window.devicePixelRatio,
      browser,
      os,
      ua,
      lang: navigator.language,
      online: navigator.onLine,
      cores: navigator.hardwareConcurrency || 'Unknown',
    });
  }, []);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Monitor className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Screen Card */}
               <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-slate-900">
                     <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-semibold text-slate-900">{t.label_screen}</h3>
                     <p className="text-2xl font-bold text-slate-700 mt-1">{info.screen}</p>
                     <p className="text-sm text-slate-500">Viewport: {info.viewport}</p>
                     <p className="text-sm text-slate-500">DPR: {info.pixelRatio}x</p>
                  </div>
               </div>

               {/* Browser Card */}
               <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-slate-900">
                     <Globe className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-semibold text-slate-900">{t.label_browser}</h3>
                     <p className="text-xl font-bold text-slate-700 mt-1">{info.browser}</p>
                     <p className="text-sm text-slate-500">{info.os}</p>
                     <p className="text-sm text-slate-500">{t.label_lang}: {info.lang}</p>
                  </div>
               </div>

               {/* Network Card */}
               <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-slate-900">
                     <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-semibold text-slate-900">{t.label_online}</h3>
                     <p className={`text-xl font-bold mt-1 ${info.online ? 'text-green-600' : 'text-red-600'}`}>
                        {info.online ? t.val_online : t.val_offline}
                     </p>
                     <p className="text-sm text-slate-500">CPU Cores: {info.cores}</p>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_ua}</label>
               <div className="p-4 bg-slate-900 text-slate-200 font-mono text-xs rounded-md break-all">
                  {info.ua}
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