import { ConfigEnv, loadEnv, UserConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { createVitePlugins } from "./build/vite"
import { wrapperEnv, getRootPath } from "./build/utils"
import path from "path"

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === "build"
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT } = viteEnv

  return {
    root,
    server: {
      port: VITE_PORT
    },
    resolve: {
      alias: {
        "@": getRootPath("src"),
        comps: getRootPath("src/components")
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
