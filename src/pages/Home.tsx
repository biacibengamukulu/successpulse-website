import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Shield, BarChart3, ArrowRight, CheckCircle2, 
  Map, UserCheck, DollarSign, Wallet, ClipboardCheck, ArrowUpRight,
  Sparkles, Calendar, Smartphone, Building2, Banknote, UsersRound, ClipboardList, LockKeyhole, WifiOff
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductScreenshot } from '../components/ProductScreenshot';
import { CountUpMetric } from '../components/CountUpMetric';

export const Home: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-1',
      title: 'Campaign & Growth',
      icon: TrendingUp,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      description: 'Supercharge your agent network and capture loan enquiries in the field.',
      features: ['Weekly & action plans', 'Field agent GPS mapping', 'Lead capture & tracking', 'Consultant productivity metrics'],
      link: '/campaigns'
    },
    {
      id: 'pillar-2',
      title: 'Collections & Recovery',
      icon: Shield,
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      description: 'Streamline promise to pays, cards, cash, and upload POPs from the field.',
      features: ['Excel/system ledger import', 'Smart account allocation', 'Consultant collection lists', 'Cash/POS/Debit order capture'],
      link: '/collections'
    },
    {
      id: 'pillar-3',
      title: 'Branch Operations',
      icon: BarChart3,
      color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      description: 'Maintain strict control of opening balances, vault limits, and audit trails.',
      features: ['Daily operations record', 'Working cash allocations', 'Expense & receipt logs', 'Branch manager dual approval'],
      link: '/branch-ops'
    },
    {
      id: 'pillar-4',
      title: 'Loan Management Roadmap',
      icon: Sparkles,
      color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      description: 'The upcoming core engine for interest calcs, assessment, and portals.',
      features: ['Credit scoring logic', 'Interest calculation engine', 'Customer self-service portal', 'Repayment scheduler'],
      link: '/roadmap'
    }
  ];

  const steps = [
    { num: '01', title: 'Plan & Allocate', desc: 'Managers set weekly consultant goals and bulk-import inactive ledgers.' },
    { num: '02', title: 'Field Operations', desc: 'Agents run visits offline or online, collecting leads or cash payments.' },
    { num: '03', title: 'Capture POP & Receipts', desc: 'Proof of payments are captured on POS, debit orders, or cash receipt uploads.' },
    { num: '04', title: 'Approve & Reconcile', desc: 'Branch managers review records, reconcile cash/expenses, and post ledger balances.' },
  ];

  const valueStrip = [
    '4 operational pillars',
    '11 operational workflows',
    'Role-based security',
    'Full audit trail',
    'Offline-capable field operations',
    'Built for African lending operations'
  ];

  const trustCards = [
    { icon: Building2, title: 'Microfinance & branch lenders', desc: 'Coordinate branch teams, consultants, collections, and daily cash controls.' },
    { icon: Banknote, title: 'Payroll and debit-order lenders', desc: 'Track debit-order follow-ups, PTP commitments, and field recovery activity.' },
    { icon: UsersRound, title: 'Collection teams', desc: 'Route inactive accounts, capture POPs, and reconcile field collections faster.' },
    { icon: ClipboardList, title: 'Finance and operations managers', desc: 'Give managers real-time visibility into visits, balances, receipts, and exceptions.' },
    { icon: CheckCircle2, title: 'UAT-ready platform', desc: 'Structured for operational demos, branch acceptance testing, and staged rollout.' },
    { icon: LockKeyhole, title: 'Audit-focused branch controls', desc: 'Reduce cash leakage with role-based approvals, immutable logs, and manager sign-off.' }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white py-20 lg:py-32">
        {/* Ambient background blur circles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          {/* Fine pattern layout */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text details */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/25">
                <Sparkles className="h-3 w-3" /> Field Lending Operations Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                One platform for campaigns, lending, collections, and <span className="text-blue-500">branch control</span>.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Recover more debt, reduce cash leakage, improve consultant productivity, and give managers real-time visibility across field visits, branch cash, and collections performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button as="span" variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                    Book a Live Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/platform">
                  <Button as="span" variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800">
                    Explore Platform
                  </Button>
                </Link>
              </div>
              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> Built for African lending
                </div>
                <div className="flex items-center gap-1.5">
                  <WifiOff className="h-4 w-4 text-blue-500" /> Offline-capable field ops
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> Strict manager approvals
                </div>
              </div>
            </div>

            {/* Dashboard Mock Preview */}
            <div className="lg:col-span-6 w-full max-w-2xl mx-auto lg:max-w-none animate-float">
              <ProductScreenshot
                src="/product-screenshots/dashboard.png"
                alt="SuccessPulse field lending dashboard preview"
                label="Dashboard Preview"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 sm:grid-cols-3 lg:grid-cols-6">
          {valueStrip.map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 px-3 py-4 text-center text-xs font-bold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Product Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            SuccessPulse Core Pillars
          </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            The platform is built on 4 foundational modules that recover more debt, control branch cash, reduce leakage, and prepare your operation for full digital lending.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className={`p-3 rounded-2xl border w-fit ${pillar.color}`}>
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{pillar.description}</p>
                </div>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-1 w-1 rounded-full bg-blue-600 shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <Link to={pillar.link} className="inline-flex min-h-6 items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more about {pillar.title} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Deployment Confidence</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for African Field Lending Operations
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              SuccessPulse is shaped for lenders managing branch offices, field consultants, cash/POS collections, and operational audit risk across emerging markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Step-by-step Journey</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How SuccessPulse Simplifies Field Operations
            </h2>
            <p className="text-slate-500 text-sm">
              We sync office targets and ledger entries directly with field agents' mobiles, logging GPS positions, collecting payments, and auditing branches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4 group">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 shadow-sm group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-950">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Operations Value</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Maximize Field Team Output & Secure Cash Flows
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Field credit environments present unique challenges like weak cellular signals, cash transport risks, and manual branch logs. SuccessPulse is engineered to solve these specifically.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Recover More Debt', desc: 'Prioritize inactive ledgers, route cases to consultants, and capture promise-to-pay outcomes in the field.' },
                { title: 'Reduce Cash Leakage', desc: 'Every collected cent is recorded on-site, backed by a matching receipt and manager sign-off.' },
                { title: 'Control Branch Cash', desc: 'Track opening balances, working cash, expenses, vault limits, and daily closeout exceptions.' },
                { title: 'Prepare for Digital Lending', desc: 'Move from field operations into a roadmap for credit scoring, statements, portals, and repayment scheduling.' },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-5 w-5 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-950">{benefit.title}</div>
                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white relative overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-lg font-bold">Lender Operational Improvements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CountUpMetric value={38} prefix="+" suffix="%" label="Field productivity lift" />
                <CountUpMetric value={24} prefix="+" suffix="%" label="Recovery rate improvement" />
                <CountUpMetric value={80} prefix="-" suffix="%" label="Cash audit time reduction" />
                <CountUpMetric value={0} suffix="%" label="Target reconciled errors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="bg-slate-50 border-t border-slate-200/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Engineered For Security & Compliance
            </h2>
            <p className="text-slate-500 text-sm">
              Explore critical system highlights built to satisfy branch compliance, managers, and field staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Map, title: 'Smart Auto-Allocation', desc: 'Import collections sheets, and let our allocator distribute accounts to consultants based on location zip codes and agent loads.' },
              { icon: UserCheck, title: 'Manager Dual Signature', desc: 'Every POS tap receipt, hand-reconciled cash amount, or petty expense requires digital confirmation from a branch manager before posting.' },
              { icon: DollarSign, title: 'Universal Cash Capture', desc: 'Accept physical cash, POS card terminal swipes, or debit order confirmations. Generate digital proof of payments in real-time.' },
              { icon: Wallet, title: 'Working Cash Accounts', desc: 'Track cash disbursed to agents for operations, verify daily returns, and log business expenses with mandatory photo receipts.' },
              { icon: ClipboardCheck, title: 'Full Audit Logs', desc: 'Review immutable stamps detailing every lead entry, visit record, PTP collection, and branch cash register modification.' },
              { icon: Smartphone, title: 'Mobile Offline Storage', desc: 'Field consultants run our app securely without stable internet, logging GPS locations that auto-commit on connection.' }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs space-y-4 hover:border-blue-200 transition-colors">
                <div className="bg-blue-500/10 text-blue-600 p-2.5 rounded-xl w-fit">
                  <highlight.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-950">{highlight.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pricing Teaser</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Flexible Tiers Built to Scale with Your Branch Network
            </h2>
          </div>
          <Link to="/pricing">
            <Button as="span" variant="outline" className="gap-1 bg-white">
              Request Pricing <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', desc: 'For independent lenders starting field automation.', price: 'Schedule Discovery Call' },
            { name: 'Growth', desc: 'Perfect for established operations with multiple branch offices.', price: 'Schedule Discovery Call', highlight: true },
            { name: 'Enterprise', desc: 'Custom enterprise settings, unlimited branches, dedicated integrations.', price: 'Schedule Discovery Call' }
          ].map((tier, i) => (
            <div key={i} className={`bg-white border rounded-3xl p-6 flex flex-col justify-between shadow-xs ${
              tier.highlight ? 'border-blue-600 ring-1 ring-blue-600 bg-blue-50/10' : 'border-slate-200/70'
            }`}>
              <div>
                {tier.highlight && (
                  <span className="inline-block text-[10px] bg-blue-600 text-white font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-base font-bold text-slate-950">{tier.name}</h3>
                <p className="text-slate-500 text-xs mt-1">{tier.desc}</p>
                <div className="text-2xl font-bold text-slate-900 mt-6">{tier.price}</div>
              </div>
              <div className="pt-6">
                <Link to="/contact">
                  <Button as="span" variant={tier.highlight ? 'primary' : 'outline'} className="w-full text-xs">
                  Request Pricing
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Pillar 4 Roadmap Preview</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Future-Proofing Your Credit Operations: Loan Management Engine
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are building the complete loan lifecycle suite directly into the operations terminal. Manage credit evaluation, setup automated repayments, and run customer account portals.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" /> Automated scoring rules
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" /> Repayment scheduling
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" /> WhatsApp portal hookup
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" /> Instant statement generation
              </div>
            </div>
            <div className="pt-4">
              <Link to="/roadmap">
                <Button as="span" variant="white" className="gap-1">
                  View Full Roadmap <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 border border-slate-800 rounded-3xl p-6 bg-slate-950/60 relative">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" /> Upcoming Release Timeline
            </h3>
            <div className="space-y-4">
              {[
                { phase: 'Q3 2026', title: 'Credit assessment workflows', desc: 'Custom credit scorecard designer and automated bureau pull hooks.' },
                { phase: 'Q4 2026', title: 'Interest Calculation Engine', desc: 'Custom compounding setups, penalty structures, and grace period rules.' },
                { phase: 'Q1 2027', title: 'Borrower WhatsApp portal', desc: 'Allow self-service statement downloads and collection callback bookings.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-4 border-b border-slate-900 last:border-0 last:pb-0">
                  <span className="bg-blue-600/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-500/20 shrink-0">
                    {item.phase}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-white">{item.title}</div>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-white space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Book a Live Demo with SuccessPulse
            </h2>
            <p className="text-blue-100 text-sm font-light leading-relaxed">
              Book a live demonstration tailored to your branch size, collections workflow, manager controls, and digital lending roadmap.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button as="span" variant="white" size="lg" className="w-full sm:w-auto text-blue-650 hover:bg-slate-100 font-bold">
                  Book a Live Demo
                </Button>
              </Link>
              <Link to="/platform">
                <Button as="span" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/35 hover:bg-white/10">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
