import { Plugin } from "vite"
import styleImport from "vite-plugin-style-import"

export function configStyleImportPlugin(isBuild: boolean): Plugin {
  if (!isBuild) return { name: "" }
  const pwaPlugin = styleImport({
    libs: [
      {
        ensureStyleFile: true,
        libraryName: "ant-design-vue",
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`
        }
      }
    ]
  })
  return pwaPlugin
}
