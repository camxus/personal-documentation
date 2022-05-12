import React from 'react';
// import { within, userEvent } from '@storybook/testing-library';

import { Page } from './VSCode';

export default {
  title: 'Documentation/Visual Studio Code',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const VisualStudioCode = (args) => <Page {...args} />;

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedOut = APICalls.bind({});

// export const LoggedIn = APICalls.bind({});
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
