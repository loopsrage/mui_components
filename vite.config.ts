import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'components',
      fileName: 'index',
    },
    rolldownOptions: {
      // 1.2.10: Externalize peer dependencies so they aren't bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    testTimeout: 1000000,
    fileParallelism: false,
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