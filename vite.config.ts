import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Configuração específica para produção
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/', // URL base para produção
  plugins: [react()],
  define: {
    // Variáveis de ambiente para produção, se necessário
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    // Configurações de build para produção
    sourcemap: false, // Desativa o sourcemap em produção (opcional)
    minify: 'esbuild', // Minificação do código em produção
    assetsInlineLimit: 4096, // Limita o tamanho dos assets in-line
  },
});
