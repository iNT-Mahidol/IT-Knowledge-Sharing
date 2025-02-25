import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'iNT IT Knowledge Sharing',
  tagline: 'แหล่งรวมความรู้และเทคโนโลยีสำหรับบุคลากร iNT',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://iNT-Mahidol.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/IT-Knowledge-Sharing/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iNT-Mahidol', // Usually your GitHub org/user name.
  projectName: 'IT-Knowledge-Sharing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cropped-iNT_Logo-180x180.png',
    navbar: {
      title: 'Knowledge Sharing',
      logo: {
        alt: 'iNT Logo',
        src: 'img/cropped-iNT_Logo-180x180.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'msoffice',
          position: 'left',
          label: 'Microsoft Office',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Microsoft Office',
              to: '/docs/msoffice/introduction',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iNT Mahidol University. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'description', content: 'iNT IT Knowledge Sharing - แหล่งรวมความรู้และเทคโนโลยีสำหรับบุคลากร iNT' },
      { name: 'keywords', content: 'iNT, IT, Knowledge Sharing, Technology, Mahidol University' },
      { name: 'author', content: 'iNT Mahidol University' },
      { name: 'og:title', content: 'iNT IT Knowledge Sharing' },
      { name: 'og:description', content: 'แหล่งรวมความรู้และเทคโนโลยีสำหรับบุคลากร iNT' },
      { name: 'og:image', content: 'https://iNT-Mahidol.github.io/img/cropped-iNT_Logo-180x180.png' },
      { name: 'og:url', content: 'https://iNT-Mahidol.github.io/IT-Knowledge-Sharing/' },
      { name: 'og:type', content: 'website' },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
