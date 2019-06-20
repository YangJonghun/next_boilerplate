import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src', true, /(\/stories\/.*|(\.|\/)(stories|story))\.(jsx?|js?|tsx?|ts?)$/);

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
