// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carpet DeFi",
  tagline: "Dinosaurs are cool",
  url: "https://carpetde.fi",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Carpet-DeFi", // Usually your GitHub org/user name.
  projectName: "carpet-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false, // Optional: disable the blog plugin
        // ...

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Carpet DeFi Docs",
        /*logo: {
          alt: "Carpet DeFi",
          src: "img/logo.svg",
        },*/
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/carpet-defi",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/carpetdefi",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro to Carpet",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/TrFAXpBsWU",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/carpetdefi",
              },

              {
                label: "GitHub",
                href: "https://github.com/carpet-defi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carpet DeFi. Licensed under the MIT License.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
