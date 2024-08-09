import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://nidhi.com/icon.svg',
    brandTitle: 'Nidhi Nakrani Components',
    brandUrl: 'https://nidhi.com',
  },
});
