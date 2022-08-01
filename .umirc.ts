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
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  description: '@Chongyi Xu, 2022',
  base: process.env.NODE_ENV === 'production' ? '/mas-notebook' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/mas-notebook/' : '/',
  // more config: https://d.umijs.org/config
  ...ghPagesPlugin,
});
