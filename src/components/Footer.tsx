import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Globe, Share2, MessageSquare } from 'lucide-react';
import { Button } from './ui/Button';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-900 to-indigo-950 p-8 rounded-3xl border border-blue-800/30">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to streamline your field operations?</h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Join leading micro-lenders, payroll lenders, and collection teams across the continent leveraging SuccessPulse.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="white" className="w-full sm:w-auto">
                Book a Free Demo
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 border-none">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Success<span className="text-blue-500">Pulse</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The complete Field Lending Operations Platform designed specifically for African credit environments. One platform for campaigns, lending operations, collections, and branch control.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-500 transition-all">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Platform</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/platform" className="hover:text-white transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/campaigns" className="hover:text-white transition-colors">Campaign Management</Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-white transition-colors">Collections & Recovery</Link>
              </li>
              <li>
                <Link to="/branch-ops" className="hover:text-white transition-colors">Branch Operations</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Book a Demo</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact Details</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <a href="mailto:info@successpulse.co" className="hover:text-white transition-colors">info@successpulse.co</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <a href="tel:+27110000000" className="hover:text-white transition-colors">+27 (0) 11 000 0000</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  Johannesburg, South Africa<br />
                  Nairobi, Kenya<br />
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} SuccessPulse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
