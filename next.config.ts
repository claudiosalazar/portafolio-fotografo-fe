import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },

  // Configuración de Sass
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@use "src/styles/abstracts/variables" as *;`,
    quietDeps: true, // Suprime warnings de SCSS en dependencias
    silenceDeprecations: ['legacy-js-api'], // Suprime warnings de deprecación
    logger: {
      warn: () => {}, // Suprime todos los warnings de SASS
    },
  },
};

export default nextConfig;