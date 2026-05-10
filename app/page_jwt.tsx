import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Key } from 'lucide-react';

interface JwtProps {
  dict: Dictionary;
}

export const JwtPage: React.FC<JwtProps> = ({ dict }) => {
  const t = dict.tools.jwt_decoder;
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
        setHeader("");
        setPayload("");
        setError("");
        return;
    }

    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error("Invalid JWT format (must have 3 parts)");
        }

        const decode = (str: string) => {
            // Replace standard base64url characters
            const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
            // Decode
            const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.stringify(JSON.parse(jsonPayload), null, 2);
        };

        setHeader(decode(parts[0]));
        setPayload(decode(parts[1]));
        setError("");
    } catch (e: any) {
        setError(t.error_invalid);
        setHeader("");
        setPayload("");
    }
  }, [token, t.error_invalid]);

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Key className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-2">
               <label className="text-sm font-medium">{t.label_token}</label>
               <textarea 
                 className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none font-mono text-xs break-all"
                 value={token}
                 onChange={e => setToken(e.target.value)}
                 placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
               />
               {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium text-red-600">{t.label_header}</label>
                  <pre className="w-full h-64 p-3 border rounded-md bg-slate-50 font-mono text-xs overflow-auto">
                     {header}
                  </pre>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-600">{t.label_payload}</label>
                  <pre className="w-full h-64 p-3 border rounded-md bg-slate-50 font-mono text-xs overflow-auto">
                     {payload}
                  </pre>
               </div>
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