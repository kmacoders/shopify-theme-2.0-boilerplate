const htmlReplace = require('./html');
const classReplace = require('./className');

module.exports = {
  allReplace: [
    ...classReplace.className,
    ...htmlReplace.html,
  ],
};
