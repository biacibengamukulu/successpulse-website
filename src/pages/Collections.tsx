import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { 
  Upload, RefreshCw, Smartphone, Landmark, 
  ArrowDownToLine, Receipt, FileSpreadsheet, Lock 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Collections: React.FC = () => {
  const highlights = [
    {
      icon: Upload,
      title: 'Excel / Ledger Import',
      desc: 'Bulk-upload old debt books or current client ledgers instantly. Supports CSV, XLSX, and standard ledger sheets from your core software.'
    },
    {
      icon: RefreshCw,
      title: 'Smart Geo-Allocation',
      desc: 'Our rule-based engine auto-distributes collection accounts to agents nearest to the debtor\'s location, optimizing fuel costs.'
    },
    {
      icon: Smartphone,
      title: 'Consultant Recovery Worklist',
      desc: 'Agents receive an interactive, prioritized client worklist detailing contact info, payment schedules, and outstanding balances.'
    },
    {
      icon: Landmark,
      title: 'Universal Cash & Card Capture',
      desc: 'Support card swipes/taps on integrated POS devices, debit orders, or physical cash. Print or SMS digital receipts immediately.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Pillar 2: Collections & Recovery" 
        title="Accelerate Debt Recovery with Structured Field Worklists" 
        subtitle="Import excel ledgers, auto-allocate cases, record cash/POS/debit orders in the field, log Promise to Pays, and approve deposits securely."
      />

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Collections Platform</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Recover Outstanding Debts Safely and Efficiently
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Manual debt collections are prone to error, cash loss, and poor field visibility. SuccessPulse provides collections managers with an administrative console to allocate accounts, monitor agent lists, verify payments, and update client balances.
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

          {/* Ledger & Approval Panel Mock */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold">Ledger Import & Allocation Console</h3>
                <p className="text-[10px] text-slate-500">Import sheets & auto-assign to branches</p>
              </div>
              <Button as="span" variant="primary" size="sm" className="text-xs gap-1.5 py-1.5 px-3">
                <Upload className="h-3.5 w-3.5" /> Import Excel
              </Button>
            </div>

            <div className="space-y-3.5">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-3">
                <div className="flex justify-between text-xs items-center">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <FileSpreadsheet className="h-4 w-4 text-emerald-450" /> active_ledger_june.xlsx
                  </span>
                  <span className="text-[10px] text-slate-400">482 accounts • R1,240,000</span>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex gap-1.5 items-center">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] text-slate-500">Parsed Successfully</span>
                  </div>
                  <span className="text-[9px] bg-blue-600/10 text-blue-400 border border-blue-500/25 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Smart Allocator Active
                  </span>
                </div>
              </div>

              {/* Live Collection Approvals list */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">Pending Deposits</h4>
                {[
                  { name: 'Alice Ndlovu', collector: 'Kofi Mensah', amt: 'R1,200', type: 'Cash / Handheld POS', badge: 'Approve' },
                  { name: 'Kweku Boateng', collector: 'Lerato Dlamini', amt: 'R3,500', type: 'POS Swiped', badge: 'Approve' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-850 text-xs">
                    <div>
                      <div className="font-semibold text-white">{row.name}</div>
                      <div className="text-[10px] text-slate-500">Collected by {row.collector} • {row.type}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white">{row.amt}</span>
                      <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded text-[10px] cursor-pointer transition-colors">
                        {row.badge}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-500 pt-2 flex items-center justify-center gap-2">
              <Lock className="h-3 w-3 text-blue-500" /> Secure SSL Encryption Active • ISO 27001 Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Payment & Reconciliations section */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">POP & Cash Audit</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Promise to Pay (PTP) & Direct POP Uploads
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Debtors often offer a firm promise rather than immediate payment. SuccessPulse allows agents to log a digital Promise to Pay on-site. The system triggers automated SMS alerts to the debtor as the date approaches, maximizing follow-through rates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-250/50 flex gap-2.5">
                <Receipt className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <strong>POP Image Upload:</strong> Agents upload photos of bank slips or physical vouchers to settle accounts instantly.
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-250/50 flex gap-2.5">
                <ArrowDownToLine className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <strong>Auto-Balance Updates:</strong> Ledgers sync with central databases as soon as a deposit receives approval.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-950">Typical Recovery Timeline</h3>
            <div className="space-y-4 text-xs text-slate-650">
              <div className="flex gap-4">
                <span className="font-bold text-blue-600 shrink-0 font-mono">Day 01</span>
                <div>
                  <strong>Import Inactive Book:</strong> Excel spreadsheet imported into SuccessPulse dashboard.
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 ml-[18px]">
                <span className="font-bold text-blue-600 shrink-0 font-mono">Day 02</span>
                <div>
                  <strong>Allocated & Routed:</strong> System splits debt cases between field agents based on current branches.
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 ml-[18px]">
                <span className="font-bold text-blue-600 shrink-0 font-mono">Day 03</span>
                <div>
                  <strong>Field Visit & PTP Logged:</strong> Agent visits Dumisani, records GPS pin, and logs a PTP for next Friday.
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 ml-[18px]">
                <span className="font-bold text-blue-600 shrink-0 font-mono">Day 10</span>
                <div>
                  <strong>SMS Reminder & Payment:</strong> Debtor receives SMS alert, meets agent, swipes card on handheld POS.
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 ml-[18px]">
                <span className="font-bold text-blue-600 shrink-0 font-mono">Day 11</span>
                <div>
                  <strong>Manager Post:</strong> Deposit list matched with bank statement. Ledgers balanced.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to secure your collections pipeline?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Book a custom session with our technical team to see how your branch recovery ratios can improve using automated geo-routing.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button as="span" variant="white" className="font-bold text-blue-650 hover:bg-slate-100">
                Book a Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
