import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "✒️ Oruntak Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Roboto Slab",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F2F0E5", /** This is for the main background */
          lightgray: "#e5e5e5", /** This changes search bar*/
          gray: "#878580", /** This changes date color*/
          darkgray: "#4e4e4e", /** This changes text color*/
          dark: "#2b2b2b", /** This changes site headers color*/
          secondary: "#205EA6", /** This changes links*/
          tertiary: "#B7B5AC",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
          boldText: "#ff5733",
        },
        darkMode: {
          light: "#12253B", /** This is for the main background */
          lightgray: "#163B66", /** This changes search bar*/
          gray: "#646464", /** This changes date color*/
          darkgray: "#d4d4d4", /** This changes text color*/
          dark: "#ebebec", /** This changes site headers color*/
          secondary: "#4385BE", /** This changes links*/
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
