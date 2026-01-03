import React, { useState, useCallback, useEffect } from 'react';
import { Dictionary, Lang } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Copy, RefreshCw, Check } from 'lucide-react';

interface PasswordPageProps {
  lang: Lang;
  dict: Dictionary;
}

export const PasswordPage: React.FC<PasswordPageProps> = ({ dict }) => {
  const t = dict.tools.password_generator;
  
  const [length, setLength] = useState<number>(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = lowercase;
    if (includeUpper) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let newPassword = "";
    // Ensure we have cryptographically strong random values
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(array[i] % charset.length);
    }
    setPassword(newPassword);
    setCopied(false);
  }, [length, includeUpper, includeNumbers, includeSymbols]);

  // Generate on mount
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Tool Card */}
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl">{t.title}</CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Gerador de Senhas Seguras</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Criar senhas fortes e seguras é essencial para proteger suas contas online. Nossa ferramenta gera senhas 
                criptograficamente seguras usando o gerador de números aleatórios do navegador, garantindo que cada senha seja 
                única e imprevisível. Senhas fortes são a primeira linha de defesa contra hackers e ataques de força bruta.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                Você pode personalizar sua senha ajustando o comprimento (de 8 a 50 caracteres) e escolhendo quais tipos de 
                caracteres incluir: letras maiúsculas, números e símbolos. Quanto mais opções você selecionar e maior o comprimento, 
                mais segura será sua senha. Recomendamos usar pelo menos 16 caracteres com todos os tipos de caracteres habilitados 
                para máxima segurança.
              </p>
              <p className="text-slate-600 leading-7">
                As senhas são geradas localmente no seu navegador e nunca são enviadas para nossos servidores. Isso garante 
                privacidade total. Use esta ferramenta para criar senhas únicas para cada uma de suas contas online, e considere 
                usar um gerenciador de senhas para armazená-las com segurança.
              </p>
            </div>
            
            {/* Result Display */}
            <div className="relative">
              <div className="min-h-[60px] flex items-center justify-center p-4 bg-slate-100 rounded-lg border border-slate-200 break-all text-center">
                <span className="text-xl font-mono tracking-wider font-semibold text-slate-900">
                  {password}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t.length_label}
                  </label>
                  <span className="text-sm font-bold text-slate-500">{length}</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <label className="flex items-center space-x-2 cursor-pointer p-3 border rounded-md hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={includeUpper}
                    onChange={(e) => setIncludeUpper(e.target.checked)}
                    className="w-4 h-4 text-slate-900 bg-white border-slate-300 rounded focus:ring-slate-900"
                  />
                  <span className="text-sm text-slate-700">{t.opt_uppercase}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer p-3 border rounded-md hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-4 h-4 text-slate-900 bg-white border-slate-300 rounded focus:ring-slate-900"
                  />
                  <span className="text-sm text-slate-700">{t.opt_numbers}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer p-3 border rounded-md hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-4 h-4 text-slate-900 bg-white border-slate-300 rounded focus:ring-slate-900"
                  />
                  <span className="text-sm text-slate-700">{t.opt_symbols}</span>
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
             <Button 
                onClick={generatePassword} 
                variant="outline" 
                className="w-full sm:w-1/2 gap-2 h-11"
              >
                <RefreshCw className="h-4 w-4" />
                {t.btn_generate}
             </Button>
             <Button 
                onClick={handleCopy} 
                className="w-full sm:w-1/2 gap-2 h-11"
                disabled={!password}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? t.btn_copied : t.btn_copy}
             </Button>
          </CardFooter>
        </Card>

        {/* SEO / Info Article */}
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
