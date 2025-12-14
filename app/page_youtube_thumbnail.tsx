import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Youtube, Download, Image as ImageIcon } from 'lucide-react';

interface YTProps {
  dict: Dictionary;
}

export const YouTubeThumbnailPage: React.FC<YTProps> = ({ dict }) => {
  const t = dict.tools.youtube_thumbnail;
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const extractId = () => {
    let id = "";
    // Regular expression for YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      id = match[2];
    } else {
      id = "";
    }
    setVideoId(id);
  };

  const ThumbCard = ({ label, res, url }: { label: string, res: string, url: string }) => (
    <div className="border rounded-lg p-4 space-y-2 bg-white">
       <div className="aspect-video bg-slate-100 rounded overflow-hidden flex items-center justify-center">
          <img src={url} alt={label} className="w-full h-full object-cover" />
       </div>
       <div className="flex justify-between items-center">
          <div>
             <div className="font-semibold text-sm">{label}</div>
             <div className="text-xs text-slate-500">{res}</div>
          </div>
          <Button onClick={() => window.open(url, '_blank')} size="sm" variant="outline" className="gap-2">
             <Download className="w-3 h-3" /> {t.btn_download}
          </Button>
       </div>
    </div>
  );

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Youtube className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="flex gap-4">
               <input 
                 type="text" 
                 className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none"
                 placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                 value={url}
                 onChange={e => setUrl(e.target.value)}
               />
               <Button onClick={extractId}>
                  {t.btn_get}
               </Button>
            </div>

            {videoId && (
               <div className="grid gap-6">
                  <ThumbCard 
                    label="Max Resolution (HD)" 
                    res="1280x720 (if available)" 
                    url={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  />
                  <ThumbCard 
                    label="High Quality" 
                    res="480x360" 
                    url={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                  />
                  <div className="grid grid-cols-2 gap-4">
                     <ThumbCard 
                       label="Medium Quality" 
                       res="320x180" 
                       url={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} 
                     />
                     <ThumbCard 
                       label="Standard Quality" 
                       res="120x90" 
                       url={`https://img.youtube.com/vi/${videoId}/default.jpg`} 
                     />
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