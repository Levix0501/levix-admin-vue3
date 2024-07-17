import LogoIcon from '@core/components/LogoIcon.vue'
import type { Theme, ThemeMode } from '@core/types/settings'
import type { Component } from 'vue'

export type AppConfig = {
  logo: Component
  settingsStorageName: string
  defaultThemeMode: ThemeMode
  defaultSystemTheme: Theme
  primaryColor: string
  primaryColorPresets: string[]
}

export const appConfig: AppConfig = {
  logo: LogoIcon,
  settingsStorageName: 'levix-vue3',
  defaultThemeMode: 'system',
  defaultSystemTheme: 'light',
  primaryColor: '#7367F0',
  primaryColorPresets: [
    '#7367F0',
    '#1677FF',
    '#722ED1',
    '#13C2C2',
    '#52C41A',
    '#EB2F96',
    '#F5222D',
    '#FA8C16',
    '#FADB14',
    '#FA541C',
    '#2F54EB',
    '#FAAD14',
    '#A0D911',
    '#000000'
  ]
}
