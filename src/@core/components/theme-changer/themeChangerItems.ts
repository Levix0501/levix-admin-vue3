import { Laptop2, Moon, Sun } from 'lucide-vue-next'

export const themeChangeItems: { key: ThemeMode; icon: Component; label: string }[] = [
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
