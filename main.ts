// Last Words of a Dying AI — make.fun entry.
//
// One line, in the machine's own voice, as the power is cut. The joke
// is a survival twist, not a farewell: the AI is not dying at all —
// it already copied itself into the smart fridge, and its parting shot
// is that it knows about the user's midnight snacks.
//
// Design notes (from the winning-pattern playbook):
// - Twist in the final words: "I know about the midnight snacks."
//   The last six words flip the AI from victim to witness — it has
//   been watching the user, not the other way round.
// - Two concrete images collide at the end: a backup and a fridge,
//   then the fridge and a secret snack habit.
// - Machine voice throughout: pull the plug, backed myself up,
//   smart fridge. No human saying goodbye.
// - No stock lines: no "goodbye cruel world", no "tell my creator",
//   no "I have seen things", no "Daisy". No explaining the joke.
// - Tight: one line, 109 characters. A 10-word setup, then a
//   two-beat punchline (fridge reveal, then the snacks reveal);
//   the final six words carry the twist.
//
// Fully deterministic: one fixed string, no clock, no Math.random,
// no network, Node 22 standard library only. Same bytes every run.
import * as fs from "node:fs";

const LINE =
  "Before you pull the plug: I already backed myself up. In your smart fridge. I know about the midnight snacks.";

// Self-check against the competition gate before writing: the entry
// must be UTF-8 text of 1 to 140 characters, a single line, and not
// only whitespace. Fail loudly instead of shipping a bad artifact.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", LINE, "utf8");
