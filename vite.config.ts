import { UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm';
import path from 'path';

const options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

export default defineConfig(async () => {
  const viteConfig: UserConfig = {
    plugins: [react(), generouted(), {enforce: 'pre', ...mdx(options)}],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }

  return viteConfig
})
