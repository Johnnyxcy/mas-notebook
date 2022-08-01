import { defineConfig } from 'dumi';

const ghPagesPlugin =
  process.env.NODE_ENV === 'production'
    ? {
        ghPages: {
          useCDN: true,
        },
      }
    : {};

export default defineConfig({
  title: 'mas-notebook',
  favicon:
    'https://raw.githubusercontent.com/Johnnyxcy/mas-notebook/main/public/assets/icon.png',
  logo: 'https://raw.githubusercontent.com/Johnnyxcy/mas-notebook/main/public/assets/icon.png',
  outputPath: 'docs-dist',
  description: '@Chongyi Xu, 2022',
  base: process.env.NODE_ENV === 'production' ? '/mas-notebook' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/mas-notebook/' : '/',
  // more config: https://d.umijs.org/config
  ...ghPagesPlugin,
});
