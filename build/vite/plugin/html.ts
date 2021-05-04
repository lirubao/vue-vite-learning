/**
 * 用于最小化和使用index.html中的ejs模板语法的插件。
 */
import { Plugin } from "vite"
import html from "vite-plugin-html"

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE } = env

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      injectData: {
        title: VITE_GLOB_APP_TITLE
      }
    }
  })
  return htmlPlugin
}
