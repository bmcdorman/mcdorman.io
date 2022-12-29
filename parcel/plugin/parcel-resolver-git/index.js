const { Resolver } = require('@parcel/plugin');
const path = require('path');

exports["default"] = new Resolver({
  async resolve({ specifier }) {
    if (specifier !== 'git-info') return null;

    const commitHash = require('child_process').execSync('git rev-parse --short=8 HEAD').toString().trim();
    
    return {
      filePath: path.join(__dirname, 'git-info.js'),
      code: `export default { commitHash: "${commitHash}" };`
    };
  }
});