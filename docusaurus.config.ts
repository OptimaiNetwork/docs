import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OptimAI Network Docs',
  tagline: 'Mine Data. Fuel AI. Earn Rewards.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https:/docs.optimai.network/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OptimaiNetwork', // Usually your GitHub org/user name.
  projectName: 'OptimAI Network Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-E46T1HJVX5'
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WZVXXH7L'
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          // routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/optimainetwork/docs/tree/main/',
        },
        theme: {
          customCss: './src/styles/index.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    algolia: {
      appId: '21H8NIK27E',
      apiKey: '2764b00b42701493a032fe50aab6c8f4',
      indexName: 'optimai',

      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      logo: {
        alt: 'OptimAI Network Logo',
        src: 'img/branding/optimai-documentation-logo.svg',
      },
      items: [
        {
          href: 'https://github.com/optimainetwork/docs',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__item--github',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/branding/optimai-documentation-logo.svg',
        alt: 'OptimAI Network Logo',
        href: 'https://optimai.network',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/OptimAINetwork',
            },
            {
              label: 'X',
              href: 'https://x.com/OptimaiNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://optimai.network/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/optimainetwork/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OptimAI Network.`,
    },
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'OptimAI Network Docs' },
      { name: 'twitter:description', content: 'Official documentation for the OptimAI Network.' },
      { name: 'twitter:image', content: 'https://docs.optimai.network/img/social-card.png' },
  
      { property: 'og:title', content: 'OptimAI Network Docs' },
      { property: 'og:description', content: 'Official documentation for the OptimAI Network.' },
      { property: 'og:image', content: 'https://docs.optimai.network/img/social-card.png' },
      { property: 'og:url', content: 'https://docs.optimai.network' },
    ],
  } satisfies Preset.ThemeConfig,
}

export default config
