import { appConfig } from '@config/appConfig'
import type { Settings } from '../types/settings'
import { isDarkTheme } from '../utils/theme'

export const useSettings = defineStore('settings', () => {
  const _settings = useLocalStorage<Settings>(appConfig.settingsStorageName, {
    themeMode: appConfig.defaultThemeMode,
    systemTheme: appConfig.defaultSystemTheme,
    primaryColor: appConfig.primaryColor
  })
  const isSystemThemeDark = usePreferredDark()
  const isDark = useDark({ disableTransition: false })
  const brandColor = useCssVar('--el-color-primary')

  watch(
    _settings,
    ({ themeMode, systemTheme, primaryColor }) => {
      isDark.value = isDarkTheme(themeMode, systemTheme)
      brandColor.value = primaryColor
    },
    {
      immediate: true,
      deep: true
    }
  )

  watch(
    isSystemThemeDark,
    (val) => {
      _settings.value.systemTheme = val ? 'dark' : 'light'
    },
    {
      immediate: true
    }
  )

  const updateSettings = (newVal: Partial<Settings>) => {
    Object.assign(_settings.value, newVal)
  }

  const settings = computed(() => _settings.value)

  return { settings, updateSettings }
})
