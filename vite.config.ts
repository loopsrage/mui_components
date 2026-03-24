import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';
import { esmExternalRequirePlugin } from 'vite';

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json', insertTypesEntry: true }), esmExternalRequirePlugin(),
    {
      name: 'kill-require-shim',
      enforce: 'pre',
      resolveId(id) {
        // If it's any of our problematic libs, force it to be a clean external
        if (
            id === 'react' ||
            id.startsWith('react/') ||
            id.includes('lexical') ||
            id.includes('@mui') ||
            id.includes('@emotion')
        ) {
          return { id, external: true, moduleSideEffects: false };
        }
      }
    }],
  optimizeDeps: {
    exclude: ['fsevents', 'use-sync-external-store'], // Add this line
    include: [
      '@lexical/react/LexicalComposer',
      '@lexical/react/LexicalRichTextPlugin',
      '@lexical/react/LexicalContentEditable',
      '@lexical/react/LexicalErrorBoundary',
      '@lexical/react/LexicalComposerContext',
      'lexical',
      '@lexical/html',
      '@lexical/utils'
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),

    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'components',
      fileName: 'index',
      formats: ['es']
    },
    rolldownOptions: {
      shimMissingExports: false,
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        /^react\//,
        /^react-dom\//,
        'lexical',
        'use-sync-external-store/shim',
        'use-sync-external-store/shim/index.js',
        'use-sync-external-store',
        // BROAD CATCH-ALLS FOR ROLIDOWN:
        '@lexical/react',
        /^@lexical\//,
        '@mui/material',
        '@mui/material/utils',
        '@mui/icons-material',
        "@mui/icons-material/BugReport",
        '@mui/icons-material/Description',
        "@mui/icons-material/Download",
        "@mui/icons-material/Close",
        "@mui/icons-material/CloudUpload",
        "@mui/icons-material/Send",
        "@mui/icons-material/SaveAlt",
        '@mui/icons-material/Refresh',
        /^@mui\/icons-material/, // This covers all sub-icons like BugReport
        /^@mui\/material/, // This covers all sub-components and Unstable_
        '@emotion/react',
        '@emotion/styled',
        /^@emotion\//,
        'mui-image',
        'mui-tiptap',
        'react-dropzone',
        'react-icons',
        /^react-icons\//
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          'use-sync-external-store/shim': 'React',
          'use-sync-external-store/shim/index.js': 'React',
        },
      },
    },
  },
  test: {
    testTimeout: 1000000,
    fileParallelism: false,
    server: {
      deps: {
        inline: [/@lexical\/react/,
          /@mui\/x-data-grid/,
          /@mui\/material/,
          'use-sync-external-store'] // Force Vitest to process these as ESM
      }
    },
    browser: {
      enabled: true,
      provider: playwright(
          {
            launchOptions: {
              args: ['--remote-debugging-port=9222'],
            },
          }
      ),
      instances: [
          {
            browser: "chromium",
          }
      ],
    }
  }
});