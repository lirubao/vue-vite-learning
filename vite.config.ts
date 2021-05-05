import { ConfigEnv, loadEnv, UserConfig } from "vite"
import { createVitePlugins } from "./build/vite"
import { wrapperEnv, getRootPath } from "./build/utils"

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
        "@": getRootPath("src")
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
