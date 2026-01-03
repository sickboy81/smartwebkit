import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ShieldAlert, Check, Copy } from 'lucide-react';

interface HashProps {
  dict: Dictionary;
}

export const HashPage: React.FC<HashProps> = ({ dict }) => {
  const t = dict.tools.hash_generator;
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [algo, setAlgo] = useState("SHA-256");
  const [copied, setCopied] = useState(false);

  const generateHash = async () => {
    if (!input) return;
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest(algo, msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!hash) return;
    try {
      await navigator.clipboard.writeText(hash);
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
              <ShieldAlert className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gerador de Hash Criptográfico</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Funções de hash criptográfico são algoritmos que transformam dados de qualquer tamanho em uma string de tamanho 
                fixo. Elas são amplamente usadas para verificação de integridade de dados, assinaturas digitais, armazenamento 
                seguro de senhas e muito mais. Um hash é uma função unidirecional: é fácil calcular o hash de um dado, mas 
                praticamente impossível recuperar o dado original a partir do hash.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta suporta vários algoritmos de hash: SHA-1, SHA-256, SHA-384 e SHA-512. SHA-256 é o mais comum 
                e recomendado para a maioria das aplicações modernas. Cada algoritmo produz um hash de tamanho diferente, com 
                SHA-512 sendo o mais seguro mas também o mais longo.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é essencial para desenvolvedores que precisam gerar hashes para verificação de integridade de 
                arquivos, criação de checksums, ou implementação de sistemas de autenticação. Todo o processamento acontece 
                localmente no seu navegador usando a Web Crypto API, garantindo segurança e privacidade.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
               <div className="w-1/3">
                  <select 
                    value={algo}
                    onChange={(e) => setAlgo(e.target.value)}
                    className="w-full p-2.5 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="SHA-1">SHA-1</option>
                    <option value="SHA-256">SHA-256</option>
                    <option value="SHA-384">SHA-384</option>
                    <option value="SHA-512">SHA-512</option>
                  </select>
               </div>
               <Button onClick={generateHash} className="flex-1">
                  {t.btn_hash}
               </Button>
            </div>

            {hash && (
              <div className="space-y-2">
                 <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">{algo} Output</label>
                  <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? t.btn_copied : t.btn_copy}
                  </Button>
                </div>
                <div className="w-full p-4 rounded-md bg-slate-100 border border-slate-200 font-mono text-xs break-all text-slate-700">
                  {hash}
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