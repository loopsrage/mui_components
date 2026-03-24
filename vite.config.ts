import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';
import { esmExternalRequirePlugin } from 'vite';

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json', insertTypesEntry: true }), esmExternalRequirePlugin()],
  optimizeDeps: {
    exclude: ['fsevents'], // Add this line
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
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'components',
      fileName: 'index',
      formats: ['es']
    },
    rolldownOptions: {
      platform: "browser",
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        /^react\//,
        /^react-dom\//,
        '@mui/material',
        /@mui\/material\/.*/,
        '@mui/icons-material',
        /@mui\/icons-material\/.*/,
        '@emotion/react',
        '@emotion/styled',
        /@emotion\/.*/,
        // Externalize these because they are pulling in CJS/Require
        'lexical',
        /^@lexical\//,
        'mui-image',
        'react-dropzone',
        'react-icons',
        /^react-icons\//
      ],
      output: {
        externalLiveBindings: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
      },
    },
  },
  test: {
    testTimeout: 1000000,
    fileParallelism: false,
    server: {
      deps: {
        inline: [/@lexical\/react/] // Force Vitest to process these as ESM
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