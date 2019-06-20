import { configure } from '@storybook/react';

const req = require.context('../src', true, /(\/stories\/.*|(\.|\/)(stories|story))\.(jsx?|js?|tsx?|ts?)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
