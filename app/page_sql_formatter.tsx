import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Database, Copy, Check } from 'lucide-react';

interface SQLProps {
  dict: Dictionary;
}

export const SQLPage: React.FC<SQLProps> = ({ dict }) => {
  const t = dict.tools.sql_formatter;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const formatSQL = () => {
    // Very basic client-side formatter logic
    let sql = input.replace(/\s+/g, ' '); // collapse whitespace
    
    // Keywords to force newline
    const keywords = ["SELECT", "FROM", "WHERE", "AND", "OR", "ORDER BY", "GROUP BY", "HAVING", "LIMIT", "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE FROM", "LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "OUTER JOIN", "ON"];
    
    // Simple replacement loop (Case insensitive)
    keywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'gi');
        sql = sql.replace(regex, `\n${kw.toUpperCase()}`);
    });

    // Indent params in parentheses
    sql = sql.replace(/\(/g, '(\n    ');
    sql = sql.replace(/\)/g, '\n)');
    sql = sql.replace(/,/g, ',\n    ');
    
    // Clean up double newlines
    sql = sql.replace(/^\n/, '');
    
    setOutput(sql);
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
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Database className="w-6 h-6" />
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
                placeholder="SELECT * FROM users WHERE id = 1"
              />
            </div>

            <Button onClick={formatSQL} className="w-full md:w-auto">
               {t.btn_format}
            </Button>

            {output && (
              <div className="space-y-2 relative">
                 <div className="absolute right-2 top-2">
                     <Button onClick={handleCopy} size="sm" variant="ghost" className="h-8 gap-1 bg-white border">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {t.btn_copy}
                     </Button>
                 </div>
                 <textarea 
                   readOnly
                   className="w-full h-64 p-3 border rounded-md bg-slate-900 text-slate-50 font-mono text-sm focus:outline-none"
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