import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CheckCircle2, CircleDot, Clock, Compass, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Roadmap: React.FC = () => {
  const stages = [
    {
      title: 'Released & Active',
      status: 'Current Platform',
      icon: CheckCircle2,
      iconColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      features: [
        { name: 'Campaign Routing', desc: 'Pre-planned routes and GPS logs for field consultants.' },
        { name: 'On-Site Lead Capturing', desc: 'Document photos and loan interest sheets captured offline.' },
        { name: 'Smart Allocation Engine', desc: 'Auto-allocation of collection folders to agents near debtor houses.' },
        { name: 'POS/Debit Order Capture', desc: 'Field-level tap payments and instant balance adjustments.' },
        { name: 'Branch Operations Ledger', desc: 'Opening check reconciliation, expenses logging, and receipt uploads.' }
      ]
    },
    {
      title: 'In Development',
      status: 'Target: Q3-Q4 2026',
      icon: CircleDot,
      iconColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      features: [
        { name: 'Credit Scorecard Builder', desc: 'Allow branch managers to specify rules (e.g. salary multipliers, debt ratios).' },
        { name: 'Credit Bureau Pull Hooks', desc: 'API connectivity to local bureaus to pull histories during assessment.' },
        { name: 'Multi-tiered Approvals', desc: 'Custom approval workflows based on loan amounts (e.g., teller, manager, head office).' },
        { name: 'Automated Loan Applications', desc: 'Self-complete borrower forms that auto-trigger bureau logs.' }
      ]
    },
    {
      title: 'Upcoming Modules',
      status: 'Target: Q1-Q2 2027',
      icon: Clock,
      iconColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      features: [
        { name: 'Flexible Interest Engine', desc: 'Support payroll lending, simple interest, compounding setups, and penalty caps.' },
        { name: 'Dynamic Repayment Scheduler', desc: 'Generate repayment structures linked to payroll deduction dates.' },
        { name: 'Instant Statements PDF', desc: 'Tellers or agents can generate PDF transaction logs in one tap.' },
        { name: 'USSD Application Flow', desc: 'Allow borrowers to check balances and request top-ups via USSD codes.' }
      ]
    },
    {
      title: 'Future Planning',
      status: 'Target: Q3-Q4 2027',
      icon: Compass,
      iconColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      features: [
        { name: 'WhatsApp Borrower Portal', desc: 'Interactive chat interface to fetch statements, check balances, and file PTPs.' },
        { name: 'Biometric Field Signatures', desc: 'Digital signatures verified on agent mobile screens using touch IDs.' },
        { name: 'AI Collection Scoring', desc: 'Machine learning recommendation models sorting debtors by probability of payment.' }
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Product Roadmap" 
        title="Pillar 4: Loan Management Engine & Future Releases" 
        subtitle="Explore our upcoming credit tools, including scoring builders, compounding interest setups, statements, and WhatsApp customer portals."
      />

      {/* Main Roadmap Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Platform Development Board
          </h2>
          <p className="text-slate-500 text-sm">
            We actively coordinate with our customer advisory panel to prioritize operational modules. See what is cooking below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-950">{stage.title}</h3>
                    <span className="text-[10px] text-slate-500 font-semibold font-mono">{stage.status}</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${stage.iconColor}`}>
                    <stage.icon className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-4 border-t border-slate-50 pt-4">
                  {stage.features.map((feat, fIdx) => (
                    <div key={fIdx} className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        {feat.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed pl-3">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board Alert */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="bg-blue-600/10 text-blue-400 p-3 rounded-2xl border border-blue-500/20 w-fit mx-auto">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Influence Our Product Board</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Are you a finance manager or compliance officer with specific requirements for interest audits, USSD integrations, or local payroll banks? Join our customer advisory board to test release modules early.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="primary" className="font-bold gap-2 bg-blue-600 hover:bg-blue-500">
                <MessageSquare className="h-4 w-4" /> Request Board Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
