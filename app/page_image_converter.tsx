import React, { useState, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Image as ImageIcon, Download, Upload } from 'lucide-react';

interface ImageConverterProps {
  dict: Dictionary;
}

export const ImageConverterPage: React.FC<ImageConverterProps> = ({ dict }) => {
  const t = dict.tools.image_converter;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [format, setFormat] = useState("image/png");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPreview(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadImage = () => {
    if (!preview || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL(format);
      
      const ext = format.split('/')[1];
      const link = document.createElement('a');
      link.download = `converted-image.${ext}`;
      link.href = dataUrl;
      link.click();
    };
    img.src = preview;
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <ImageIcon className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Formato de Imagem</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Conversão de Imagem permite converter imagens entre diferentes formatos: PNG, JPEG e WebP. Cada 
                formato tem suas vantagens: PNG suporta transparência e é ideal para gráficos, JPEG oferece melhor compressão para 
                fotos, e WebP combina qualidade e tamanho de arquivo menor.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A conversão acontece completamente no seu navegador usando a API Canvas do HTML5, o que significa que suas imagens 
                nunca são enviadas para nossos servidores. Isso garante privacidade total e processamento rápido. Simplesmente faça 
                upload da sua imagem, escolha o formato de destino e baixe o arquivo convertido.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é essencial para desenvolvedores web que precisam otimizar imagens para seus sites, designers que 
                precisam converter entre formatos para diferentes usos, ou qualquer pessoa que precise adaptar imagens para diferentes 
                plataformas ou requisitos. A conversão preserva a qualidade original da imagem enquanto permite escolher o formato 
                mais adequado para suas necessidades.
              </p>
            </div>
            
            <div className="space-y-4">
               <label className="block w-full border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                 <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                 <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                 <span className="text-sm font-medium text-slate-600">{selectedFile ? selectedFile.name : t.upload_label}</span>
               </label>
            </div>

            {preview && (
              <div className="space-y-4">
                 <div className="flex justify-center bg-slate-100 p-4 rounded-lg overflow-hidden">
                    <img src={preview} alt="Preview" className="max-h-64 object-contain" />
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="w-full sm:w-1/2 space-y-2">
                       <label className="text-sm font-medium">{t.format_label}</label>
                       <select 
                         className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                         value={format}
                         onChange={(e) => setFormat(e.target.value)}
                       >
                         <option value="image/png">PNG</option>
                         <option value="image/jpeg">JPEG</option>
                         <option value="image/webp">WebP</option>
                       </select>
                    </div>
                    <Button onClick={downloadImage} className="w-full sm:w-1/2 gap-2">
                       <Download className="h-4 w-4" /> {t.btn_download}
                    </Button>
                 </div>
              </div>
            )}
            
            {/* Hidden canvas for processing */}
            <canvas ref={canvasRef} className="hidden" />

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