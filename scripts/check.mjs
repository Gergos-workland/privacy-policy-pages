import { access, readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const requiredFiles = [
  "README.md",
  "CHANGELOG.md",
  ".gitignore",
  ".nojekyll",
  "index.html",
  "package.json",
  "passsmith-studio/index.html",
  "passsmith-studio/en/index.html",
  "passsmith-studio/hu/index.html",
  "passsmith-studio/de/index.html",
  "passsmith-studio/assets/styles.css",
  "passsmith-studio/brand/passsmith-wordmark.png"
];

for (const file of requiredFiles) {
  await access(file);
}

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
assert.equal(packageJson.name, "privacy-policy-pages");
assert.equal(packageJson.version, "1.0.0");
assert.equal(packageJson.scripts.test, "node scripts/check.mjs");

const gitignore = await readFile(".gitignore", "utf8");
assert.match(gitignore, /AGENTS\.md/);
assert.match(gitignore, /\*\*\/AGENTS\.md/);

const readme = await readFile("README.md", "utf8");
assert.match(readme, /privacy-policy-pages\/passsmith-studio\/en\//);
assert.match(readme, /GitHub Pages/);

const home = await readFile("index.html", "utf8");
assert.match(home, /Privacy Policy Pages/);
assert.match(home, /passsmith-studio/);

const passsmithHome = await readFile("passsmith-studio/index.html", "utf8");
const passsmithEn = await readFile("passsmith-studio/en/index.html", "utf8");
const passsmithHu = await readFile("passsmith-studio/hu/index.html", "utf8");
const passsmithDe = await readFile("passsmith-studio/de/index.html", "utf8");

assert.match(passsmithHome, /PassSmith Studio Privacy Policy/);
assert.match(passsmithEn, /does not collect, sell, share, transmit/);
assert.match(passsmithEn, /Generated credentials are not sent/);
assert.match(passsmithEn, /Remote Code/);
assert.match(passsmithHu, /Adatvédelmi irányelvek/);
assert.match(passsmithHu, /nem gyűjt, nem értékesít/);
assert.match(passsmithDe, /Datenschutzerklärung/);
assert.match(passsmithDe, /erhebt, verkauft, teilt/);

for (const source of [readme, home, passsmithHome, passsmithEn, passsmithHu, passsmithDe]) {
  assert.doesNotMatch(source, /SecurePass|SECUREPASS|securepass/);
}

console.log("Privacy policy pages checks passed.");
