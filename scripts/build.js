const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const source = fs.readFileSync(path.join(root, "src/index.js"), "utf8");

const transformed = source.replace(
  'require("../package.json")',
  'require("./package.json")'
);

fs.writeFileSync(
  path.join(dist, "index.js"),
  "#!/usr/bin/env node\n" + transformed
);

fs.copyFileSync(
  path.join(root, "package.json"),
  path.join(dist, "package.json")
);

fs.chmodSync(path.join(dist, "index.js"), 0o755);

console.log("Build successful: dist/index.js");
