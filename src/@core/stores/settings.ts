import { appConfig } from '@/configs/appConfig'
import type { Settings } from '../types/settings'
import { isDarkTheme } from '../utils/theme'

export const useSettings = defineStore('settings', () => {
  const settings = useLocalStorage<Settings>(appConfig.settingsStorageName, {
    themeMode: appConfig.defaultThemeMode,
    systemTheme: appConfig.defaultSystemTheme
  })
  const isSystemThemeDark = usePreferredDark()
  const isDark = useDark()

  watch(
    settings,
    ({ themeMode, systemTheme }) => {
      isDark.value = isDarkTheme(themeMode, systemTheme)
    },
    {
      immediate: true,
      deep: true
    }
  )

  watch(
    isSystemThemeDark,
    (val) => {
      settings.value.systemTheme = val ? 'dark' : 'light'
    },
    {
      immediate: true
    }
  )

  const updateSettings = (_settings: Partial<Settings>) => {
    Object.assign(settings.value, _settings)
  }

  return { settings, updateSettings }
})
