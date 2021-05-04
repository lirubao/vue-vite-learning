declare interface ViteEnv {
  VITE_PORT: number
  VITE_GLOB_APP_TITLE: string
}

declare type Recordable<T = any> = Record<string, T>
