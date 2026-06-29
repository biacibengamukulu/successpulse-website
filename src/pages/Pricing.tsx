import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { Check, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Ideal for localized microfinance businesses starting to automate field visits.',
      price: 'Contact Sales',
      period: 'per month',
      features: [
        'Up to 15 Field Agents',
        '2 Branch Office Terminals',
        'Weekly planning sheets',
        'Basic lead capture forms',
        'Manual customer allocation',
        'Cash receipt logging',
        'Manager approvals queue',
        'Weekly CSV ledger exports'
      ],
      cta: 'Contact us for pricing',
      highlight: false
    },
    {
      name: 'Growth',
      description: 'Optimized for established lending networks operating multiple branches.',
      price: 'Contact Sales',
      period: 'per month',
      features: [
        'Up to 75 Field Agents',
        '10 Branch Office Terminals',
        'Weekly & action plan planner',
        'GPS check-in validation',
        'Excel ledger imports',
        'Smart auto-allocation engine',
        'POS & Card tap captures',
        'Expense receipt photos upload',
        'Daily balancing & audit logs',
        'SMS PTP payment reminders'
      ],
      cta: 'Contact us for pricing',
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'Built for large-scale payroll lenders and nationwide collections networks.',
      price: 'Contact Sales',
      period: 'tailored setup',
      features: [
        'Unlimited Field Agents',
        'Unlimited Branch Offices',
        'Dedicated server hosting',
        'Bureau credit scoring API hooks',
        'Core banking DB integrations',
        'Custom SMS gateway hookup',
        'Custom workflow builder',
        '24/7 Priority support hotline',
        'Dedicated Account Manager'
      ],
      cta: 'Contact us for pricing',
      highlight: false
    }
  ];

  const comparisonMatrix = [
    { feature: 'Field Agent Users', starter: 'Up to 15', growth: 'Up to 75', enterprise: 'Unlimited' },
    { feature: 'Branch Office Terminals', starter: '2 branches', growth: '10 branches', enterprise: 'Unlimited' },
    { feature: 'GPS Tracking', starter: 'Basic check-in', growth: 'Route history + Offline GPS', enterprise: 'Real-time agent tracking' },
    { feature: 'Cash & Cards POS Capture', starter: 'Cash only', growth: 'Cash + Card POS swipe', enterprise: 'All methods + API banks' },
    { feature: 'Manager Approvals Queue', starter: 'Standard queue', growth: 'Dual control + Limit checks', enterprise: 'Custom approval flow' },
    { feature: 'Ledger Integrations', starter: 'CSV Export', growth: 'CSV/Excel Import-Export', enterprise: 'Live Core Database Sync' },
    { feature: 'System Support', starter: 'Email Support', growth: 'Email & WhatsApp Chat', enterprise: '24/7 Dedicated Support' }
  ];

  const faqs = [
    {
      q: 'Do you charge per consultant or per branch?',
      a: 'We offer flexible volume packages tailored to your field headcount. The Starter package is capped at 15 agents, and Growth caps at 75 agents. We can increase user limits within billing cycles easily.'
    },
    {
      q: 'What local integrations does SuccessPulse support?',
      a: 'Our Enterprise tier supports API hookups to credit assessment databases, local credit bureaus, WhatsApp communication modules, and core lending ledgers.'
    },
    {
      q: 'How does the offline mode behave?',
      a: 'If a field consultant enters a neighborhood with poor internet connection, they can check in, fill loan requests, and capture payments as normal. The information is encrypted locally and auto-syncs when they find cell signals.'
    },
    {
      q: 'Can we configure custom currencies?',
      a: 'Yes, SuccessPulse supports South African Rand (ZAR), Kenyan Shilling (KES), Nigerian Naira (NGN), Ghanaian Cedi (GHS), and USD. Currency parameters are branch-specific.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Pricing Plans" 
        title="Simple, Transparent Branch Licensing Plans" 
        subtitle="Select the operational capacity that matches your consultant network. Pay annually to receive a 15% operations discount."
      />

      {/* Monthly / Annual Billing Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex items-center gap-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                billingPeriod === 'monthly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingPeriod === 'annual' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Annual Billing
              <span className="bg-blue-100 text-blue-600 text-[9px] px-2 py-0.5 rounded-full font-bold">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className={`bg-white border rounded-3xl p-8 flex flex-col justify-between shadow-sm relative ${
              tier.highlight ? 'border-blue-600 ring-1 ring-blue-600 lg:scale-[1.03]' : 'border-slate-200/70'
            }`}>
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  Recommended for Branches
                </span>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{tier.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">{tier.description}</p>
                </div>
                <div className="border-y border-slate-100 py-6">
                  <div className="text-3xl font-black text-slate-900">{tier.price}</div>
                  <span className="text-slate-400 text-xs mt-1 block">Billing adjusted by operational volume</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-655">
                      <Check className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link to="/contact">
                  <Button variant={tier.highlight ? 'primary' : 'outline'} className="w-full">
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed comparison matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-slate-950 text-center">Feature Matrix Details</h2>
        <div className="border border-slate-200/60 rounded-3xl overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Platform Capabilities</th>
                  <th className="p-4 sm:p-5">Starter</th>
                  <th className="p-4 sm:p-5">Growth</th>
                  <th className="p-4 sm:p-5">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/55">
                    <td className="p-4 sm:p-5 font-semibold text-slate-950">{row.feature}</td>
                    <td className="p-4 sm:p-5">{row.starter}</td>
                    <td className="p-4 sm:p-5 font-medium text-slate-900">{row.growth}</td>
                    <td className="p-4 sm:p-5">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-2xl font-bold text-slate-950 text-center">Pricing & Integration FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-xs space-y-2">
                <h3 className="text-sm font-bold text-slate-950 flex items-start gap-2">
                  <HelpCircle className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Looking for something custom?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            If you have a collection agency with hundreds of consultants or custom database requirements, our development team is ready to design a custom package.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="primary" className="font-bold gap-2">
                <Mail className="h-4 w-4" /> Contact Custom Accounts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
