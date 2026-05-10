import React, { useState, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Image as ImageIcon, Download, Upload } from 'lucide-react';

interface FaviconProps {
  dict: Dictionary;
}

export const FaviconPage: React.FC<FaviconProps> = ({ dict }) => {
  const t = dict.tools.favicon_generator;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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

  const downloadFavicon = () => {
    if (!preview || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      // Standard favicon 32x32
      canvas.width = 32;
      canvas.height = 32;
      ctx?.drawImage(img, 0, 0, 32, 32);
      const dataUrl = canvas.toDataURL("image/png");
      
      const link = document.createElement('a');
      link.download = `favicon.png`;
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
            
            <div className="space-y-4">
               <label className="block w-full border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                 <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                 <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                 <span className="text-sm font-medium text-slate-600">{selectedFile ? selectedFile.name : t.upload_label}</span>
               </label>
            </div>

            {preview && (
              <div className="space-y-4">
                 <div className="flex justify-center items-center bg-slate-100 p-8 rounded-lg">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-8 h-8 border border-slate-300 bg-white">
                             <img src={preview} alt="Favicon Preview" className="w-full h-full object-contain" />
                         </div>
                         <span className="text-xs text-slate-500">32x32 Preview</span>
                    </div>
                 </div>

                 <Button onClick={downloadFavicon} className="w-full gap-2">
                    <Download className="h-4 w-4" /> {t.btn_download}
                 </Button>
              </div>
            )}
            
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