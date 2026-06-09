import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

const gitInfoPlugin = () => ({
  name: 'git-info',
  resolveId(id: string) {
    if (id === 'git-info') return '\0git-info';
  },
  load(id: string) {
    if (id !== '\0git-info') return;
    const commitHash = execSync('git rev-parse --short=8 HEAD').toString().trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    return `export default { commitHash: "${commitHash}", branch: "${branch}" };`;
  },
});

// Handles Parcel's `bundle-text:./foo.md` (inline as string) and `url:./foo.png` (asset URL) schemes
const parcelSchemesPlugin = () => ({
  name: 'parcel-schemes',
  async resolveId(id: string, importer: string | undefined) {
    if (id.startsWith('bundle-text:'))
      return this.resolve(id.replace('bundle-text:', '') + '?raw', importer);
    if (id.startsWith('url:'))
      return this.resolve(id.replace('url:', ''), importer);
  },
});

export default defineConfig({
  plugins: [react(), gitInfoPlugin(), parcelSchemesPlugin()],
  publicDir: 'static',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 1234,
  },
});
