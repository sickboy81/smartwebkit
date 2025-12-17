import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Palette, Check, Copy } from 'lucide-react';

interface ColorProps {
  dict: Dictionary;
}

export const ColorPage: React.FC<ColorProps> = ({ dict }) => {
  const t = dict.tools.color_converter;
  const [hex, setHex] = useState("#000000");
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");
  const [copied, setCopied] = useState(false);

  // Parse HEX to RGB
  useEffect(() => {
    let cleanHex = hex.replace("#", "");
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(char => char + char).join('');
    }
    
    if (cleanHex.length === 6 && /^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);
      setRgb(`rgb(${r}, ${g}, ${b})`);
    } else {
      setRgb("Invalid HEX");
    }
  }, [hex]);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
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
              <Palette className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Cores HEX para RGB</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Conversão de Cores permite converter facilmente entre formatos HEX (hexadecimal) e RGB 
                (Red, Green, Blue). HEX é um formato de 6 dígitos usado em CSS e design web (por exemplo, #FF5733), enquanto 
                RGB é um formato numérico usado em programação e design gráfico (por exemplo, rgb(255, 87, 51)).
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A conversão acontece em tempo real enquanto você digita ou seleciona uma cor. Você pode usar o seletor de cor 
                visual para escolher uma cor ou digitar diretamente o valor HEX. A ferramenta exibe uma pré-visualização da cor 
                e converte automaticamente para o formato RGB correspondente.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é essencial para desenvolvedores web, designers gráficos e qualquer pessoa que trabalhe com cores 
                em projetos digitais. Use-a para garantir consistência de cores entre diferentes formatos e facilitar a integração 
                de cores em seus projetos CSS, JavaScript ou design.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Color Preview */}
              <div 
                className="w-32 h-32 rounded-full shadow-lg border-4 border-white ring-1 ring-slate-200"
                style={{ backgroundColor: rgb !== "Invalid HEX" ? rgb : "#fff" }}
              ></div>

              <div className="flex-1 space-y-6 w-full">
                 <div className="space-y-2">
                    <label className="text-sm font-medium">{t.label_hex}</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input 
                          type="text" 
                          value={hex}
                          onChange={handleHexChange}
                          className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white uppercase font-mono"
                          maxLength={7}
                        />
                        <div 
                          className="absolute left-3 top-3.5 w-4 h-4 rounded-sm border border-slate-200"
                          style={{ backgroundColor: rgb !== "Invalid HEX" ? rgb : "transparent" }}
                        ></div>
                      </div>
                      <input 
                        type="color" 
                        value={hex.length === 7 ? hex : "#000000"} 
                        onChange={handleHexChange}
                        className="h-12 w-12 cursor-pointer border rounded-md bg-white p-1"
                      />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium">{t.label_rgb}</label>
                    <div className="flex gap-2">
                       <input 
                          type="text" 
                          readOnly
                          value={rgb}
                          className="w-full p-3 border rounded-md bg-slate-50 font-mono text-slate-600"
                        />
                       <Button onClick={() => copyToClipboard(rgb)} variant="outline" className="h-12 w-16">
                         {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                       </Button>
                    </div>
                 </div>
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