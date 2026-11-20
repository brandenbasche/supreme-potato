import { useMemo } from 'react'
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { ArrowUpRight, ChevronDown, Flame, MoreHorizontal } from 'lucide-react'
import { Badge } from '../lib/shadcn/badge'
import { Button } from '../lib/shadcn/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../lib/shadcn/table'

type Account = { name: string; domain: string; initials: string; status: string; value: string; owner: string; activity: string }
const sampleAccounts: Account[] = [
  { name: 'Linear', domain: 'linear.app', initials: 'L', status: 'High intent', value: '$48,000', owner: 'JD', activity: '2 hours ago' },
  { name: 'Notion', domain: 'notion.so', initials: 'N', status: 'Engaged', value: '$72,000', owner: 'SK', activity: '3 hours ago' },
  { name: 'Vercel', domain: 'vercel.com', initials: 'V', status: 'High intent', value: '$36,000', owner: 'AM', activity: '5 hours ago' },
  { name: 'Ramp', domain: 'ramp.com', initials: 'R', status: 'In conversation', value: '$64,000', owner: 'JD', activity: 'Yesterday' },
]

export default function TargetAccounts() {
  const data = useMemo(() => sampleAccounts, [])
  const columns = useMemo<ColumnDef<Account>[]>(() => [
    { accessorKey: 'name', header: 'Account', cell: ({ row }) => <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-[15px] font-bold tracking-tighter">{row.original.initials}</span><div><p className="text-[11px] font-semibold">{row.original.name}</p><p className="mt-0.5 text-[9px] text-muted-foreground">{row.original.domain}</p></div></div> },
    { accessorKey: 'status', header: 'Signal', cell: ({ getValue }) => { const status = getValue<string>(); return <Badge variant="secondary" className={`whitespace-nowrap rounded-md border-0 px-2 py-1 text-[9px] font-medium ${status === 'High intent' ? 'bg-success/10 text-foreground' : 'bg-secondary text-muted-foreground'}`}>{status === 'High intent' && <Flame className="mr-1 h-3 w-3 text-success" />}{status}</Badge> } },
    { accessorKey: 'value', header: 'Deal value', cell: ({ getValue }) => <span className="text-[11px] font-medium tabular-nums">{getValue<string>()}</span> },
    { accessorKey: 'owner', header: 'Owner', cell: ({ getValue }) => <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-secondary/50 text-[8px] font-medium">{getValue<string>()}</span> },
    { accessorKey: 'activity', header: 'Last touch', cell: ({ getValue }) => <span className="whitespace-nowrap text-[10px] text-muted-foreground">{getValue<string>()}</span> },
    { id: 'actions', header: '', cell: ({ row }) => <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" aria-label={`More about ${row.original.name} (demo)`}><MoreHorizontal className="!h-3.5 !w-3.5" /></Button> },
  ], [])
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  return (
    <section id="accounts" className="scroll-mt-6 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between gap-2 p-5 sm:px-6"><div className="flex items-center gap-2"><h2 className="text-sm font-semibold tracking-tight">Accounts on your radar</h2><Badge variant="secondary" className="rounded-md px-1.5 py-0.5 text-[9px] font-normal">124</Badge></div><Button variant="outline" size="sm" className="h-7 gap-2 bg-card px-2 text-[10px] shadow-none" title="Demo placeholder">Top accounts<ChevronDown className="!h-3 !w-3" /></Button></div>
      <Table className="min-w-[600px]">
        <TableHeader className="bg-background/80">{table.getHeaderGroups().map((group) => <TableRow key={group.id} className="hover:bg-transparent">{group.headers.map((header, index) => <TableHead key={header.id} className={`h-9 px-3 text-[9px] font-medium ${index === 0 ? 'pl-6' : ''}`}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>)}</TableRow>)}</TableHeader>
        <TableBody>{table.getRowModel().rows.map((row) => <TableRow key={row.id}>{row.getVisibleCells().map((cell, index) => <TableCell key={cell.id} className={`px-3 py-3.5 ${index === 0 ? 'pl-6' : ''}`}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}</TableRow>)}</TableBody>
      </Table>
      <div className="flex items-center justify-between border-t border-border px-6 py-3"><span className="text-[9px] text-muted-foreground">Showing 4 of 124 target accounts</span><Button variant="ghost" size="sm" className="-mr-2 h-6 gap-1.5 text-[10px]" title="Demo placeholder">View all accounts<ArrowUpRight className="!h-3 !w-3" /></Button></div>
    </section>
  )
}
