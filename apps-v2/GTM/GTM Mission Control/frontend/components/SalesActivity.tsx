import { ArrowRight, ArrowUpRight, Calendar, Check, ChevronRight, Circle, Crosshair, Mail, MessageSquare, MousePointer2, Sparkles, Video } from 'lucide-react'
import { Button } from '../lib/shadcn/button'
import { Badge } from '../lib/shadcn/badge'

export function DailyFocus() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative overflow-hidden bg-primary px-5 pb-5 pt-5 text-primary-foreground">
        <div className="pointer-events-none absolute -right-12 -top-12 flex h-48 w-48 items-center justify-center rounded-full border border-primary-foreground/10" aria-hidden="true"><div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary-foreground/10"><div className="h-16 w-16 rounded-full border border-primary-foreground/10" /></div></div>
        <p className="relative flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-foreground/65"><Sparkles className="h-3 w-3" />Your daily edge</p>
        <h2 className="relative mt-4 text-[21px] font-medium leading-tight tracking-tight">Good signals.<br />Better conversations.</h2>
        <p className="relative mt-2 max-w-[240px] text-[10px] leading-relaxed text-primary-foreground/65">3 accounts are showing buying intent.<br />Now is a good time to say hello.</p>
        <Button variant="secondary" size="sm" className="relative mt-4 h-7 gap-3 rounded-md bg-primary-foreground px-3 text-[10px] text-primary hover:bg-primary-foreground/90" asChild><a href="#accounts">Explore account signals<ArrowRight className="!h-3 !w-3" /></a></Button>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-3 pt-4">
        <div className="mb-3 flex items-center justify-between"><h3 className="text-[11px] font-semibold">Today's focus</h3><span className="text-[9px] text-muted-foreground">2 of 5 done</span></div>
        <div className="space-y-3.5">
          <div className="flex items-start gap-2.5"><Circle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" /><div className="flex-1"><p className="text-[10px] font-medium">Follow up with Sarah at Linear</p><p className="mt-1 text-[9px] text-muted-foreground">Proposal viewed · 2h ago</p></div><span className="rounded bg-warning/10 px-1.5 py-0.5 text-[8px] font-medium">Priority</span></div>
          <div className="flex items-start gap-2.5"><Circle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" /><div><p className="text-[10px] font-medium">Prep for Vercel discovery call</p><p className="mt-1 text-[9px] text-muted-foreground">Today at 2:00 PM</p></div></div>
        </div>
        <a href="#outreach" className="mt-auto flex items-center gap-1.5 pt-4 text-[9px] font-medium text-muted-foreground hover:text-foreground">See your next moves<ChevronRight className="h-3 w-3" /></a>
      </div>
    </section>
  )
}

const activities = [
  { icon: MessageSquare, title: 'A reply worth opening', text: 'Sarah Chen at Linear replied to your outreach.', time: '12 min ago', highlight: true },
  { icon: Calendar, title: 'Meeting booked', text: 'Discovery call with Vercel is on the calendar.', time: '48 min ago', highlight: false },
  { icon: MousePointer2, title: 'Your proposal got a look', text: 'Alex at Notion viewed the team plan.', time: '1 hour ago', highlight: false },
  { icon: Mail, title: 'A new conversation started', text: 'Outreach sequence sent to 24 contacts.', time: '2 hours ago', highlight: false },
]

export function OutreachActivity() {
  return (
    <section id="outreach" className="h-full scroll-mt-6 rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between px-5 pb-4 pt-5"><h2 className="text-sm font-semibold tracking-tight">In the loop</h2><Badge variant="secondary" className="gap-1.5 rounded-md bg-success/10 px-1.5 text-[8px] font-normal"><span className="h-1 w-1 rounded-full bg-success" />Sample feed</Badge></div>
      <div className="space-y-0 px-5">
        {activities.map(({ icon: Icon, title, text, time, highlight }, index) => <div key={title} className="relative flex gap-3 pb-5 last:pb-3">{index !== activities.length - 1 && <div className="absolute bottom-0 left-[13px] top-8 border-l border-dashed border-border" />}<span className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${highlight ? 'border-success/20 bg-success/10' : 'border-border bg-background'}`}><Icon className={`h-3 w-3 ${highlight ? 'text-success' : 'text-muted-foreground'}`} /></span><div><p className="text-[10px] font-semibold">{title}</p><p className="mt-1 max-w-[210px] text-[9px] leading-relaxed text-muted-foreground">{text}</p><p className="mt-1.5 text-[8px] text-muted-foreground/75">{time}</p></div></div>)}
      </div>
      <div className="mx-5 flex items-center justify-between border-t border-border py-3"><span className="text-[9px] text-muted-foreground">You're all caught up</span><Check className="h-3 w-3 text-success" /></div>
    </section>
  )
}

export function MeetingStrip() {
  return <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary"><Video className="h-4 w-4 text-foreground" /></span><div><p className="text-[11px] font-semibold">Up next: Discovery with Vercel</p><p className="mt-1 text-[10px] text-muted-foreground">2:00 – 2:30 PM <span className="mx-1.5">·</span> Alex Morgan + 2 others</p></div></div><div className="flex items-center gap-5"><span className="hidden items-center gap-1.5 text-[9px] text-muted-foreground sm:flex"><Crosshair className="h-3 w-3" />Make your next move count.</span><Button size="sm" variant="outline" className="h-8 gap-2 bg-card text-[10px] shadow-none" title="Demo placeholder">Meeting details<ArrowUpRight className="!h-3 !w-3" /></Button></div></div>
}
