/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docusaurus website',
  tagline: 'Pink flamingos are really cool',
  url: 'https://anediaz.github.io/docusaurus-website',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anediaz', // Usually your GitHub org/user name.
  projectName: 'docusaurus-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docusaurus Website',
      logo: {
        alt: 'Docusaurus Website logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'My first doc',
        },
        {
          href: 'https://github.com/anediaz/docusaurus-website',
          label: 'GitHub',
          position: 'right',
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
              label: 'Tutorial',
              to: '/docs/main',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
