import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dictionary, Lang } from '../types';
import { Button } from './ui/Button';
import { Languages, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  lang: Lang;
  dict: Dictionary;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, dict }) => {
  const location = useLocation();

  // Helper to switch language path
  const getOppositeLangPath = () => {
    const currentPath = location.pathname;
    // Replace the first segment /en or /pt
    const segments = currentPath.split('/');
    if (segments[1] === 'en') {
      segments[1] = 'pt';
    } else if (segments[1] === 'pt') {
      segments[1] = 'en';
    } else {
      // Default fallback
      return '/en';
    }
    return segments.join('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center px-4 max-w-5xl">
        <div className="mr-4 flex">
          <Link to={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {dict.common.title}
            </span>
          </Link>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              to={`/${lang}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {dict.common.nav.home}
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link to={getOppositeLangPath()}>
            <Button variant="ghost" size="sm" className="gap-2">
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">
                {lang === 'en' ? 'Português' : 'English'}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
