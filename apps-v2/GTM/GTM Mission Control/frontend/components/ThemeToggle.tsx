import { useEffect, useId, useState } from 'react'
import { Moon } from 'lucide-react'
import { Label } from '../lib/shadcn/label'
import { Switch } from '../lib/shadcn/switch'

export default function ThemeToggle() {
  const id = useId()
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const root = document.documentElement
    const syncAppearance = () => setIsDark(root.classList.contains('dark'))
    // Keep the switch in sync with changes from the preview toolbar or system.
    const observer = new MutationObserver(syncAppearance)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    syncAppearance()
    return () => observer.disconnect()
  }, [])

  function changeAppearance(checked: boolean) {
    document.documentElement.classList.toggle('dark', checked)
    setIsDark(checked)
  }

  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-lg border border-border bg-background px-3 py-2 text-foreground">
      <Label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-xs font-medium">
        <Moon className="h-4 w-4" aria-hidden="true" />
        <span>Dark mode</span>
      </Label>
      <Switch id={id} checked={isDark} onCheckedChange={changeAppearance} />
    </div>
  )
}
