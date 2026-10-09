import { useState } from 'react'
import { Button } from './lib/shadcn/button'

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <h1 className="text-4xl font-bold text-foreground">Hello, world</h1>
      <Button onClick={toggle}>
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </Button>
    </div>
  )
}
