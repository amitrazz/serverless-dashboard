const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const rootPkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf-8'));
const version = rootPkg.version;

const packages = ['frontend', 'backend'];

packages.forEach(pkgName => {
  const pkgPath = path.join(root, pkgName, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`Updated ${pkgName}/package.json to version ${version}`);
});