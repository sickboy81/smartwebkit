import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mic, Play, Square } from 'lucide-react';

interface TTSProps {
  dict: Dictionary;
}

export const TextToSpeechPage: React.FC<TTSProps> = ({ dict }) => {
  const t = dict.tools.text_to_speech;
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const vs = window.speechSynthesis.getVoices();
      setVoices(vs);
      if (vs.length > 0 && !selectedVoice) setSelectedVoice(vs[0].name);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoice]);

  const speak = () => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    
    utterance.onend = () => setSpeaking(false);
    utterance.onstart = () => setSpeaking(true);
    
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Mic className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_voice}</label>
               <select className="w-full p-2 border rounded-md" value={selectedVoice} onChange={e => setSelectedVoice(e.target.value)}>
                  {voices.map(v => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_text}</label>
               <textarea className="w-full h-48 p-3 border rounded-md" value={text} onChange={e => setText(e.target.value)} placeholder="Hello world..." />
            </div>
            <div className="flex gap-4">
               <Button onClick={speak} className="flex-1 gap-2" disabled={speaking}>
                  <Play className="h-4 w-4" /> {t.btn_play}
               </Button>
               <Button onClick={stop} variant="outline" className="flex-1 gap-2" disabled={!speaking}>
                  <Square className="h-4 w-4" /> {t.btn_stop}
               </Button>
            </div>
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