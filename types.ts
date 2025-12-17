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
    terms?: {
      title: string;
      last_updated: string;
      contact_text: string;
      sections: Array<{
        title: string;
        content: string[];
      }>;
    };
    privacy?: {
      title: string;
      last_updated: string;
      contact_text: string;
      sections: Array<{
        title: string;
        content: string[];
      }>;
    };
    footer_links?: {
      terms: string;
      privacy: string;
    };
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    tools_section_title: string;
    about_title?: string;
    why_choose_title?: string;
    about_content?: string[];
    tools_description?: string;
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