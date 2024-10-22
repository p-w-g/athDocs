import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "Async Task Helper",
  description: "Task runner that executes commands in parallel",
  theme: defaultTheme({
    navbar: ["/", "/get-started", { text: "Guide", link: "/guide/" }],
    sidebar: {
      "/": [
        "",
        "get-started",
        {
          text: "Guide",
          collapsible: true,
          expanded: true,
          path: "/guide/",
          prefix: "/guide/",
          children: ["README.md", "for-each", "configuration"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
