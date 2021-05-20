import type { ConfigEnv, UserConfig } from "vite"
import { loadEnv } from "vite"
import { createVitePlugins } from "./build/vite"
import { wrapperEnv, getRootPath } from "./build/utils"
import { createProxy } from "./build/vite/proxy"

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === "build"
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PROXY, VITE_PUBLIC_PATH } = viteEnv

  return {
    base: VITE_PUBLIC_PATH,
    root,
    server: {
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
      cors: true
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
