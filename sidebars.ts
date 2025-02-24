import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  msoffice: [
    {
      type: 'doc',
      id: 'msoffice/introduction',
      label: 'Introduction'
    },
    {
      type:'category',
      label:'Excel',
      items:[
        {
          type: 'doc',
          id: 'msoffice/excel/flashfill',
          label: 'Flash Fill'
        }
      ]
    },
    {
      type:'category',
      label:'Word',
      items:[
        {
          type: 'doc',
          id: 'msoffice/word/mailmerge',
          label: 'Mail Merge'
        }
      ]
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
