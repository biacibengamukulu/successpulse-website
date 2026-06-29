import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { 
  Landmark, Wallet, Receipt, FileText, History, Lock 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const BranchOperations: React.FC = () => {
  const highlights = [
    {
      icon: Landmark,
      title: 'Daily Record & Opening Balance',
      desc: 'Branch managers must log opening balance figures, counting physical vault money and comparing with yesterday\'s closing totals.'
    },
    {
      icon: Wallet,
      title: 'Agent Working Cash allocations',
      desc: 'Allocate operating cash to field consultants for daily expenses or collections change. Track returns at the end of each shift.'
    },
    {
      icon: Receipt,
      title: 'Expense & Receipt Capture',
      desc: 'Log branch office and travel expenses instantly. Mandate photo attachment uploads for fuel, internet, and stationery costs.'
    },
    {
      icon: FileText,
      title: 'Branch Reports & Compliance',
      desc: 'View comprehensive visual summaries showing total disbursements, cash on hand, expense metrics, and vault limit status.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Pillar 3: Branch Operations" 
        title="Complete Cash Control & Branch Audit Compliance" 
        subtitle="Manage daily ledger records, allocate agent working cash, log business expenses with receipt photos, and review branch performance audits."
      />

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Branch Controls</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Eliminate Discrepancies & Cash Transport Risks
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Decentralized branches face vault security risks and manual spreadsheet errors. SuccessPulse unifies branch operations into a secure general ledger, forcing dual-manager verification and compliance checklists.
            </p>
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="bg-blue-600/10 text-blue-600 p-2 rounded-xl shrink-0 mt-0.5 border border-blue-500/15">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reconcile Ledger Mock */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold">Branch Vault Balance Console</h3>
                <p className="text-[10px] text-slate-500">JHB Central Branch • 04:45 PM</p>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-450 border border-emerald-500/25 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                Audited & Balanced
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Opening Balance</span>
                <div className="text-xl font-bold text-white mt-1">R25,000.00</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Collections Cash</span>
                <div className="text-xl font-bold text-white mt-1">R48,200.00</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Agent Working Cash</span>
                <div className="text-xl font-bold text-red-455 mt-1">-R16,000.00</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Final Reconciled Vault</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">R57,200.00</div>
              </div>
            </div>

            {/* Petty Cash / Expenses attachment list */}
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">Petty Expenses logged</h4>
              <div className="space-y-2">
                {[
                  { desc: 'Agent fuel allowance', amt: 'R450.00', status: 'Receipt Attached', code: 'JHB-EXP-481' },
                  { desc: 'Office paper & ink', amt: 'R350.00', status: 'Receipt Attached', code: 'JHB-EXP-482' }
                ].map((exp, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-850 text-xs">
                    <div>
                      <div className="font-semibold text-white">{exp.desc}</div>
                      <div className="text-[9px] text-slate-500">ID: {exp.code}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{exp.amt}</div>
                      <div className="text-[9px] text-emerald-450 mt-0.5">{exp.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Audit Trail details */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Audit Log & Security</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Immutable Records for External Audits
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              When external auditors inspect branch operations, manual notebooks or Excel cells create doubt. SuccessPulse maintains a secure, timestamped record of every transaction, check-in, deposit, and ledger modification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-250/50 flex gap-2.5">
                <History className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <strong>Action Timestamps:</strong> Every single manager validation logs the exact date, teller ID, and IP address.
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-250/50 flex gap-2.5">
                <Lock className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <strong>Role Isolation:</strong> Field agents, branch cashiers, and branch managers have isolated terminal views.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <History className="h-4.5 w-4.5 text-blue-600" /> Recent Audit Entries
            </h3>
            <div className="space-y-3.5 text-xs text-slate-650">
              {[
                { actor: 'Manager Lerato Dlamini', action: 'Approved agent Kofi Mensah cash report', time: '10 mins ago', detail: 'ID: CONF-9428 • Amount: R3,200.00' },
                { actor: 'Teller Amina Osei', action: 'Reconciled opening vault cash', time: '8 hours ago', detail: 'ID: OPEN-0042 • Amount: R25,000.00' },
                { actor: 'System Auditor', action: 'Exported branch daily balance sheets', time: 'Yesterday', detail: 'Target: Soweto Central branch' }
              ].map((log, idx) => (
                <div key={idx} className="pb-3.5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-950">{log.actor}</span>
                    <span className="text-[10px] text-slate-450 font-mono">{log.time}</span>
                  </div>
                  <p className="text-slate-500 mt-1">{log.action}</p>
                  <p className="text-[10px] font-mono text-blue-600 mt-0.5">{log.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to secure your branch operations?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Book a custom demonstration where our technical team will map your existing spreadsheets and branch structures into our secure operations flow.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="white" className="font-bold text-blue-650 hover:bg-slate-100">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
