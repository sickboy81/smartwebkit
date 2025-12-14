import React from 'react';
import { Dictionary } from '../types';

export const Footer: React.FC<{ dict: Dictionary }> = ({ dict }) => {
  return (
    <footer className="border-t py-6 md:py-0 border-slate-200 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-5xl px-4 mx-auto">
        <p className="text-center text-sm leading-loose text-slate-500 md:text-left">
          {dict.common.footer_text}
        </p>
      </div>
    </footer>
  );
};
