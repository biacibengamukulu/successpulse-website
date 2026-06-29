import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { 
  TrendingUp, Calendar, MapPin, Users, Smartphone 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const CampaignManagement: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: 'Structured Weekly Plans',
      desc: 'Managers pre-plan weekly route files. Agents open their dashboard to see targeted streets, customer appointments, and target leads.'
    },
    {
      icon: MapPin,
      title: 'GPS-Tracked Field Visits',
      desc: 'Pins are dropped automatically during check-ins. Track exactly where leads were met, with offline GPS coordinates logging to prevent faked visits.'
    },
    {
      icon: Smartphone,
      title: 'On-Site Lead Generation',
      desc: 'No more physical forms or lost scraps of paper. Agents capture client name, ID numbers, income files, and contact details directly on mobile.'
    },
    {
      icon: Users,
      title: 'Consultant Productivity Metrics',
      desc: 'Monitor agent scorecards. Identify your top performers by lead conversion rates, visit completion speeds, and loan application success rates.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Pillar 1: Campaign & Growth" 
        title="Automate Field Campaigns & Track Agent Productivity" 
        subtitle="Empower field consultants with structured weekly plans, offline lead capture, GPS check-ins, and live team leaderboard scorecards."
      />

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Field Operations Platform</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Structured Paths & High-Speed Lead Capturing
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Managing a dispersed field agent team is difficult without real-time tracking. SuccessPulse provides branch managers with a digital map of agent routes, automatically monitoring check-ins and lead captures.
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

          {/* Interactive Agent Phone Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] bg-slate-950 border-[10px] border-slate-800 rounded-[40px] shadow-2xl overflow-hidden relative aspect-[9/19]">
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700"></div>
              </div>

              {/* Screen Body */}
              <div className="h-full p-5 pt-8 text-white flex flex-col justify-between text-xs space-y-4 relative z-10">
                {/* Agent Welcome header */}
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <div className="text-[10px] text-slate-400">Field Agent Console</div>
                    <div className="font-bold text-sm">Lerato Dlamini</div>
                  </div>
                  <span className="bg-emerald-500/15 text-emerald-450 border border-emerald-500/30 px-2 py-0.5 rounded font-bold text-[9px]">
                    Online
                  </span>
                </div>

                {/* Today's Route card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-3">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-450 tracking-wider">
                    <span>Today's Actions</span>
                    <span className="text-blue-400">Route 14B</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { client: 'Dumisani Dube', type: 'Lead Check-in', time: '09:00 AM', status: 'Visited', check: true },
                      { client: 'Zama Buthelezi', type: 'Loan Enquiries', time: '11:30 AM', status: 'Pending', check: false },
                      { client: 'Mpho Modise', type: 'Inactive Lead', time: '02:00 PM', status: 'Pending', check: false }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-950/60 border border-slate-850">
                        <div>
                          <div className="font-semibold text-white">{row.client}</div>
                          <div className="text-[9px] text-slate-500">{row.type} • {row.time}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                          row.check ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capture Lead Button */}
                <div className="space-y-2">
                  <div className="bg-blue-600 hover:bg-blue-500 font-bold py-2.5 rounded-xl text-center text-white cursor-pointer shadow-md shadow-blue-600/20 transition-colors">
                    + Capture New Lead
                  </div>
                  <div className="bg-slate-900 border border-slate-800 text-slate-350 hover:text-white font-semibold py-2 rounded-xl text-center cursor-pointer transition-colors">
                    View Weekly Targets
                  </div>
                </div>

                {/* Status Bar footer */}
                <div className="text-center text-[9px] text-slate-500 border-t border-slate-900 pt-3 flex justify-between">
                  <span>GPS Signal: Strong</span>
                  <span>Sync: 3 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Analytics Section */}
      <section className="bg-slate-100/50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Productivity Scorecards</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Measure What Matters: Lead-to-Disbursement Ratios
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              SuccessPulse does not just track location; it metrics the success of campaigns. Gain immediate feedback on which lead generation campaigns yield high-paying loan clients and which agents maintain the highest conversion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Agent Daily Target</div>
                <div className="text-2xl font-black text-slate-900 mt-2">12 Visits</div>
                <p className="text-slate-500 text-[10px] mt-1">Guarantees market visibility and consistent branch pipeline growth.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Lead Conversion</div>
                <div className="text-2xl font-black text-blue-600 mt-2">68.4%</div>
                <p className="text-slate-500 text-[10px] mt-1">From initial enquiry registration to completed assessment file.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-500" /> Team Performance Leaderboard
            </h3>
            <div className="space-y-3 text-xs">
              {[
                { agent: 'Lerato Dlamini', branch: 'Soweto Central', leads: '42 leads captured', performance: '102%', color: 'w-full bg-emerald-500' },
                { agent: 'Kofi Mensah', branch: 'Accra West', leads: '38 leads captured', performance: '95%', color: 'w-[95%] bg-blue-500' },
                { agent: 'Chinedu Okafor', branch: 'Lagos Island', leads: '32 leads captured', performance: '80%', color: 'w-[80%] bg-blue-500' }
              ].map((row, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold text-white">{row.agent}</span>
                      <span className="text-[10px] text-slate-500 ml-2">({row.branch})</span>
                    </div>
                    <span className="font-bold text-slate-200">{row.performance}</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${row.color}`}></div>
                  </div>
                  <div className="text-[9px] text-slate-500">{row.leads}</div>
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
            Ready to increase your field agent productivity?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Contact our business analysts to discuss how your field team can start planning, routing, and capturing leads efficiently.
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
