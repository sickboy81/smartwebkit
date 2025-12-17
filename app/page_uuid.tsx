import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Fingerprint, Check, Copy, RefreshCw } from 'lucide-react';

interface UUIDProps {
  dict: Dictionary;
}

export const UUIDPage: React.FC<UUIDProps> = ({ dict }) => {
  const t = dict.tools.uuid_generator;
  const [uuids, setUuids] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [version, setVersion] = useState<'v4' | 'v1'>('v4');
  const [copied, setCopied] = useState(false);

  // Simple V1 Implementation for browser (simulated node)
  const generateV1 = () => {
    const now = Date.now();
    const timestamp = (BigInt(now) + 12219292800000n) * 10000n + BigInt(Math.floor(Math.random() * 10000));
    
    const timeLow = (timestamp & 0xffffffffn).toString(16).padStart(8, '0');
    const timeMid = ((timestamp >> 32n) & 0xffffn).toString(16).padStart(4, '0');
    const timeHighAndVersion = (((timestamp >> 48n) & 0x0fffn) | 0x1000n).toString(16).padStart(4, '0');
    
    // Simulate clock sequence and node (since we can't get real MAC)
    const clockSeq = (Math.floor(Math.random() * 0x3fff) | 0x8000).toString(16).padStart(4, '0');
    
    // Generate random node ID (48-bit) - simulating MAC address
    const node = Array.from({ length: 6 }, () => 
      Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    ).join('');

    return `${timeLow}-${timeMid}-${timeHighAndVersion}-${clockSeq}-${node}`;
  };

  const generate = () => {
    const newUuids = [];
    for (let i = 0; i < quantity; i++) {
      if (version === 'v4') {
        newUuids.push(crypto.randomUUID());
      } else {
        newUuids.push(generateV1());
      }
    }
    setUuids(newUuids);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (uuids.length === 0) return;
    try {
      await navigator.clipboard.writeText(uuids.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Fingerprint className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gerador de UUID/GUID</h3>
              <p className="text-slate-600 leading-7 mb-3">
                UUID (Universally Unique Identifier) ou GUID (Globally Unique Identifier) são identificadores únicos de 128 bits 
                usados para identificar recursos de forma única. Eles são essenciais em desenvolvimento de software para criar 
                chaves primárias em bancos de dados, IDs de sessão, tokens de API ou qualquer situação onde você precise de um 
                identificador único e livre de colisões.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta suporta dois tipos de UUID: Versão 4 (aleatória) e Versão 1 (baseada em tempo). A Versão 4 é a 
                mais comum e usa números aleatórios criptograficamente seguros. A Versão 1 é baseada no timestamp atual e no 
                endereço MAC, útil quando você precisa de identificadores ordenáveis por tempo de criação.
              </p>
              <p className="text-slate-600 leading-7">
                Você pode gerar um único UUID ou criar múltiplos de uma vez (até 100), perfeito para preencher bancos de dados 
                de teste ou atribuir IDs em lote. Todos os UUIDs são gerados localmente no seu navegador usando o gerador de números 
                aleatórios do navegador, garantindo segurança e privacidade.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              <div className="w-full md:w-auto space-y-2">
                <label className="text-sm font-medium">{t.label_version}</label>
                <div className="flex bg-slate-100 p-1 rounded-md border border-slate-200">
                  <button
                    onClick={() => setVersion('v4')}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                      version === 'v4' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t.opt_v4}
                  </button>
                  <button
                    onClick={() => setVersion('v1')}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                      version === 'v1' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t.opt_v1}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-32 space-y-2">
                <label className="text-sm font-medium">{t.label_quantity}</label>
                <input 
                  type="number" 
                  min="1" 
                  max="100" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                />
              </div>
              
              <Button onClick={generate} className="gap-2 w-full md:w-auto h-[42px]">
                <RefreshCw className="h-4 w-4" /> {t.btn_generate}
              </Button>
            </div>

            {uuids.length > 0 && (
              <div className="relative rounded-md border border-slate-200 bg-slate-50">
                <div className="absolute right-2 top-2">
                   <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1 bg-white border shadow-sm">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? t.btn_copied : t.btn_copy}
                  </Button>
                </div>
                <pre className="p-4 max-h-96 overflow-auto font-mono text-sm text-slate-800 whitespace-pre-wrap">
                  {uuids.join('\n')}
                </pre>
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