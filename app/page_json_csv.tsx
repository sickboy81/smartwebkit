import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileSpreadsheet, Check, Copy, RefreshCw } from 'lucide-react';

interface JsonCsvProps {
  dict: Dictionary;
}

export const JsonCsvPage: React.FC<JsonCsvProps> = ({ dict }) => {
  const t = dict.tools.json_to_csv;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      
      if (!Array.isArray(parsed)) {
        setError(t.error_invalid);
        return;
      }

      if (parsed.length === 0) {
        setOutput("");
        return;
      }

      // Extract headers from all objects to handle missing keys
      const headers = Array.from(new Set(parsed.flatMap(obj => Object.keys(obj))));
      
      const csvRows = [
        headers.join(','), // Header row
        ...parsed.map(obj => {
          return headers.map(header => {
            let val = obj[header];
            if (val === undefined || val === null) val = "";
            // Handle strings with commas or quotes
            if (typeof val === 'string') {
               val = val.replace(/"/g, '""'); // Escape double quotes
               if (val.includes(',') || val.includes('"') || val.includes('\n')) {
                 val = `"${val}"`;
               }
            } else if (typeof val === 'object') {
               val = `"${JSON.stringify(val).replace(/"/g, '""')}"`;
            }
            return val;
          }).join(',');
        })
      ];

      setOutput(csvRows.join('\n'));
      setError("");
    } catch (e) {
      setError(t.error_invalid);
      setOutput("");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
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
              <FileSpreadsheet className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.input_label}</label>
              <textarea 
                className="w-full h-40 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]'
              />
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            </div>

            <Button onClick={convert} className="gap-2">
               <RefreshCw className="h-4 w-4" /> {t.btn_convert}
            </Button>

            {output && (
              <div className="space-y-2">
                 <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">{t.output_label}</label>
                  <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {t.btn_copy}
                  </Button>
                </div>
                <textarea 
                  readOnly
                  className="w-full h-48 p-3 border rounded-md bg-slate-50 font-mono text-sm focus:outline-none whitespace-pre"
                  value={output}
                />
              </div>
            )}

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