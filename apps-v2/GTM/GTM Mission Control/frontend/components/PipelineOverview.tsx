import { ArrowUpRight, ChevronRight, TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, Line, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from '../lib/shadcn/button'

const momentum = [
  { date: 'Jun 1', pipeline: 420, target: 400 },
  { date: 'Jun 5', pipeline: 490, target: 520 },
  { date: 'Jun 10', pipeline: 470, target: 640 },
  { date: 'Jun 15', pipeline: 740, target: 760 },
  { date: 'Jun 20', pipeline: 790, target: 880 },
  { date: 'Jun 25', pipeline: 1080, target: 1000 },
  { date: 'Jun 30', pipeline: 1280, target: 1120 },
]
const stages = [
  { label: 'Discovery', amount: '$420k', deals: 18, color: 'bg-chart-1' },
  { label: 'Qualified', amount: '$360k', deals: 14, color: 'bg-chart-2' },
  { label: 'Proposal', amount: '$320k', deals: 10, color: 'bg-chart-4' },
  { label: 'Negotiation', amount: '$180k', deals: 6, color: 'bg-success' },
]

export function MetricSparkline({ values }: { values: number[] }) {
  return <div className="h-10 w-[70px]" aria-hidden="true"><ResponsiveContainer width={70} height={40}><AreaChart data={values.map((value) => ({ value }))} margin={{ top: 5, bottom: 3, left: 0, right: 0 }}><Area type="monotone" dataKey="value" stroke="hsl(var(--success))" fill="hsl(var(--success) / 0.08)" strokeWidth={1.7} isAnimationActive={false} /></AreaChart></ResponsiveContainer></div>
}

export default function PipelineOverview() {
  return (
    <section id="pipeline" className="min-w-0 scroll-mt-6 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-3 px-5 pt-5 sm:px-6">
        <div><h2 className="text-sm font-semibold tracking-tight">Pipeline momentum</h2><p className="mt-1 text-[11px] text-muted-foreground">A little progress, every single day.</p></div>
        <Button variant="ghost" size="sm" className="-mr-2 h-7 gap-1 text-[10px] text-muted-foreground" title="Demo placeholder">View pipeline<ArrowUpRight className="!h-3.5 !w-3.5" /></Button>
      </div>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 px-5 sm:px-6">
        <div className="flex items-center gap-3"><span className="text-[28px] font-semibold leading-none tracking-tight">$1.28M</span><span className="flex items-center gap-1 rounded bg-success/10 px-1.5 py-1 text-[10px] font-medium text-foreground"><TrendingUp className="h-3 w-3 text-success" />18.6%</span></div>
        <div className="flex gap-4 pb-0.5 text-[9px] text-muted-foreground"><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-success" />Pipeline value</span><span className="flex items-center gap-1.5"><span className="w-3 border-t border-dashed border-muted-foreground" />Monthly target</span></div>
      </div>
      <div className="mx-3 mb-3 mt-5 h-[173px] pr-2 text-[10px] sm:mx-4" role="img" aria-label="Sample pipeline value grows from $420,000 to $1.28 million during June, exceeding the monthly target of $1.12 million.">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} initialDimension={{ width: 600, height: 173 }}>
          <ComposedChart data={momentum} margin={{ top: 5, right: 8, left: -15, bottom: 0 }}>
            <defs><linearGradient id="pipeline-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--success))" stopOpacity={0.16} /><stop offset="100%" stopColor="hsl(var(--success))" stopOpacity={0.01} /></linearGradient></defs>
            <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeDasharray="3 4" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 9 }} dy={7} minTickGap={20} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 9 }} ticks={[0, 500, 1000, 1500]} domain={[0, 1500]} tickFormatter={(v: number) => v === 0 ? '$0' : `$${v / 1000}M`} />
            <Tooltip contentStyle={{ borderRadius: 8, borderColor: 'hsl(var(--border))', background: 'hsl(var(--popover))', color: 'hsl(var(--popover-foreground))', fontSize: 11 }} formatter={(value) => `$${Number(value).toLocaleString()}k`} cursor={false} />
            <Line type="monotone" dataKey="target" name="Monthly target" stroke="hsl(var(--muted-foreground) / 0.5)" strokeDasharray="4 4" strokeWidth={1.2} dot={false} isAnimationActive={false} />
            <Area type="monotone" dataKey="pipeline" name="Pipeline value" fill="url(#pipeline-fill)" stroke="hsl(var(--success))" strokeWidth={2.3} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 border-t border-border bg-background/40 sm:grid-cols-4">
        {stages.map((stage) => <div key={stage.label} className="border-r border-border px-5 py-3.5 last:border-r-0 sm:px-6"><p className="flex items-center gap-1.5 text-[9px] text-muted-foreground"><span className={`h-1.5 w-1.5 rounded-sm ${stage.color}`} />{stage.label}<ChevronRight className="ml-auto h-3 w-3 text-muted-foreground/50" /></p><p className="mt-2 flex flex-wrap items-baseline gap-x-2"><span className="text-[17px] font-semibold tracking-tight">{stage.amount}</span><span className="text-[9px] text-muted-foreground">{stage.deals} deals</span></p></div>)}
      </div>
    </section>
  )
}
