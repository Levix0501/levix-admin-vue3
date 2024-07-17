// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--el-color-primary)'
    }
  },
  preflights: [
    {
      getCSS: () => `
      * {
        border-color: var(--el-border-color);
      }
    `
    }
  ]
})
