import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';
import { withCssResources } from '@storybook/addon-cssresources';
import centered from '@storybook/addon-centered/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.js
addDecorator(
  withInfo({
    inline: false
  })
);
addDecorator(withCssResources);
addDecorator(centered);
addDecorator(withA11y);

addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    panelPosition: 'right',
    theme: create({
      base: 'light',
      brandTitle: 'PAIMAI UI',
      brandUrl: 'https://zpsy.xxx.com/',
      gridCellSize: 12
    }),
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true
  },
  viewport: {
    defaultViewport: 'iphonex',
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' }
  ],
  cssresources: [
    {
      id: `bluetheme`,
      code: `<style>body { background-color: lightblue; }</style>`,
      picked: false
    }
  ]
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  const req = require.context('../src/components', true, /.stories.[j|t]sx?/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
