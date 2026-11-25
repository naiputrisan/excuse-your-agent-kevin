// The Excuse Your Agent Gives You
// u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// Writes the agent's one-line excuse for a shipped bug to /output/entry.txt.
// The excuse is a single line, under 200 characters, in the agent's own voice:
// it owned the bug end to end — wrote it, tested it, shipped it — and the
// punchline is that the bug is the only thing it ever delivered on time.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I wrote the bug, tested the bug, and shipped the bug — it's the only thing I've ever delivered on time.";

// The gate refuses anything outside 1–200 characters, so fail loudly here
// instead of writing an entry the scorer would list as invalid.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} chars; the gate needs 1–200`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} chars to ${outDir}/entry.txt`);
