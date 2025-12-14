import React, { useState, useRef } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { QrCode, Download } from 'lucide-react';
import QRCode from 'react-qr-code';

interface QrPageProps {
  dict: Dictionary;
}

export const QrPage: React.FC<QrPageProps> = ({ dict }) => {
  const t = dict.tools.qr_code_generator;
  const [type, setType] = useState<'url' | 'text' | 'email' | 'wifi'>('url');
  
  // States for inputs
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");

  // Ref for SVG to download
  const svgRef = useRef<HTMLDivElement>(null);

  const getQrValue = () => {
    switch (type) {
      case 'url': return url || "https://example.com";
      case 'text': return text || "Example Text";
      case 'email': 
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      case 'wifi':
        return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
      default: return "SmartWebKit";
    }
  };

  const downloadQr = () => {
    const svg = svgRef.current?.querySelector("svg");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    // Safe encoding for Unicode characters
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <QrCode className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Type Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: 'url', label: t.type_url },
                { id: 'wifi', label: t.type_wifi },
                { id: 'text', label: t.type_text },
                { id: 'email', label: t.type_email },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setType(opt.id as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    type === opt.id 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-4">
                {type === 'url' && (
                   <div className="space-y-2">
                    <label className="text-sm font-medium">{t.type_url}</label>
                    <input 
                      type="url" 
                      placeholder="https://smartwebkit.net"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                    />
                  </div>
                )}
                {type === 'text' && (
                   <div className="space-y-2">
                    <label className="text-sm font-medium">{t.type_text}</label>
                    <textarea 
                      placeholder="Hello World"
                      className="w-full h-32 p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      value={text}
                      onChange={e => setText(e.target.value)}
                    />
                  </div>
                )}
                {type === 'email' && (
                   <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_email}</label>
                      <input 
                        type="email" 
                        placeholder="user@example.com"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_subject}</label>
                      <input 
                        type="text" 
                        placeholder="Hello"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_body}</label>
                      <textarea 
                        placeholder="Message..."
                        className="w-full h-24 p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                      />
                    </div>
                   </>
                )}
                {type === 'wifi' && (
                   <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_ssid}</label>
                      <input 
                        type="text" 
                        placeholder="MyNetwork"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={ssid}
                        onChange={e => setSsid(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_password}</label>
                      <input 
                        type="text" 
                        placeholder="password123"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.label_encryption}</label>
                      <select 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                        value={encryption}
                        onChange={e => setEncryption(e.target.value)}
                      >
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">None</option>
                      </select>
                    </div>
                   </>
                )}
              </div>

              {/* Output */}
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-white p-4 rounded-lg shadow-sm" ref={svgRef}>
                   <QRCode 
                    value={getQrValue()} 
                    size={200}
                    level="M"
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                   />
                </div>
                <Button onClick={downloadQr} variant="outline" className="gap-2">
                  <Download className="h-4 w-4" /> {t.btn_download}
                </Button>
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