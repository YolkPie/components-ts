const custom = require('./webpack.common.config.js')
module.exports = {
  // stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-events/register',
    '@storybook/addon-cssresources/register',
    '@storybook/addon-storysource',
    '@storybook/addon-links/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-options/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    }
  }
}
