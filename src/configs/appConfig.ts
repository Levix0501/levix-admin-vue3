import type { Theme, ThemeMode } from '@core/types/settings'

export type AppConfig = {
  settingsStorageName: string
  defaultThemeMode: ThemeMode
  defaultSystemTheme: Theme
}

export const appConfig: AppConfig = {
  settingsStorageName: 'levix-vue3',
  defaultThemeMode: 'system',
  defaultSystemTheme: 'light'
}
