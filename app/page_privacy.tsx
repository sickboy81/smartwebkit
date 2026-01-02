import React from 'react';
import { Dictionary } from '../types';
import { Shield } from 'lucide-react';

interface PrivacyProps {
  dict: Dictionary;
}

export const PrivacyPage: React.FC<PrivacyProps> = ({ dict }) => {
  const t = dict.common.privacy;

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 mx-auto text-slate-900 mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{t.title}</h1>
          <p className="text-slate-600">Última atualização: {t.last_updated}</p>
        </div>

        <article className="prose prose-slate max-w-none space-y-6">
          {t.sections.map((section, idx) => (
            <section key={idx} className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <div className="text-slate-700 leading-7 space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
          <p className="text-slate-600 text-sm">
            {t.contact_text}
          </p>
        </div>
      </div>
    </div>
  );
};




