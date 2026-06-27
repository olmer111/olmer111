import path from 'path';
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';

const OUTPUT_DIR = path.join(process.cwd(), 'out');
const ENTRY_POINT = path.join(process.cwd(), 'src', 'index.ts');

async function render(compositionId: string, outputFileName: string, props?: Record<string, unknown>) {
  console.log(`Bundling project...`);
  const bundled = await bundle({
    entryPoint: ENTRY_POINT,
    webpackOverride: (config) => config,
  });

  console.log(`Selecting composition: ${compositionId}`);
  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
    inputProps: props ?? {},
  });

  const outputPath = path.join(OUTPUT_DIR, outputFileName);
  console.log(`Rendering to ${outputPath}...`);

  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: 'h264',
    outputLocation: outputPath,
    inputProps: props ?? {},
    onProgress: ({ progress }) => {
      process.stdout.write(`\rProgress: ${Math.round(progress * 100)}%`);
    },
  });

  console.log(`\nDone! Video saved to: ${outputPath}`);
}

const [, , compositionId = 'HelloWorld', outputFile = 'output.mp4', ...rawProps] = process.argv;

const inputProps = rawProps.length > 0 ? JSON.parse(rawProps.join(' ')) : undefined;

render(compositionId, outputFile, inputProps).catch((err) => {
  console.error(err);
  process.exit(1);
});
