import type { ReactNode } from 'react'
import { ArrowUpRight, Bell, Building2, ChevronDown, CircleHelp, Command, Crosshair, Layers3, LayoutDashboard, Mail, Radio, Search, Settings2, Sparkles, Target, Users } from 'lucide-react'
import { Button } from '../lib/shadcn/button'
import { Input } from '../lib/shadcn/input'
import { Badge } from '../lib/shadcn/badge'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, href: '#overview', active: true, count: '' },
  { label: 'Target accounts', icon: Building2, href: '#accounts', active: false, count: '124' },
  { label: 'Deal pipeline', icon: Layers3, href: '#pipeline', active: false, count: '48' },
  { label: 'Outreach', icon: Mail, href: '#outreach', active: false, count: '' },
]

export default function WorkspaceShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-border bg-card lg:flex">
        <a href="#overview" className="flex h-[85px] items-center gap-3 px-6" aria-label="GTM Mission Control home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Crosshair className="h-6 w-6" strokeWidth={1.7} /></span>
          <span><span className="block text-[16px] font-bold tracking-tight">GTM<span className="ml-1 font-normal text-muted-foreground">/</span></span><span className="block text-[11px] font-medium tracking-wide text-muted-foreground">MISSION CONTROL</span></span>
        </a>
        <div className="mx-4 mb-8 flex items-center gap-2.5 rounded-lg border border-border bg-background p-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-xs font-bold">A.</span>
          <div className="flex-1"><p className="text-xs font-semibold">Acme workspace</p><p className="mt-0.5 text-[10px] text-muted-foreground">Growth team</p></div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <p className="mb-3 px-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Workspace</p>
        <nav className="space-y-1 px-3" aria-label="Main navigation">
          {navigation.map(({ label, icon: Icon, href, active, count }) => (
            <Button asChild key={label} variant={active ? 'default' : 'ghost'} className={`h-10 w-full justify-start gap-3 px-3 text-[12px] ${active ? 'shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              <a href={href} aria-current={active ? 'page' : undefined}><Icon className="h-4 w-4" strokeWidth={1.7} /><span className="flex-1 text-left">{label}</span>{count && <span className="text-[10px] opacity-70">{count}</span>}</a>
            </Button>
          ))}
        </nav>
        <div className="mx-6 my-6 border-t border-border" />
        <p className="mb-3 px-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Team & resources</p>
        <div className="space-y-1 px-3">
          <Button variant="ghost" className="h-10 w-full justify-start gap-3 px-3 text-xs text-muted-foreground" title="Demo placeholder"><Users />Team members</Button>
          <Button variant="ghost" className="h-10 w-full justify-start gap-3 px-3 text-xs text-muted-foreground" title="Demo placeholder"><Target />Playbooks<Badge variant="outline" className="ml-auto rounded px-1.5 py-0 text-[9px] font-normal">NEW</Badge></Button>
        </div>
        <div className="mt-auto px-4 pb-4 pt-8">
          <div className="mb-5 rounded-xl border border-border bg-background p-4">
            <div className="mb-3 flex items-center gap-2"><Radio className="h-4 w-4 text-foreground" /><span className="text-[11px] font-semibold">Less noise. More signal.</span></div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">Your people, pipeline, and next best moves. In one place.</p>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium"><span className="h-1.5 w-1.5 rounded-full bg-success" />Demo workspace<ArrowUpRight className="ml-auto h-3.5 w-3.5" /></div>
          </div>
          <div className="flex items-center gap-2 px-2 text-muted-foreground"><CircleHelp className="h-4 w-4" /><span className="text-xs">Help & getting started</span></div>
          <div className="mt-5 flex items-center gap-2.5 border-t border-border px-1 pt-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold">JD</span>
            <div className="flex-1"><p className="text-xs font-semibold">Jamie Davis</p><p className="mt-0.5 text-[10px] text-muted-foreground">Workspace admin</p></div>
            <Settings2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </aside>
      <div className="lg:ml-[220px]">
        <header className="flex h-[69px] items-center justify-between gap-4 border-b border-border bg-card px-5 md:px-8">
          <div className="flex min-w-0 items-center gap-2 text-xs"><Crosshair className="h-5 w-5 shrink-0 lg:hidden" /><span className="hidden text-muted-foreground sm:inline">Workspace</span><span className="mx-1 hidden text-muted-foreground/50 sm:inline">/</span><span className="font-medium">Overview</span></div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="relative hidden w-[230px] xl:block"><Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" /><Input aria-label="Search demo workspace" placeholder="Search anything..." readOnly className="h-8 rounded-lg border-border/70 bg-background pl-9 pr-12 text-[11px] shadow-none" /><span className="absolute right-2 top-1.5 flex items-center rounded border border-border px-1 text-[10px] text-muted-foreground"><Command className="mr-0.5 h-2.5 w-2.5" /> K</span></div>
            <Badge variant="outline" className="hidden gap-1.5 rounded-md border-border bg-background px-2 py-1 text-[9px] font-medium uppercase tracking-wider md:flex"><Sparkles className="h-3 w-3" />Demo mode</Badge>
            <span className="hidden h-5 border-l border-border sm:block" />
            <Button variant="ghost" size="icon" className="relative hidden h-8 w-8 sm:flex" aria-label="Notifications (demo)"><Bell className="text-muted-foreground" /><span className="absolute right-2 top-1.5 h-1 w-1 rounded-full bg-success" /></Button>
            <span className="hidden h-7 w-7 items-center justify-center rounded-full bg-secondary text-[9px] font-semibold sm:flex">JD</span>
            <ThemeToggle />
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
