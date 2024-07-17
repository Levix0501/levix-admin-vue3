import { Laptop2, Moon, Sun } from 'lucide-vue-next'
import type { ThemeMode } from '@core/types/settings'

export const themeChangerItems: { key: ThemeMode; icon: Component; label: string }[] = [
  {
    key: 'light',
    icon: Sun,
    label: 'Light'
  },
  {
    key: 'dark',
    icon: Moon,
    label: 'Dark'
  },
  {
    key: 'system',
    icon: Laptop2,
    label: 'System'
  }
]
