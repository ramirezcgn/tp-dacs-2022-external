/* eslint-disable @typescript-eslint/no-var-requires */
const { fileURLToPath } = require('url');

// export default
module.exports = (path, options) => {
  let newPath = path;
  if (newPath.startsWith('file://')) {
    newPath = fileURLToPath(newPath);
  }
  return options.defaultResolver(newPath, options);
};
