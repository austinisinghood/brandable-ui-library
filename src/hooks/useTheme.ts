// useTheme.ts
import { useEffect, useState } from 'react'

import { themeStore } from '../store/themeStore'

export function useTheme() {
  const { theme } = themeStore()
  const [styles, setStyles] = useState<any>(`../styles/themes/default/default.scss`)

  useEffect(() => {
    async function loadStyle() {
      const style = await import(`../styles/themes/${theme}/theme.scss`)
      setStyles(style)
    }

    loadStyle()
  }, [theme])

  return {
    theme,
    styles,
  }
}
