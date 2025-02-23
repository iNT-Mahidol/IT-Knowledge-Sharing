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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Knowledge Hub',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
