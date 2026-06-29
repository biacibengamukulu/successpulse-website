import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Target, RefreshCw, FileText, CheckCircle2, ChevronRight, MapPin, Check } from 'lucide-react';


export const DashboardMock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'campaign' | 'collections' | 'branch'>('campaign');

  const campaignMetrics = [
    { label: 'Weekly Plans Met', value: '94.2%', icon: Target, trend: '+4.5% vs last week', trendType: 'up' },
    { label: 'Active Field Visits', value: '148', icon: MapPin, trend: '24 currently offline', trendType: 'neutral' },
    { label: 'Loan Enquiries Captured', value: '842', icon: Users, trend: '+12.3% this month', trendType: 'up' },
  ];

  const collectionsMetrics = [
    { label: 'Total PTP Collected', value: 'R482,900', icon: DollarSign, trend: '89.4% conversion rate', trendType: 'up' },
    { label: 'Unallocated Accounts', value: '4', icon: RefreshCw, trend: 'Smart auto-matching active', trendType: 'neutral' },
    { label: 'Approved & Posted Today', value: '142', icon: CheckCircle2, trend: 'All deposits validated', trendType: 'up' },
  ];

  const branchMetrics = [
    { label: 'Branch Opening Balance', value: 'R25,000', icon: DollarSign, trend: 'Branch: JHB Central', trendType: 'neutral' },
    { label: 'Today\'s Working Cash', value: 'R180,450', icon: TrendingUp, trend: 'Allocated to 12 field agents', trendType: 'up' },
    { label: 'Recorded Expenses', value: 'R1,200', icon: FileText, trend: 'Receipts uploaded & verified', trendType: 'up' },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden animate-pulse-subtle">
      {/* Header of Mock Dashboard */}
      <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-3.5 w-3.5 rounded-full bg-red-500"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-500"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-green-500"></div>
          <span className="text-slate-400 text-xs font-mono ml-2 border border-slate-800 px-3 py-1 rounded-md bg-slate-900/60">
            https://app.successpulse.co/dashboard
          </span>
        </div>
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('campaign')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'campaign' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'collections' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => setActiveTab('branch')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'branch' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Branch Ops
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 space-y-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(activeTab === 'campaign' ? campaignMetrics : activeTab === 'collections' ? collectionsMetrics : branchMetrics).map((metric, i) => (
            <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs font-medium">{metric.label}</span>
                <div className="bg-blue-500/10 p-2 rounded-xl text-blue-400 border border-blue-500/10">
                  <metric.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="text-2xl font-bold tracking-tight text-white mb-1">{metric.value}</div>
              <div className={`text-[10px] ${metric.trendType === 'up' ? 'text-emerald-400' : 'text-slate-400'}`}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Graph / Table Detail */}
        {activeTab === 'campaign' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Field Agent Leaderboard */}
            <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Consultant Field Productivity</div>
                  <p className="text-[10px] text-slate-500">Live field plan completion rates today</p>
                </div>
                <span className="text-xs text-blue-500 hover:underline cursor-pointer flex items-center gap-1">
                  View plans <ChevronRight className="h-3 w-3" />
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Kofi Mensah', visits: '12 / 12 completed', pct: '100%', city: 'Accra', color: 'bg-emerald-500' },
                  { name: 'Lerato Dlamini', visits: '10 / 12 completed', pct: '83%', city: 'Soweto', color: 'bg-blue-500' },
                  { name: 'Chinedu Okafor', visits: '9 / 10 completed', pct: '90%', city: 'Lagos', color: 'bg-blue-500' },
                ].map((agent, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-900 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-blue-400 border border-slate-700">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{agent.name}</div>
                        <div className="text-[10px] text-slate-400">{agent.city} Branch</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-350">{agent.visits}</div>
                      <div className="flex items-center gap-1.5 justify-end mt-1">
                        <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full ${agent.color}`} style={{ width: agent.pct }}></div>
                        </div>
                        <span className="text-[9px] font-bold text-white">{agent.pct}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Pipeline Summary */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="text-sm font-semibold text-white">Lead Capture Funnel</div>
              <div className="space-y-4">
                {[
                  { label: 'Prospects Met', value: '450', barWidth: 'w-full' },
                  { label: 'Loan Enquiries', value: '280', barWidth: 'w-[62%]' },
                  { label: 'Branch Assessments', value: '185', barWidth: 'w-[41%]' },
                  { label: 'Approved Deals', value: '124', barWidth: 'w-[27%]' },
                ].map((stage, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">{stage.label}</span>
                      <span className="font-bold text-white">{stage.value}</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className={`h-full bg-blue-600 rounded-full ${stage.barWidth}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'collections' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Collections Working Queue & Approvals</div>
                <p className="text-[10px] text-slate-500">Auto-allocated field collections requiring manager posting</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded-md">
                  POP Queue (4 pending)
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-400">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 font-medium">
                    <th className="py-2.5">Customer / Ref</th>
                    <th className="py-2.5">Allocated Consultant</th>
                    <th className="py-2.5">Collected Amount</th>
                    <th className="py-2.5">Payment Method</th>
                    <th className="py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { customer: 'Amina Osei (#4820)', consultant: 'Kofi Mensah', amount: 'R3,200', method: 'Cash / Handheld receipt', status: 'Pending Approval', statusStyle: 'text-amber-400 bg-amber-400/10' },
                    { customer: 'John Ndegwa (#5012)', consultant: 'Lerato Dlamini', amount: 'R4,500', method: 'POS Card Tap', status: 'Verified', statusStyle: 'text-emerald-400 bg-emerald-400/10' },
                    { customer: 'Sipho Zuma (#3902)', consultant: 'Lerato Dlamini', amount: 'R1,800', method: 'Debit Order Match', status: 'Verified', statusStyle: 'text-emerald-400 bg-emerald-400/10' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-900/50 last:border-0 hover:bg-slate-900/30">
                      <td className="py-3 font-semibold text-white">{row.customer}</td>
                      <td className="py-3">{row.consultant}</td>
                      <td className="py-3 font-medium text-white">{row.amount}</td>
                      <td className="py-3 text-[11px]">{row.method}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusStyle}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'branch' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cash & Audit Trail */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="text-sm font-semibold text-white">Daily Branch Reconciliation</div>
              <div className="space-y-3.5">
                {[
                  { desc: 'Opening Balance Confirmed', time: '07:30 AM', amt: '+R25,000.00', status: 'Verified', statusColor: 'text-emerald-400' },
                  { desc: 'Working Cash Allocated to 8 Field Agents', time: '08:00 AM', amt: '-R16,000.00', status: 'Signed Off', statusColor: 'text-blue-400' },
                  { desc: 'Fuel Reimbursement Expense Uploaded', time: '11:15 AM', amt: '-R450.00', status: 'Receipt Attached', statusColor: 'text-slate-400 font-mono' },
                  { desc: 'Collections Cash Deposit Approved', time: '04:30 PM', amt: '+R48,200.00', status: 'Audit Success', statusColor: 'text-emerald-400' },
                ].map((recon, i) => (
                  <div key={i} className="flex justify-between items-start text-xs border-l-2 border-blue-600/40 pl-3 ml-1 py-1">
                    <div>
                      <div className="font-semibold text-white">{recon.desc}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{recon.time} • {recon.status}</div>
                    </div>
                    <div className={`font-mono font-semibold ${recon.amt.startsWith('+') ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {recon.amt}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Log / Access Compliance */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="text-sm font-semibold text-white">Branch Vault Compliance</div>
              <div className="space-y-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-350">General Ledger status:</span>
                  </div>
                  <span className="font-bold text-white bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Balanced</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-350">Vault Limit Audit:</span>
                  </div>
                  <span className="text-white font-semibold">Under threshold (R50,000 max)</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">System Controls</h5>
                  <ul className="text-xs space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      Manager dual-signature enforcement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      Real-time offline GPS check-ins logged
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
