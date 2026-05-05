import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-navy-900 py-20 border-t border-slate-200">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 max-w-md">
            <Logo className="mb-6" />
            <div className="space-y-4">
              <p className="text-slate-500 text-sm leading-relaxed italic">
                Simplifying AUSTRAC complexity through targeted intelligence.
              </p>
            </div>
          </div>

          {/* Footer columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Platform */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest border-b border-emerald-500/20 pb-2">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Case Management</li>
                <li>KYC / KYB</li>
                <li>Risk Scoring</li>
                <li>Screening</li>
                <li>Reporting Support</li>
                <li>Ongoing Monitoring</li>
                <li>Audit Logs</li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest border-b border-emerald-500/20 pb-2">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>AML Readiness Assessment</li>
                <li>AML Program Setup</li>
                <li>Staff Training</li>
                <li>Compliance Workflow Support</li>
                <li>Monitoring & Reporting</li>
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest border-b border-emerald-500/20 pb-2">Industries</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Real Estate</li>
                <li>Accounting</li>
                <li>Legal & Conveyancing</li>
                <li>Professional Services</li>
                <li>Tranche 2 Entities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-[12px] leading-relaxed text-slate-400 max-w-4xl">
                NextGen AML provides AML/CTF workflow technology and compliance support services. Information on this website is general in nature and should not be treated as legal advice. Businesses should obtain independent legal or regulatory advice for their specific obligations.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                © 2026 NextGen AML
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
