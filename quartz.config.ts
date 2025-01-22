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
          light: "#FFFCF0", /** This is for the main background (paper) */
          lightgray: "#F2F0E5", /** This changes search bar (base-50) */
          gray: "#878580", /** This changes date color (base-500) */
          darkgray: "#100F0F", /** This changes text color (black) */
          dark: "#6F6E69", /** This changes site headers color (base-600) */
          secondary: "#24837B", /** This changes links (blue-600) */
          tertiary: "#B7B5AC", /** Keeping as placeholder (customizable) */
          highlight: "rgba(143, 159, 169, 0.15)", /** This changes the color around links (muted neutral) */
          textHighlight: "#AD8301", /** Highlight text (yellow-600) */
        },
        darkMode: {
          light: "#1B1E20", /** This is for the main background (deep gray tone) */
          lightgray: "#2F3236", /** This changes search bar (dark neutral) */
          gray: "#646464", /** This changes date color (base-500, similar tone for contrast) */
          darkgray: "#D4D4D4", /** This changes text color (light gray for readability) */
          dark: "#E6E4D9", /** This changes site headers color (base-100) */
          secondary: "#24837B", /** This changes links (blue-600 adjusted for dark mode) */
          tertiary: "#5E409D", /** Placeholder, purple-600 can be used */
          highlight: "rgba(143, 159, 169, 0.15)", /** This changes the color around links (muted neutral, consistent) */
          textHighlight: "#A02F6F", /** Highlight text (magenta-600) */
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
