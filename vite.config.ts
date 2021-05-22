import { ConfigEnv, loadEnv, UserConfig } from "vite"
import { createVitePlugins } from "./build/vite"
import { wrapperEnv, getRootPath } from "./build/utils"

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === "serve"
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT } = viteEnv
  console.log(isBuild)

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
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
