import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Check, Copy } from 'lucide-react';
import { marked } from 'marked';

interface MarkdownProps {
  dict: Dictionary;
}

export const MarkdownPage: React.FC<MarkdownProps> = ({ dict }) => {
  const t = dict.tools.markdown_html;
  const [markdown, setMarkdown] = useState("# Hello World\n\n**This is bold** and *this is italic*.\n\n- List item 1\n- List item 2");
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Basic config for marked
    const parsed = marked.parse(markdown) as string;
    setHtml(parsed);
  }, [markdown]);

  const handleCopy = async () => {
    if (!html) return;
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4">
       <div className="space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Markdown para HTML</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Markdown é uma linguagem de marcação leve e fácil de usar que permite formatar texto usando uma sintaxe simples. 
                É amplamente usado em documentação, blogs, READMEs e plataformas como GitHub. Nossa ferramenta converte Markdown 
                em HTML limpo e pronto para uso em páginas web.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A ferramenta oferece uma visualização em tempo real: enquanto você digita Markdown no painel esquerdo, o HTML 
                renderizado aparece instantaneamente no painel direito. Isso permite que você veja exatamente como seu Markdown 
                será exibido antes de copiar o HTML gerado. Suporta todos os elementos comuns do Markdown: cabeçalhos, listas, 
                links, imagens, código, tabelas e muito mais.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é perfeita para desenvolvedores que precisam converter documentação Markdown em HTML, blogueiros 
                que escrevem em Markdown e querem publicar em HTML, ou qualquer pessoa que precise converter conteúdo Markdown para 
                uso em sites. A interface é limpa e livre de distrações, focando apenas na conversão precisa e eficiente.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 h-[600px]">
               <div className="flex flex-col space-y-2 h-full">
                  <label className="text-sm font-medium">{t.label_markdown}</label>
                  <textarea 
                    className="flex-1 w-full p-4 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-mono text-sm resize-none"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                  />
               </div>

               <div className="flex flex-col space-y-2 h-full">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-medium">{t.label_preview}</label>
                     <Button onClick={handleCopy} size="sm" variant="ghost" className="h-6 text-xs gap-1">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {t.btn_copy_html}
                     </Button>
                  </div>
                  <div className="flex-1 w-full p-4 border rounded-md bg-slate-50 overflow-auto prose prose-sm max-w-none">
                     <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>
                  {/* Hidden raw html view toggler could be added here, but preview is usually better */}
               </div>
            </div>

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