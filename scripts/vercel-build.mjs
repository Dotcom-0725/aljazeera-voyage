import { build } from 'vite';

try {
  await build();
  console.log('Vercel custom build completed successfully.');
} catch (error) {
  console.error('Vercel custom build failed:', error);
  process.exit(1);
}
