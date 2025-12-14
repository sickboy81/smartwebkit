import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ListOrdered } from 'lucide-react';

interface SorterProps {
  dict: Dictionary;
}

export const ListSorterPage: React.FC<SorterProps> = ({ dict }) => {
  const t = dict.tools.list_sorter;
  const [input, setInput] = useState("");

  const sort = (type: 'az' | 'za' | '09' | '90' | 'len' | 'rev') => {
    let list = input.split('\n');
    
    switch (type) {
        case 'az': list.sort((a, b) => a.localeCompare(b)); break;
        case 'za': list.sort((a, b) => b.localeCompare(a)); break;
        case '09': list.sort((a, b) => parseFloat(a) - parseFloat(b)); break;
        case '90': list.sort((a, b) => parseFloat(b) - parseFloat(a)); break;
        case 'len': list.sort((a, b) => a.length - b.length); break;
        case 'rev': list.reverse(); break;
    }
    
    setInput(list.join('\n'));
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <ListOrdered className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-64 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Banana&#10;Apple&#10;Cherry"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => sort('az')} variant="outline">{t.btn_az}</Button>
              <Button onClick={() => sort('za')} variant="outline">{t.btn_za}</Button>
              <Button onClick={() => sort('09')} variant="outline">{t.btn_09}</Button>
              <Button onClick={() => sort('90')} variant="outline">{t.btn_90}</Button>
              <Button onClick={() => sort('len')} variant="outline">{t.btn_len}</Button>
              <Button onClick={() => sort('rev')} variant="outline">{t.btn_rev}</Button>
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