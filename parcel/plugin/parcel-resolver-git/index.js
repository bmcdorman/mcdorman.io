const { Resolver } = require('@parcel/plugin');
const path = require('path');

exports["default"] = new Resolver({
  async resolve({ specifier }) {
    if (specifier !== 'git-info') return null;

    const exec = cmd => require('child_process').execSync(cmd).toString().trim();
    const commitHash = exec('git rev-parse --short=8 HEAD');
    const branch = exec('git rev-parse --abbrev-ref HEAD');

    return {
      filePath: path.join(__dirname, 'git-info.js'),
      code: `export default { commitHash: "${commitHash}", branch: "${branch}" };`
    };
  }
});