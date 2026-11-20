import { ArrowDownToLine, ArrowUpRight, Building2, CalendarDays, ChevronDown, CircleDollarSign, Handshake, MoveUpRight, Send } from 'lucide-react'
import WorkspaceShell from '../components/WorkspaceShell'
import PipelineOverview, { MetricSparkline } from '../components/PipelineOverview'
import TargetAccounts from '../components/TargetAccounts'
import { DailyFocus, MeetingStrip, OutreachActivity } from '../components/SalesActivity'
import { Button } from '../lib/shadcn/button'

const metrics = [
  { label: 'Total pipeline', value: '$1.28M', change: '18.6%', detail: 'vs. last month', icon: CircleDollarSign, values: [20, 24, 23, 36, 33, 42, 48, 56, 58, 72] },
  { label: 'Target accounts', value: '124', change: '12 new', detail: 'this month', icon: Building2, values: [25, 26, 25, 29, 34, 33, 41, 44, 43, 48] },
  { label: 'Active deals', value: '48', change: '8 new', detail: 'this month', icon: Handshake, values: [12, 14, 13, 16, 15, 20, 19, 23, 22, 28] },
  { label: 'Outreach reply rate', value: '24.8', suffix: '%', change: '4.2%', detail: 'vs. last month', icon: Send, values: [12, 16, 14, 19, 17, 22, 20, 23, 22, 26] },
]

export default function MissionControl() {
  return (
    <WorkspaceShell>
      <main id="overview" className="mx-auto max-w-[1580px] px-5 pb-6 pt-7 md:px-8 md:pt-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div><p className="mb-2 flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.13em] text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-success" />Your GTM, in sync</p><h1 className="text-[28px] font-semibold leading-tight tracking-[-0.035em]">Mission control</h1><p className="mt-2 text-[11px] text-muted-foreground">Big picture. Clear priorities. Let's move your business forward.</p></div>
          <div className="flex items-center gap-2"><Button variant="outline" className="h-8 gap-2 rounded-lg bg-card px-3 text-[10px] shadow-none" title="Demo reporting period"><CalendarDays className="!h-3.5 !w-3.5 text-muted-foreground" />Jun 1 – Jun 30, 2025<ChevronDown className="ml-1 !h-3 !w-3 text-muted-foreground" /></Button><Button variant="outline" size="icon" className="h-8 w-8 rounded-lg bg-card shadow-none" aria-label="Export report (demo)"><ArrowDownToLine className="!h-3.5 !w-3.5" /></Button></div>
        </div>
        <div className="mb-5 mt-7 flex items-center justify-between border-b border-border">
          <span className="-mb-px border-b-2 border-primary pb-3 text-[11px] font-semibold">Workspace overview</span><span className="hidden pb-3 text-[9px] text-muted-foreground sm:block">A snapshot of what matters right now</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 2xl:gap-5">
          <div className="col-span-2 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 2xl:gap-5">
            {metrics.map(({ label, value, suffix, change, detail, icon: Icon, values }) => <section key={label} className="min-w-0 rounded-xl border border-border bg-card p-4 sm:p-5"><div className="flex items-center justify-between gap-1"><h2 className="text-[10px] font-medium text-muted-foreground">{label}</h2><Icon className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} /></div><div className="mt-3 flex items-end justify-between gap-1"><p className="text-[27px] font-semibold leading-none tracking-[-0.04em]">{value}{suffix && <span className="ml-0.5 text-xl text-muted-foreground">{suffix}</span>}</p><div className="-mb-1 hidden sm:block md:hidden xl:block"><MetricSparkline values={values} /></div></div><div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[9px]"><span className="flex items-center gap-0.5 font-medium"><MoveUpRight className="h-2.5 w-2.5 text-success" />{change}</span><span className="text-muted-foreground">{detail}</span></div></section>)}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px] 2xl:grid-cols-[minmax(0,1fr)_330px]">
          <PipelineOverview />
          <DailyFocus />
          <TargetAccounts />
          <OutreachActivity />
        </div>
        <div className="mt-5"><MeetingStrip /></div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 text-[9px] text-muted-foreground"><p className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-muted-foreground/50" />A little clarity goes a long way.</p><p className="flex items-center gap-1.5">Demo workspace <span className="mx-1 opacity-50">/</span> Illustrative data only<ArrowUpRight className="h-2.5 w-2.5" /></p></footer>
      </main>
    </WorkspaceShell>
  )
}
