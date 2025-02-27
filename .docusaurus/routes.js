import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '06c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1e2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c6a'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture',
                component: ComponentCreator('/docs/architecture', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/-optimai-node',
                component: ComponentCreator('/docs/category/-optimai-node', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/-overview',
                component: ComponentCreator('/docs/category/-overview', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faqs',
                component: ComponentCreator('/docs/faqs', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/intro',
                component: ComponentCreator('/docs/introduction/intro', '51d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/problem',
                component: ComponentCreator('/docs/introduction/problem', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/solution',
                component: ComponentCreator('/docs/introduction/solution', 'b1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/litepaper',
                component: ComponentCreator('/docs/litepaper', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/opi-token',
                component: ComponentCreator('/docs/opi-token', '666'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/built-in-browser',
                component: ComponentCreator('/docs/optimai-node/built-in-browser', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/how-node-working',
                component: ComponentCreator('/docs/optimai-node/how-node-working', '5bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/how-node-working',
                component: ComponentCreator('/docs/optimai-node/how-node-working', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/node-intro',
                component: ComponentCreator('/docs/optimai-node/node-intro', '0f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/platforms-versions',
                component: ComponentCreator('/docs/optimai-node/platforms-versions', '7d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/optimai-node/setup-requirements',
                component: ComponentCreator('/docs/optimai-node/setup-requirements', '4c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roadmap',
                component: ComponentCreator('/docs/roadmap', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/services',
                component: ComponentCreator('/docs/services', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
