import type { App } from 'vue'

/**
 * 用于自动注册 plugins 文件夹下的插件
 *
 * @param {App} app
 */
export const setupPlugins = (app: App) => {
  const imports = import.meta.glob<{ default: (app: App) => void }>(
    ['../../plugins/*.{ts,js}', '../../plugins/*/index.{ts,js}'],
    {
      eager: true
    }
  )

  const importPaths = Object.keys(imports).sort()

  importPaths.forEach((path) => imports[path].default?.(app))
}
