import React from 'react';
import { Dictionary, Lang } from '../types';
import { Link } from 'react-router-dom';

interface FooterProps {
  dict: Dictionary;
  lang: Lang;
}

export const Footer: React.FC<FooterProps> = ({ dict, lang }) => {
  return (
    <footer className="border-t py-6 md:py-0 border-slate-200 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-5xl px-4 mx-auto">
        <p className="text-center text-sm leading-loose text-slate-500 md:text-left">
          {dict.common.footer_text}
        </p>
        {dict.common.footer_links && (
          <div className="flex gap-4 text-sm flex-wrap justify-center">
            <Link 
              to={`/${lang}/terms-of-service`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {dict.common.footer_links.terms}
            </Link>
            <Link 
              to={`/${lang}/privacy-policy`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {dict.common.footer_links.privacy}
            </Link>
            <a 
              href="mailto:contato@smartwebkit.net"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {dict.common.footer_links.contact || "Contato"}
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};
