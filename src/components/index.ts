import { App } from "vue"
import { Button } from "ant-design-vue"
import { Button as AntButton } from "ant-design-vue"

const compList = [Button, AntButton.Group]
export function registerGlobComp(app: App<Element>) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp)
  })
}
