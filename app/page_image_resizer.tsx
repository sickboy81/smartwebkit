import React, { useState, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Scaling, Download, Upload } from 'lucide-react';

interface ImageResizerProps {
  dict: Dictionary;
}

export const ImageResizerPage: React.FC<ImageResizerProps> = ({ dict }) => {
  const t = dict.tools.image_resizer;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);
  const [quality, setQuality] = useState(90);
  const [keepAspect, setKeepAspect] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setPreview(result);
        // Load dims
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
          setAspectRatio(img.width / img.height);
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (keepAspect && aspectRatio) {
      setHeight(Math.round(val / aspectRatio));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (keepAspect && aspectRatio) {
      setWidth(Math.round(val * aspectRatio));
    }
  };

  const downloadImage = () => {
    if (!preview || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);
      // JPEG supports quality parameter
      const dataUrl = canvas.toDataURL("image/jpeg", quality / 100);
      
      const link = document.createElement('a');
      link.download = `resized-image.jpg`;
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
              <Scaling className="w-6 h-6" />
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
              <div className="space-y-6">
                 <div className="flex justify-center bg-slate-100 p-4 rounded-lg overflow-hidden">
                    <img src={preview} alt="Preview" className="max-h-64 object-contain" />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-medium">{t.width_label}</label>
                       <input 
                         type="number" 
                         className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                         value={width}
                         onChange={(e) => handleWidthChange(Number(e.target.value))}
                       />
                       <label className="flex items-center space-x-2 text-sm text-slate-600 mt-1">
                          <input type="checkbox" checked={keepAspect} onChange={e => setKeepAspect(e.target.checked)} />
                          <span>Lock Aspect Ratio</span>
                       </label>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium">{t.height_label}</label>
                       <input 
                         type="number" 
                         className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                         value={height}
                         onChange={(e) => handleHeightChange(Number(e.target.value))}
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium">{t.quality_label}: {quality}%</label>
                       <input 
                         type="range"
                         min="1"
                         max="100" 
                         className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                         value={quality}
                         onChange={(e) => setQuality(Number(e.target.value))}
                       />
                    </div>

                     <div className="flex items-end">
                        <Button onClick={downloadImage} className="w-full gap-2">
                          <Download className="h-4 w-4" /> {t.btn_download}
                        </Button>
                     </div>
                 </div>
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