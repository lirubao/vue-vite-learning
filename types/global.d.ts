declare interface ViteEnv {
  VITE_PORT: number
  VITE_GLOB_APP_TITLE: string
  VITE_PUBLIC_PATH: string
  VITE_PROXY: [string, string][]
}

declare type Recordable<T = any> = Record<string, T>
