import { Plugin } from "vite"
import vue from "@vitejs/plugin-vue"
import { configHtmlPlugin } from "./plugin/html"

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue()]

  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  return vitePlugins
}
