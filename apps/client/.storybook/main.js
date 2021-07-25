const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/features/**/*.stories.mdx', '../src/features/**/*.stories.@(js|jsx|ts|tsx)']);

module.exports = rootMain;
