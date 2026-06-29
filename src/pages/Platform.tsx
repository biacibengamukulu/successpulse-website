import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { 
  Megaphone, Calendar, MapPin, ClipboardCheck, ArrowRightLeft, Users, 
  HandCoins, Landmark, FileCheck, LandmarkIcon, ClipboardList, ShieldAlert, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Platform: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Campaigns & Lead Gen',
      pillar: 'Campaign & Growth',
      icon: Megaphone,
      desc: 'Set up marketing plans, track flyer distributions, and log referrals in selected neighborhoods.',
      badge: 'Agent Terminal'
    },
    {
      num: '02',
      title: 'Weekly & Action Plans',
      pillar: 'Campaign & Growth',
      icon: Calendar,
      desc: 'Formulate structured travel itineraries, specify targeted client lists, and define collection goals.',
      badge: 'Manager Console'
    },
    {
      num: '03',
      title: 'Consultant Field Visits',
      pillar: 'Campaign & Growth',
      icon: MapPin,
      desc: 'Log GPS locations, record offline client interviews, and capture on-site verification evidence.',
      badge: 'GPS Tracked'
    },
    {
      num: '04',
      title: 'Lead & Loan Enquiries',
      pillar: 'Campaign & Growth',
      icon: ClipboardCheck,
      desc: 'Fill out simplified application sheets and capture applicant photos and ID documents directly.',
      badge: 'Offline Capture'
    },
    {
      num: '05',
      title: 'Inactive Customer Import',
      pillar: 'Collections & Recovery',
      icon: ArrowRightLeft,
      desc: 'Upload historical debt spreadsheets or legacy system records to begin recovery workflows.',
      badge: 'System Admin'
    },
    {
      num: '06',
      title: 'Customer Allocation',
      pillar: 'Collections & Recovery',
      icon: Users,
      desc: 'Distribute imported loan files to field recovery consultants automatically based on zip codes.',
      badge: 'Auto-Routing'
    },
    {
      num: '07',
      title: 'Promise to Pay (PTP)',
      pillar: 'Collections & Recovery',
      icon: HandCoins,
      desc: 'Negotiate installment promises and capture firm commitment dates with instant digital logs.',
      badge: 'SMS Triggered'
    },
    {
      num: '08',
      title: 'POS / Cash Capture',
      pillar: 'Collections & Recovery',
      icon: Landmark,
      desc: 'Accept cash collections, swipe POS cards, or log authorization mandates on-site.',
      badge: 'Receipt Issued'
    },
    {
      num: '09',
      title: 'Manager Approvals',
      pillar: 'Collections & Recovery',
      icon: FileCheck,
      desc: 'Reconcile collected cash lists with physical bank deposits and tap signatures to post balances.',
      badge: 'Dual Control'
    },
    {
      num: '10',
      title: 'Branch Operations & Cash',
      pillar: 'Branch Operations',
      icon: LandmarkIcon,
      desc: 'Log vault opening balances, track petty cash, document fuel receipts, and log office bills.',
      badge: 'General Ledger'
    },
    {
      num: '11',
      title: 'Audits & Reports',
      pillar: 'Branch Operations',
      icon: ClipboardList,
      desc: 'Generate end-of-day balances, print compliance checklists, and maintain permanent audit logs.',
      badge: 'Executive View'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Platform Journey" 
        title="From Campaigns to Audited Close: The Full Operations Lifecycle" 
        subtitle="Manage leads, route collection agents, log POS captures, verify petty cash, and balance branch vaults in one synchronized fintech system."
      />

      {/* Main Operations Flow Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            The 11-Step SuccessPulse Operation Loop
          </h2>
          <p className="text-slate-500 text-sm">
            Our platform connects field activity directly to central finance controls. Review how the modules work in harmony below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="bg-blue-600/10 text-blue-600 p-2.5 rounded-xl border border-blue-500/10">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-slate-350 text-2xl font-bold font-mono">
                    {step.num}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-blue-600 tracking-wide uppercase">
                    {step.pillar}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 mt-1">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">{step.desc}</p>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-50 mt-5 flex justify-between items-center text-xs">
                <span className="bg-slate-100 text-slate-650 px-2.5 py-0.5 rounded-md font-semibold font-mono text-[9px] uppercase tracking-wider">
                  {step.badge}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Built-in
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Security controls */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Security & Trust</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Strict Access Controls Built for Financial Compliance
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We understand that lending operations involve significant cash-handling risks, teller errors, and regulatory compliance rules. SuccessPulse mitigates these with hardware-level security.
            </p>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Dual Signature Approvals:</strong> Branch managers must review every POS deposit and expense invoice before they post to the general ledger.</span>
              </div>
              <div className="flex gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Vault Limit Enforcement:</strong> Prevent branch cash accumulations. Automatically flags branches that exceed configured security limits.</span>
              </div>
              <div className="flex gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Immutable Audit Trails:</strong> Every agent check-in, loan prospect record, and collection posting leaves an audit trail that cannot be deleted.</span>
              </div>
            </div>
          </div>

          {/* Interactive visual checklist */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold">Branch Operations Audits</h3>
            <div className="space-y-4">
              {[
                { title: 'Branch Audit Compliance', check: '100% Verified', desc: 'No manual cash differences found across any branch ledger.' },
                { title: 'GPS Check-In Validation', check: 'Active', desc: 'All consultant visits validated within 50 meters of geo-coordinates.' },
                { title: 'General Ledger Balancing', check: 'Daily Auto-Balance', desc: 'End of day checks run automatically at 05:00 PM local time.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-850 p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 px-2.5 py-0.5 rounded font-bold shrink-0">
                    {item.check}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-100 border border-slate-200/60 rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
            Want to see how SuccessPulse fits your specific operations?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
            Book a custom demonstration where our technical team will map your existing spreadsheets and collection routines into the SuccessPulse operation flow.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" className="font-bold">
                Book My Free Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="font-bold bg-white">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
