import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "Async Task Helper",
  description: "Execute commands in multiple directories at once.",
  theme: defaultTheme({
    navbar: ["/", "/get-started", { text: "Guide", link: "/guide/" }],
    sidebar: {
      "/": [
        "",
        "get-started",
        {
          text: "Guide",
          collapsible: true,
          link: "/guide/", // Makes Guide clickable
          children: [
            {
              text: "v1",
              collapsible: true,
              prefix: "/guide/v1/",
              children: [
                "for-each", // points to /guide/v1/for-each.md
                "configuration", // points to /guide/v1/configuration.md
              ],
            },
            {
              text: "v2",
              collapsible: true,
              prefix: "/guide/v2/",
              children: [
                "for-each", // points to /guide/v2/for-each.md
                "configuration", // points to /guide/v2/configuration.md
              ],
            },
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
