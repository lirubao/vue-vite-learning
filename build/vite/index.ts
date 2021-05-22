import { Plugin } from "vite"
import vue from "@vitejs/plugin-vue"
import { configHtmlPlugin } from "./plugin/html"
import { configStyleImportPlugin } from "./plugin/styleImport"

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue()]

  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  vitePlugins.push(configStyleImportPlugin(isBuild))

  return vitePlugins
}
