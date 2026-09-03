import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from './lib/shadcn/button'

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <h1 className="text-4xl font-bold text-foreground">Hello, world!</h1>
      <Button variant="outline" onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        {isDark ? 'Light mode' : 'Dark mode'}
      </Button>
    </div>
  )
}
