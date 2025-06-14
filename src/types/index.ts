// Tipos globales para el proyecto
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    url: string;
    twitter?: string;
  };
  keywords: string[];
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

// Tipos para Bootstrap
declare global {
  interface Window {
    bootstrap: {
      Carousel: new (element: Element, options?: any) => any;
    };
  }
}
