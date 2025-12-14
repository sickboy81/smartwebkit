import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Network } from 'lucide-react';

interface SubnetProps {
  dict: Dictionary;
}

export const SubnetPage: React.FC<SubnetProps> = ({ dict }) => {
  const t = dict.tools.subnet_calculator;
  const [ip, setIp] = useState("192.168.1.1");
  const [cidr, setCidr] = useState(24);
  const [result, setResult] = useState<any>(null);

  const ipToInt = (ipStr: string) => {
    return ipStr.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
  };

  const intToIp = (int: number) => {
    return [
      (int >>> 24) & 0xFF,
      (int >>> 16) & 0xFF,
      (int >>> 8) & 0xFF,
      int & 0xFF
    ].join('.');
  };

  const calculate = () => {
    try {
      if (!ip.match(/^(\d{1,3}\.){3}\d{1,3}$/)) return;
      
      const ipInt = ipToInt(ip);
      const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
      const network = (ipInt & mask) >>> 0;
      const broadcast = (network | (~mask >>> 0)) >>> 0;
      const first = (network + 1) >>> 0;
      const last = (broadcast - 1) >>> 0;
      const hosts = Math.max(0, broadcast - network - 1);

      setResult({
        network: intToIp(network),
        broadcast: intToIp(broadcast),
        mask: intToIp(mask),
        first: intToIp(first),
        last: intToIp(last),
        hosts: hosts.toLocaleString(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Network className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="flex flex-col md:flex-row gap-4 items-end">
               <div className="flex-1 space-y-2 w-full">
                  <label className="text-sm font-medium">{t.label_ip}</label>
                  <input 
                    type="text" 
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono"
                    placeholder="192.168.1.1"
                  />
               </div>
               <div className="w-full md:w-32 space-y-2">
                  <label className="text-sm font-medium">{t.label_cidr}</label>
                  <select 
                    value={cidr}
                    onChange={(e) => setCidr(Number(e.target.value))}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono"
                  >
                    {Array.from({length: 32}, (_, i) => 32 - i).map(n => (
                        <option key={n} value={n}>/{n}</option>
                    ))}
                  </select>
               </div>
               <Button onClick={calculate} size="lg" className="w-full md:w-auto h-[50px]">
                  {t.btn_calculate}
               </Button>
            </div>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <ResultItem label={t.res_network} value={result.network} />
                 <ResultItem label={t.res_broadcast} value={result.broadcast} />
                 <ResultItem label={t.res_mask} value={result.mask} />
                 <ResultItem label={t.res_hosts} value={result.hosts} />
                 <ResultItem label={t.res_first} value={result.first} />
                 <ResultItem label={t.res_last} value={result.last} />
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

const ResultItem = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-slate-50 p-4 rounded border border-slate-100">
        <span className="block text-xs uppercase text-slate-500 font-bold mb-1">{label}</span>
        <span className="block font-mono text-lg text-slate-900">{value}</span>
    </div>
);