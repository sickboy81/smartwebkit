import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Sliders, Upload, Download } from 'lucide-react';

interface FiltersProps {
  dict: Dictionary;
}

export const FiltersPage: React.FC<FiltersProps> = ({ dict }) => {
  const t = dict.tools.image_filters;
  const [image, setImage] = useState<string | null>(null);
  
  const [filters, setFilters] = useState({
    grayscale: 0,
    sepia: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getFilterString = () => {
    return `grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) blur(${filters.blur}px) brightness(${filters.brightness}%) contrast(${filters.contrast}%)`;
  };

  const download = () => {
    if (!image) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) {
            ctx.filter = getFilterString();
            ctx.drawImage(img, 0, 0);
            const link = document.createElement('a');
            link.download = 'filtered-image.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    };
    img.src = image;
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sliders className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {!image ? (
                <label className="block w-full border-2 border-dashed border-slate-300 rounded-lg p-12 text-center cursor-pointer hover:bg-slate-50">
                    <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                    <Upload className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                    <span className="text-lg font-medium text-slate-600">{t.upload_label}</span>
                </label>
            ) : (
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden p-4">
                        <img 
                            src={image} 
                            alt="Preview" 
                            style={{ filter: getFilterString(), maxHeight: '400px', maxWidth: '100%' }} 
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.label_grayscale}: {filters.grayscale}%</label>
                            <input type="range" min="0" max="100" value={filters.grayscale} onChange={e => setFilters({...filters, grayscale: Number(e.target.value)})} className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.label_sepia}: {filters.sepia}%</label>
                            <input type="range" min="0" max="100" value={filters.sepia} onChange={e => setFilters({...filters, sepia: Number(e.target.value)})} className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.label_blur}: {filters.blur}px</label>
                            <input type="range" min="0" max="20" value={filters.blur} onChange={e => setFilters({...filters, blur: Number(e.target.value)})} className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.label_brightness}: {filters.brightness}%</label>
                            <input type="range" min="0" max="200" value={filters.brightness} onChange={e => setFilters({...filters, brightness: Number(e.target.value)})} className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.label_contrast}: {filters.contrast}%</label>
                            <input type="range" min="0" max="200" value={filters.contrast} onChange={e => setFilters({...filters, contrast: Number(e.target.value)})} className="w-full" />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button onClick={download} className="flex-1 gap-2">
                                <Download className="h-4 w-4" /> Download
                            </Button>
                            <Button onClick={() => setImage(null)} variant="outline">
                                New Image
                            </Button>
                        </div>
                    </div>
                </div>
            )}

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};