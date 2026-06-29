import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ShieldCheck, Compass, Globe, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Trust & Audit Stability',
      desc: 'Credit operations require absolute precision. We maintain strict compliance, manager dual signatures, and immutable records so you are always audit-ready.'
    },
    {
      icon: Compass,
      title: 'African Market Focus',
      desc: 'We build specifically for local credit environments, supporting offline syncs, mobile receipt uploads, POS integrations, and localized currencies.'
    },
    {
      icon: Users2,
      title: 'Field Team Empowerment',
      desc: 'We design software that agents actually enjoy using. Our mobile app works offline, presents prioritized tasks, and logs route goals simply.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="About SuccessPulse" 
        title="Modern Operations Technology for Credit Providers" 
        subtitle="Our mission is to eliminate cash leakages, digitize agent visits, and automate branch audits for microlenders, payroll credit teams, and collections managers."
      />

      {/* Corporate Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Positioning</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Solving Decentralized Credit Risks with Solid Tech
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Decentralized branch networks, rural agent visits, and cash collection flows present distinct operational problems. Manual record-keeping leads to cash reconciliation delays, high bad debt ratios, and teller fraud risks.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              SuccessPulse was built by credit risk specialists and fintech developers who realized that field credit teams lacked a unified operations system. We connected campaign targets, collection lists, receipt audits, and general ledgers in one secure cloud.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-100 rounded-3xl p-8 border border-slate-200/50 space-y-6">
            <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" /> Regional Offices & Scope
            </h3>
            <div className="space-y-4 text-xs text-slate-650">
              <div className="pb-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900">Johannesburg, South Africa</h4>
                <p className="mt-1">Head office coordinating development, POS terminal integrations, and southern African compliance.</p>
              </div>
              <div className="pb-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900">Nairobi, Kenya</h4>
                <p className="mt-1">East African hub focusing on mobile wallets, USSD integrations, and micro-finance field plans.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Lagos, Nigeria</h4>
                <p className="mt-1">West African branch supporting payroll integrations, credit assessment modules, and recovery allocation audits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-2xl font-bold text-slate-950 text-center">Our Core Operating Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-xs space-y-4 hover:border-blue-300 transition-colors">
                <div className="bg-blue-600/10 text-blue-600 p-2.5 rounded-xl w-fit border border-blue-500/15">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Want to meet our operational analysts?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Book a call to review your current branch structures and field travel spreadsheets. We will outline a deployment roadmap.
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
