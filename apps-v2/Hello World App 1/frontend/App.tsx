import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from './lib/shadcn/button'
import './appTheme.css'

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background text-foreground">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="absolute right-4 top-4"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      <h1 className="text-4xl font-bold tracking-tight">Hello, World!</h1>
    </main>
  )
}
