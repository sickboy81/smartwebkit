import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { GitCompare } from 'lucide-react';

interface DiffProps {
  dict: Dictionary;
}

export const DiffPage: React.FC<DiffProps> = ({ dict }) => {
  const t = dict.tools.diff_checker;
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diff, setDiff] = useState<{ type: 'same' | 'added' | 'removed', text: string }[] | null>(null);

  const compare = () => {
    const linesA = textA.split('\n');
    const linesB = textB.split('\n');
    const result: { type: 'same' | 'added' | 'removed', text: string }[] = [];
    
    // Very basic comparison for demonstration
    // A proper Myers Diff algorithm would be better for complex diffs
    // Here we just check set difference for simplicity in client-side without libs
    
    const setA = new Set(linesA);
    const setB = new Set(linesB);

    // Combine all unique lines to display
    const allLines = Array.from(new Set([...linesA, ...linesB]));

    allLines.forEach(line => {
      if (line.trim() === "") return; // skip empty
      if (setA.has(line) && setB.has(line)) {
         // Present in both, context not preserved perfectly in this simple Algo but sufficient for lists
         // For code, we usually need line-by-line index matching.
         // Let's implement a simple index walker.
      }
    });

    // Let's switch to a simpler "List Diff" logic which is robust without Libs
    // Just iterating max length
    const maxLen = Math.max(linesA.length, linesB.length);
    const tempResult: typeof result = [];
    
    // This is naive line-by-line. Good for similar structures.
    for (let i=0; i < maxLen; i++) {
        const lineA = linesA[i];
        const lineB = linesB[i];

        if (lineA === lineB) {
            if (lineA !== undefined) tempResult.push({ type: 'same', text: lineA });
        } else {
            if (lineA !== undefined) tempResult.push({ type: 'removed', text: lineA });
            if (lineB !== undefined) tempResult.push({ type: 'added', text: lineB });
        }
    }
    setDiff(tempResult);
  };

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4">
      <div className="space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <GitCompare className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_original}</label>
                  <textarea 
                    className="w-full h-64 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-xs whitespace-pre"
                    value={textA}
                    onChange={(e) => setTextA(e.target.value)}
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_modified}</label>
                  <textarea 
                    className="w-full h-64 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-xs whitespace-pre"
                    value={textB}
                    onChange={(e) => setTextB(e.target.value)}
                  />
               </div>
            </div>

            <Button onClick={compare} className="w-full md:w-auto">
               {t.btn_compare}
            </Button>

            {diff && (
              <div className="border rounded-md bg-white overflow-hidden">
                <div className="flex text-xs border-b p-2 bg-slate-50 gap-4">
                   <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 border border-red-200"></div> {t.legend_removed}</div>
                   <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-100 border border-green-200"></div> {t.legend_added}</div>
                </div>
                <div className="font-mono text-sm">
                   {diff.map((line, idx) => (
                     <div key={idx} className={`px-4 py-1 border-b border-slate-50 flex ${
                        line.type === 'added' ? 'bg-green-50 text-green-900' :
                        line.type === 'removed' ? 'bg-red-50 text-red-900 decoration-red-900' : 
                        'text-slate-600'
                     }`}>
                        <span className="w-6 text-slate-400 select-none">{idx + 1}</span>
                        <span className="whitespace-pre-wrap break-all">{line.type === 'removed' ? '-' : line.type === 'added' ? '+' : ' '} {line.text}</span>
                     </div>
                   ))}
                </div>
              </div>
            )}

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none mx-auto max-w-3xl">
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