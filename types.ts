export type Lang = 'en' | 'pt' | 'es';

export interface ToolSEO {
  seo_title: string;
  seo_content: string[];
}

export interface ToolConfig extends ToolSEO {
  name: string;
  description: string;
  title: string;
  [key: string]: any; // Allows for specific labels per tool
}

export interface Dictionary {
  common: {
    title: string;
    footer_text: string;
    nav: {
      home: string;
    };
    categories: {
      dev: string;
      text: string;
      design: string;
      math: string;
      date: string;
      security: string;
      seo: string;
      marketing: string;
      health: string;
      network: string;
    };
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    tools_section_title: string;
  };
  tools: {
    [key: string]: ToolConfig;
  };
}

export interface Tool {
  id: string;
  icon: string;
  nameKey: string;
  href: string;
  category: string;
}