// gta6-clipper-01 entrypoint (Node 22, standard library only).
//
// The entry is the video itself, not this program: the house reads the
// YouTube video named in VIDEO.json and ranks it by its views. For this
// entry that video is the 21-second vertical Short "A jet over the highway"
// (clip.mp4 in this repository), cut from Rockstar's GTA VI Trailer 2.
// All this program does is hand VIDEO.json over — it copies the file from
// the repository root into the output directory, where the gate picks it up.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
