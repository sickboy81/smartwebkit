import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileSpreadsheet, Download, RefreshCw } from 'lucide-react';

interface CsvProps {
  dict: Dictionary;
}

const NAMES = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth"];
const SURNAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
const DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "example.com"];

export const RandomCsvPage: React.FC<CsvProps> = ({ dict }) => {
  const t = dict.tools.random_csv;
  const [rows, setRows] = useState(10);
  const [csv, setCsv] = useState("");

  const generate = () => {
    let content = "id,name,email,age,city\n";
    for (let i = 1; i <= rows; i++) {
        const name = NAMES[Math.floor(Math.random() * NAMES.length)];
        const surname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
        const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]}`;
        const age = Math.floor(Math.random() * 60) + 18;
        content += `${i},${name} ${surname},${email},${age},City-${Math.floor(Math.random()*100)}\n`;
    }
    setCsv(content);
  };

  const download = () => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "random_data.csv";
    a.click();
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
            
            <div className="flex items-end gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_rows}</label>
                  <input 
                    type="number" 
                    value={rows}
                    max="1000"
                    onChange={(e) => setRows(Number(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                  />
               </div>
               <Button onClick={generate} className="gap-2">
                  <RefreshCw className="h-4 w-4" /> {t.btn_generate}
               </Button>
            </div>

            {csv && (
              <div className="space-y-2">
                 <textarea 
                   readOnly
                   className="w-full h-64 p-3 border rounded-md bg-slate-50 font-mono text-sm focus:outline-none whitespace-pre"
                   value={csv}
                 />
                 <Button onClick={download} variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" /> {t.btn_download}
                 </Button>
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