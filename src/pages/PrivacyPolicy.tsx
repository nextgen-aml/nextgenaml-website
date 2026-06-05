import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Mail, 
  MapPin
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<'all' | 'policy' | 'appendices'>('all');
  const [activeSection, setActiveSection] = useState('introduction');

  // Table of Contents sections
  const sections = [
    { id: 'introduction', label: 'Introduction', type: 'policy' },
    { id: 'scope', label: '1. Scope of This Policy', type: 'policy' },
    { id: 'what-we-collect', label: '2. What Info Do We Collect?', type: 'policy' },
    { id: 'why-we-collect', label: '3. Why We Collect & Use Info', type: 'policy' },
    { id: 'legal-basis', label: '4. Legal Basis for Processing', type: 'policy' },
    { id: 'marketing', label: '5. Direct Marketing', type: 'policy' },
    { id: 'disclosure', label: '6. Disclosing Personal Info', type: 'policy' },
    { id: 'transfers', label: '7. International Data Transfers', type: 'policy' },
    { id: 'security', label: '8. Security Measures', type: 'policy' },
    { id: 'biometrics', label: '9. Biometric Information', type: 'policy' },
    { id: 'automated-decisions', label: '10. Automated Decisions', type: 'policy' },
    { id: 'retention', label: '11. Data Retention', type: 'policy' },
    { id: 'rights', label: '12. Your Privacy Rights', type: 'policy' },
    { id: 'cookies', label: '13. Cookies & Analytics', type: 'policy' },
    { id: 'breaches', label: '14. Notifiable Data Breaches', type: 'policy' },
    { id: 'complaints', label: '15. Complaints & Escalation', type: 'policy' },
    { id: 'contact', label: '16. Contact Details', type: 'policy' },
    { id: 'changes', label: '17. Changes to This Policy', type: 'policy' },
    { id: 'appendix-a', label: 'Appendix A: Cookie Summary', type: 'appendices' },
    { id: 'appendix-b', label: 'Appendix B: DVS HUB Policy', type: 'appendices' },
  ];

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSections = sections.filter(sec => 
    activeTab === 'all' || sec.type === activeTab
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4 }}
      className="bg-white min-h-screen pt-12 pb-24 font-sans text-slate-800 selection:bg-slate-100 selection:text-slate-900"
    >
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        
        {/* Minimal Typography Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Building className="h-4 w-4 text-slate-400" />
              NextGen AML Pty Ltd
            </span>
            <span className="text-slate-300">/</span>
            <span>ABN: 31 551 154 091</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Last Updated: June 2026</span>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sidebar (Left, Sticky) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 lg:max-h-[85vh] lg:overflow-y-auto pr-2">
            <div className="pb-2 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Table of Contents
              </h3>
            </div>

            {/* Minimal Filter Tabs */}
            <div className="flex gap-4 border-b border-slate-100 pb-2 text-xs font-semibold">
              <button 
                onClick={() => setActiveTab('all')}
                className={`pb-1 transition-all ${activeTab === 'all' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('policy')}
                className={`pb-1 transition-all ${activeTab === 'policy' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Policy
              </button>
              <button 
                onClick={() => setActiveTab('appendices')}
                className={`pb-1 transition-all ${activeTab === 'appendices' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Appendices
              </button>
            </div>

            {/* Scroll Link List */}
            <nav className="space-y-0.5">
              {filteredSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left py-2 text-sm transition-all flex items-center justify-between group ${
                    activeSection === sec.id 
                      ? 'text-slate-900 font-bold border-l-2 border-slate-950 pl-3' 
                      : 'text-slate-500 pl-3 hover:text-slate-900 border-l border-slate-100'
                  }`}
                  id={`link_${sec.id}`}
                >
                  <span className="truncate">{sec.label}</span>
                </button>
              ))}
            </nav>

            {/* Sleek Support Contact */}
            <div className="border border-slate-200/60 rounded-lg p-5 text-xs space-y-3 bg-slate-50/40">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-slate-500" />
                Need Assistance?
              </div>
              <p className="text-slate-500 leading-relaxed">
                If you require this notice in an alternative format, or have specific delivery circumstances, please contact our desks.
              </p>
              <a 
                href="mailto:privacy@nextgenaml.com.au" 
                className="block text-center font-mono font-bold border border-slate-200 bg-white text-slate-800 py-1.5 rounded hover:bg-slate-50 hover:text-slate-950 transition-colors uppercase select-all"
              >
                privacy@nextgenaml.com.au
              </a>
            </div>
          </aside>

          {/* Main Legal Content Pane */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introduction Section */}
            <section id="introduction" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                Introduction
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  NextGen AML Pty Ltd is an Australian company providing anti-money laundering (AML) and compliance technology services to regulated businesses. We are committed to protecting your privacy and handling personal information transparently, responsibly, and securely.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, store, disclose and protect personal information, and sets out your rights in relation to that information. We comply with the <span className="font-semibold text-slate-800">Privacy Act 1988 (Cth)</span> (as amended by the <span className="font-semibold text-slate-800">Privacy and Other Legislation Amendment Act (2024)</span>), <span className="font-semibold text-slate-800">The Australian Privacy Principles (APPs)</span>, <span className="font-semibold text-slate-800">Privacy and Data Protection Act 2014 (VIC)</span> and <span className="font-semibold text-slate-800">Identity Verification Services Act 2023 (Cth)</span>.
                </p>
                <p>
                  Nothing in this policy limits any rights you may have under the Privacy Act 1988, the Spam Act 2003, or any other applicable Australian or international law.
                </p>
                <p>
                  If you have any specific needs or require this notice in an alternative format, or if you need assistance due to any special circumstances, please contact us.
                </p>
              </div>
            </section>

            {/* 1. Scope of This Policy */}
            <section id="scope" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                1. Scope of This Policy
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>This policy applies to:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-650">
                  <li>visitors to our website(s) and digital platforms;</li>
                  <li>customers, prospects and suppliers who deal with us directly;</li>
                  <li>end users and clients whose identity is verified through our platform on behalf of our customers; and</li>
                  <li>any person whose personal information appears in our systems.</li>
                </ul>
                <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-lg text-xs sm:text-sm">
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Our platform also processes data uploaded by, or on behalf of, our regulated customers (for example, their clients' identity records). For that data, we act as a <span className="font-semibold text-slate-800">data processor</span> under our customer contracts. The relevant customer's own privacy notice governs that processing. If we receive a request about such data, we will forward it to the relevant customer unless we are required by law to act ourselves.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. What Personal Information Do We Collect */}
            <section id="what-we-collect" className="space-y-6 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                2. What Personal Information Do We Collect?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <div className="p-4 bg-slate-50 border-l-2 border-slate-400 text-slate-700">
                  <p className="text-xs sm:text-sm font-medium">
                    "Personal information" means information or an opinion about an identified, or reasonably identifiable, individual, whether true or not and in any form. This includes sensitive information (such as biometric and identity document data) that attracts heightened protection under the APPs.
                  </p>
                </div>
                <p>
                  The table below summarises the categories of personal information we collect and why:
                </p>
                
                {/* Responsive Table 1 */}
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-800">
                        <th className="p-3 font-semibold border-r border-slate-200 w-1/4">Source</th>
                        <th className="p-3 font-semibold border-r border-slate-200 w-1/2">Typical Data Collected</th>
                        <th className="p-3 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900 align-top">
                          Directly from you <span className="font-normal text-slate-400 block text-[11px] mt-0.5">(forms, calls, events, account setup)</span>
                        </td>
                        <td className="p-3 border-r border-slate-200 align-top text-slate-650">
                          Name, job title, employer, email, phone, billing details, identity documents, any other information you voluntarily provide
                        </td>
                        <td className="p-3 align-top text-slate-500">
                          Account administration, service delivery, communications
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900 align-top">
                          End Users / Clients <span className="font-normal text-slate-400 block text-[11px] mt-0.5">(during verification checks)</span>
                        </td>
                        <td className="p-3 border-r border-slate-200 align-top text-slate-650">
                          Full name, date of birth, address, nationality, identity document images and data, biometric data (facial geometry, liveness video), device/IP information, geolocation
                        </td>
                        <td className="p-3 align-top text-slate-500">
                          AML/CTF identity verification on behalf of Customers
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900 align-top">
                          Automatically <span className="font-normal text-slate-400 block text-[11px] mt-0.5">(cookies, analytics, logs)</span>
                        </td>
                        <td className="p-3 border-r border-slate-200 align-top text-slate-650">
                          IP address, device type, browser, pages visited, time on site, referring URL, usage statistics
                        </td>
                        <td className="p-3 align-top text-slate-500">
                          Website improvement, security monitoring
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900 align-top">
                          Third parties <span className="font-normal text-slate-400 block text-[11px] mt-0.5">(authorised sources)</span>
                        </td>
                        <td className="p-3 border-r border-slate-200 align-top text-slate-650">
                          Identity database records, AML/CTF watchlist data, credit reference data, mobile carrier verification data, government register data
                        </td>
                        <td className="p-3 align-top text-slate-500">
                          Identity verification, fraud prevention, AML/CTF compliance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  We collect personal information directly from you, from our customers on your behalf, or from authorised third parties (such as identity databases, government registers, credit reference agencies and mobile carriers) where lawful. Where we collect personal information indirectly, we take reasonable steps to notify you as required by applicable law.
                </p>
                <p className="text-slate-800 border-l-2 border-slate-900 pl-3 font-semibold">
                  For ID checks within Australia, the information you provide will be sent to the DVS Hub. Refer to Appendix B for further details.
                </p>
              </div>
            </section>

            {/* 3. Why We Collect and Use Personal Information */}
            <section id="why-we-collect" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                3. Why We Collect and Use Personal Information
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>We collect and use personal information for the following purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Verification</span>
                    <span className="text-xs sm:text-sm text-slate-500">Identity verification and AML/CTF compliance as required by AUSTRAC.</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Account management</span>
                    <span className="text-xs sm:text-sm text-slate-500">Setting up, securing and administering your user account.</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Support</span>
                    <span className="text-xs sm:text-sm text-slate-500">Responding to enquiries, portal support requests, and complaints.</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Communications</span>
                    <span className="text-xs sm:text-sm text-slate-500">Sending service announcements, legal notices and operational updates</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Marketing</span>
                    <span className="text-xs sm:text-sm text-slate-500">Marketing our products and services (see Section 5).</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Research & improvement</span>
                    <span className="text-xs sm:text-sm text-slate-500">Conducting anonymised research, analytics and service improvements.</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Fraud & security</span>
                    <span className="text-xs sm:text-sm text-slate-500">Detecting, investigating and preventing fraud, money laundering and security incidents</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Legal compliance</span>
                    <span className="text-xs sm:text-sm text-slate-500">Complying with legal and regulatory obligations (e.g., AML/CTF record-keeping, responding to lawful requests)</span>
                  </div>
                   <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Retrieval / re-use</span>
                    <span className="text-xs sm:text-sm text-slate-500">Facilitating the sharing of verified identity information with future providers upon your explicit consent.</span>
                  </div>
                  <div className="p-4 border border-slate-200/50 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1 text-sm">Other</span>
                    <span className="text-xs sm:text-sm text-slate-500">Any other purpose you expressly authorise.</span>
                  </div>
                </div>
                <p className="mt-4 font text-slate-900">
                  We do not use end-user data for our own marketing or analytics. Where processing relies on your consent, you may withdraw that consent at any time, though this will not affect the lawfulness of any processing already carried out.
                </p>
              </div>
            </section>

            {/* 4. Legal Basis for Processing */}
            <section id="legal-basis" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                4. Legal Basis for Processing
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>We process personal information only where we have a lawful basis to do so. Our legal bases include:</p>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Contractual necessity</span>
                      <span className="text-sm">Performing a contract with you or taking steps at your request before entering a contract (e.g., providing identity verification services).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Legitimate interests</span>
                      <span className="text-sm">Pursuing our legitimate interests in operating a secure and effective AML compliance platform, subject to your rights not being overridden.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Consent</span>
                      <span className="text-sm">For the Retrieval Process, biometric processing, or direct marketing communications (withdrawable at any time).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Legal obligation</span>
                      <span className="text-sm">To comply with applicable laws, regulations, court orders or lawful regulatory requests.</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-l-2 border-slate-400 bg-slate-50 text-slate-700 text-xs sm:text-sm">
                  <p>
                    For special-category or sensitive information (such as biometric data), we rely on explicit consent or another applicable lawful basis under the APPs. If you decline to provide certain information, we may be unable to complete the relevant verification process, which may affect your ability to access services provided by our customers.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Direct Marketing & Communications */}
            <section id="marketing" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                5. Direct Marketing & Communications
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We only send marketing communications to Australian business contacts where we have inferred or, preferably, express consent. We will always:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-650">
                  <li>clearly identify us as the sender;</li>
                  <li>provide a simple, one-click unsubscribe mechanism in each message; and</li>
                  <li>honour opt-out requests promptly, in line with the <span className="font-semibold">Spam Act 2003</span>.</li>
                </ul>
                <p className="border border-slate-200 p-4 rounded-lg text-sm bg-slate-50/40">
                  To stop receiving marketing communications, click the unsubscribe link in any marketing email or contact us at <span className="font-mono font-bold text-slate-800 select-all">privacy@nextgenaml.com.au</span>. Note that opting out of marketing does not affect service, operational, corporate billing, or legal notices that we are legally required to send.
                </p>
              </div>
            </section>

            {/* 6. Disclosing Personal Information */}
            <section id="disclosure" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                6. Disclosing Personal Information
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We may disclose personal information to the following categories of recipients where necessary and lawful:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-650">
                  <li>other entities within the NextGen AML corporate group;</li>
                  <li>trusted service providers and sub-processors (e.g., cloud hosting, CRM platforms, analytics providers, and identity database networks);</li>
                  <li>identity verification platforms and state/federal document issuers;</li>
                  <li>credit bureaus, mobile carriers and other authorised data sources used for validation checks;</li>
                  <li>professional advisers, regulatory auditors, counsel, and corporate insurers;</li>
                  <li>law enforcement agencies, regulators or courts where required or authorised by law; and</li>
                  <li>anyone else with your explicit consent.</li>
                </ul>
                <p className="font text-slate-900 border-l-2 border-slate-900 pl-4 py-1">
                  We will never sell your personal information. Any third-party recipients are required to handle personal information in accordance with this policy and applicable privacy laws.
                </p>
              </div>
            </section>

            {/* 7. International Data Transfers */}
            <section id="transfers" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                7. International Data Transfers
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p className="font text-slate-900">
                  Our primary production data for Australian customers is hosted in AWS ap-southeast-2 (Sydney), with ap-southeast-4 (Melbourne) for disaster recovery.
                </p>
                <p>
                  Some of our support tools and sub-processors operate in other jurisdictions, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono font-semibold text-slate-700">
                  <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-md">United States</div>
                  <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-md">United Kingdom</div>
                  <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-md">Singapore</div>
                  <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-md">India</div>
                </div>
                <p>This may occur for purposes such as:</p>
                <ul className="space-y-1.5 pl-6 list-disc text-slate-500 font-medium">
                  <li>identity verification services;</li>
                  <li>customer support;</li>
                  <li>platform maintenance and monitoring;</li>
                  <li>software development and testing; and</li>
                  <li>compliance and operational support</li>
                </ul>
                <p>
                  Where personal information is accessed or processed outside Australia, we take reasonable steps to ensure appropriate privacy and security protections are maintained. We work with trusted service providers and take reasonable measures to help protect personal information in accordance with applicable privacy laws.
                </p>
              </div>
            </section>

            {/* 8. Security Measures */}
            <section id="security" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                8. Security Measures
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We implement robust technical and organisational security measures designed to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure.
                </p>
                
                <p className="font-bold text-slate-900 mb-2">Our technical security measures include:</p>
                <ol className="space-y-3 list-none pl-0">
                  {[
                    "Encryption of sensitive information in transit using TLS and at rest using industry-standard encryption mechanisms;",
                    "Role-based access controls (RBAC), least privilege principles, and multi-factor authentication (MFA) for administrative and privileged access;",
                    "Logical tenant isolation controls designed to segregate customer data between organisations within the platform;",
                    "Continuous security monitoring, vulnerability management, audit logging, and alerting designed to detect suspicious activity and unauthorised access attempts;",
                    "Regular security reviews, penetration testing, and vendor risk assessments where appropriate;",
                    "Backup, disaster recovery, and business continuity processes designed to support operational resilience and data recovery;",
                    "Restricted access to customer information to authorised personnel who require access for legitimate operational, compliance, security, or support purposes;",
                    "Staff training and internal policies relating to privacy, cybersecurity, information handling, and incident management;",
                    "Segregation of development, testing, and production environments to reduce operational and security risks;",
                    "Secure API and integration controls using authentication, authorisation, and encrypted communication protocols; and",
                    "Oversight of third-party service providers and sub-processors, who are required to maintain appropriate technical and organisational security measures consistent with applicable privacy and security obligations."
                  ].map((measure, index) => (
                    <li key={index} className="flex gap-4 items-start py-2">
                      <span className="font-mono text-xs text-slate-400 shrink-0 mt-0.5">
                        [{index + 1}]
                      </span>
                      <span className="text-xs sm:text-sm text-slate-600">{measure}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-4">
                  Customer production data for Australian customers is primarily hosted within Australia using AWS cloud infrastructure located in the Sydney region, with disaster recovery capabilities configured within Australia where applicable. Sensitive verification information, including biometric information collected, is subject to heightened security and access controls.
                </p>
                <p className="font-semibold text-slate-805">
                  While we take reasonable precautions to protect personal information, no method of transmission over the internet or electronic storage is completely secure. Accordingly, we cannot guarantee absolute security.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-205 rounded-lg text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block mb-1">Notifiable Data Breaches (NDB) Compliance:</span>
                  <p className="text-slate-500">
                    If we become aware of an eligible data breach that is likely to result in serious harm, we will respond in accordance with our legal obligations under the Privacy Act 1988 (Cth), including the Notifiable Data Breaches (NDB) scheme and, where required, notification to affected individuals and the Office of the Australian Information Commissioner (OAIC).
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Biometric Information */}
            <section id="biometrics" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                9. Biometric Information
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We may collect biometric information (such as facial geometry scans and liveness video) for identity verification purposes only. Biometric data is:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-650">
                  <li>collected only with your knowledge and, where required, your explicit consent;</li>
                  <li>used solely to verify your identity and prevent identity fraud;</li>
                  <li>never used for marketing, profiling beyond verification, or any purpose other than identity verification; and</li>
                  <li>subject to the same or higher security standards as other sensitive information.</li>
                </ul>
                <p>
                  Sub-processors may process biometric information in jurisdictions with comparable privacy protections, including Australia, New Zealand, the United Kingdom, and the United States of America.
                </p>
              </div>
            </section>

            {/* 10. Automated Decision Making */}
            <section id="automated-decisions" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                10. Automated Decision Making
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                 We may use automated processing as part of identity verification (e.g., biometric matching and document authentication). We do not make solely automated decisions that produce legal effects or significantly affect you without human oversight. You have the right to request a human review of any automated decision that affects you.
                </p>
              </div>
            </section>

            {/* 11. Data Retention */}
            <section id="retention" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                11. Data Retention
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>We retain personal information for as long as reasonably necessary to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 border border-slate-150 rounded-lg text-xs sm:text-sm font-semibold flex gap-2">
                    <span className="text-slate-400 font-mono shrink-0">01.</span>
                    <span className="text-slate-600 font-medium">provide our services;</span>
                  </div>
                  <div className="p-3.5 border border-slate-150 rounded-lg text-xs sm:text-sm font-semibold flex gap-2">
                    <span className="text-slate-400 font-mono shrink-0">02.</span>
                    <span className="text-slate-600 font-medium">support our customers AML/CTF compliance obligations;</span>
                  </div>
                  <div className="p-3.5 border border-slate-150 rounded-lg text-xs sm:text-sm font-semibold flex gap-2">
                    <span className="text-slate-400 font-mono shrink-0">03.</span>
                    <span className="text-slate-600 font-medium">comply with legal, regulatory, security, and operational requirements; and</span>
                  </div>
                  <div className="p-3.5 border border-slate-150 rounded-lg text-xs sm:text-sm font-semibold flex gap-2">
                    <span className="text-slate-400 font-mono shrink-0">04.</span>
                    <span className="text-slate-600 font-medium">resolve disputes and enforce our agreements.</span>
                  </div>
                </div>
                <p>
                 Retention periods may vary depending on the type of information, the services provided, and applicable to legal obligations. Identity verification records, audit logs, and related compliance information may be retained for periods required under applicable AML/CTF laws and regulatory obligations.
                </p>
                <p>
                  When personal information is no longer required, we take reasonable steps to securely delete, de-identify, or destroy the information. Customers may request deletion of certain information, subject to our legal, regulatory, security, and contractual obligations.
                </p>
                <p className="text-slate-900 font-semibold">
                  We do not store copies of your identity documents after the DVS check is completed. This information will be retained for as long as it is required for the purposes outlined above.
                </p>
              </div>
            </section>

            {/* 12. Your Privacy Rights */}
            <section id="rights" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                12. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  You have the following rights in relation to the personal information we hold about you. Rights under the APPs and (where applicable) the GDPR are summarised below:
                </p>

                {/* Responsive Table 2 */}
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-800">
                        <th className="p-3 font-semibold border-r border-slate-200 w-1/3">Right</th>
                        <th className="p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        { r: "Access", d: "Request a copy of the personal information we have about you." },
                        { r: "Correction / Rectification", d: "Ask us to correct personal information that is inaccurate, incomplete, or out of date." },
                        { r: "Erasure (Right to be Forgotten)", d: "Request deletion of your data where there is no compelling reason to retain it, subject to our legal obligations." },
                        { r: "Restriction of Processing", d: "Ask us to limit how we use your data in certain circumstances (e.g., while accuracy is disputed)." },
                        { r: "Object to Processing", d: "Object to processing based on our legitimate interests, or to direct marketing at any time." },
                        { r: "Data Portability", d: "Receive your data in a structured, machine-readable format or have it transferred to another provider." },
                        { r: "Withdraw Consent", d: "Where processing relies on your consent, withdraw it at any time (this does not affect prior to lawful processing)." },
                        { r: "Human Review of Automated Decisions", d: "Request human review if an automated decision has a significant legal or similar effect on you." },
                        { r: "Anonymity / Pseudonymity", d: "Where lawful and practicable (e.g., browsing our public website), deal with us anonymously or under a pseudonym (APP 2)." }
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-3 border-r border-slate-200 font-bold text-slate-900 align-top">{item.r}</td>
                          <td className="p-3 text-slate-600 align-top leading-relaxed">{item.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p>
                  To exercise any of these rights, please contact us at <span className="font-mono font-bold text-slate-800 select-all">privacy@nextgenaml.com.au</span> with sufficient details for us to verify your identity. We will respond within a reasonable time, and in any event within 30 days. Where a request relates to data we hold as a processor on behalf of a customer, we will forward it to that customer.
                </p>
              </div>
            </section>

            {/* 13. Cookies & Website Analytics */}
            <section id="cookies" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                13. Cookies & Website Analytics
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                
                <h3 className="font-bold text-slate-950 text-base">13.1 Types of Cookies We Use</h3>
                <p>Our website uses the following categories of cookies:</p>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                  <li>
                    <strong className="text-slate-900 font-bold">Strictly necessary:</strong> Required for core site functionality and cannot be disabled.
                  </li>
                  <li>
                    <strong className="text-slate-900 font-bold">Performance & Analytics:</strong> Collect anonymised data (via Google Analytics) to help us understand how visitors use our site and improve it.
                  </li>
                  <li>
                    <strong className="text-slate-900 font-bold">Functionality:</strong> Remember your preferences (e.g., language, font size) to personalise your experience.
                  </li>
                  <li>
                    <strong className="text-slate-950 font-bold">Advertising / third-party:</strong> May be used by third-party services (e.g., Google AdWords) to deliver relevant advertising.
                  </li>
                </ul>

                <h3 className="font-bold text-slate-950 text-base pt-2">13.2 Managing Cookies</h3>
                <p>
                  You can manage or disable cookies through your browser settings. Disabling strictly necessary cookies may affect the functionality of our website or platform. For Google Analytics, you can opt out using Google's opt-out browser add-on at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline font-semibold hover:text-slate-900">https://tools.google.com/dlpage/gaoptout</a>.
                </p>

                <h3 className="font-bold text-slate-950 text-base pt-2">13.3 Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently before providing any personal information.
                </p>
              </div>
            </section>

             {/* 14. Notifiable Data Breaches */}
            <section id="breaches" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                14. Notifiable Data Breaches
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  If we become aware of an eligible data breach that is likely to result in serious harm, we will:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-650">
                  <li>notify affected individuals as soon as practicable; and</li>
                  <li>notify the Office of the Australian Information Commissioner (OAIC) in accordance with the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth).</li>
                </ul>
              </div>
            </section>

            {/* 15. Complaints & Escalation */}
            <section id="complaints" className="space-y-6 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                15. Complaints & Escalation
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  If you have a complaint or concern about how we handle your personal information, we encourage you to contact us first:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2 inline-block">Step 1: Contact Us</span>
                    <p className="font-semibold text-slate-805">Email: <span className="font-mono text-slate-800 select-all font-bold">privacy@nextgenaml.com.au</span> or raise a support ticket through our client portal.</p>
                  </div>
                  
                  <div className="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2 inline-block">Step 2: Internal Review</span>
                    <p className="font-semibold text-slate-805 leading-relaxed">
                      If you are not satisfied with our initial response, ask to have your complaint escalated to our Chief Privacy Officer. We will acknowledge complaints within 5 business days and aim to resolve them within 30 days.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-300 bg-slate-50 rounded-lg">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-800 mb-2 inline-block">Step 3: OAIC Escalation</span>
                    <p className="mb-3 font-semibold text-slate-800">
                      If our response does not resolve your concern, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
                    </p>
                    <div className="space-y-1 font-mono text-xs text-slate-700 font-semibold">
                      <div>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">www.oaic.gov.au</a></div>
                      <div>Phone: 1300 363 992</div>
                      <div>Post: GPO Box 5218, Sydney NSW 2001</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 16. Contact Details */}
            <section id="contact" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                16. Contact Details
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  If you have any further enquiries about how we handle your personal information, how you can access and seek correction of the personal information that we hold about you, and how to raise a privacy complaint, you can communicate with us with additional enquiries following our contact details provided below.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-slate-200 rounded-lg p-5">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 text-base">NextGen AML Pty Ltd</h4>
                    <p className="text-xs text-slate-500">ABN: 31 551 154 091</p>
                    
                    <div className="text-xs text-slate-605">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Registered Office</span>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>'2', 1 Railway Crescent, Croydon VIC 3136, Australia</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 md:border-l md:border-slate-100 md:pl-6">
                    <h4 className="font-semibold text-slate-505 text-xs uppercase tracking-widest">Privacy Officer</h4>
                    
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Email</span>
                        <a href="mailto:privacy@nextgenaml.com.au" className="text-slate-800 select-all hover:underline font-mono font-semibold">privacy@nextgenaml.com.au</a>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Website</span>
                        <a href="https://www.nextgenaml.com.au" target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:underline font-mono">www.nextgenaml.com.au</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 17. Changes To This Policy */}
            <section id="changes" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                17. Changes to This Policy
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The revised policy will be published on our website with an updated effective date. We encourage you to review this policy periodically. Continued use of our services after publication of a revised privacy policy constitutes your acceptance of the changes.
                </p>
              </div>
            </section>

            {/* Appendix A: Cookie Policy Summary */}
            <section id="appendix-a" className="space-y-4 scroll-mt-24 pt-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Appendix A
              </div>
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                Cookie Policy Summary
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  The following cookie categories are used on our website. You may manage preferences via your browser settings; however, disabling strictly necessary cookies may impair site functionality.
                </p>

                {/* Appendix A Table */}
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-850">
                        <th className="p-3 font-semibold border-r border-slate-200 w-1/4">Cookie Type</th>
                        <th className="p-3 font-semibold border-r border-slate-200 w-1/2">Purpose</th>
                        <th className="p-3 font-semibold">Can You Opt Out?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900">Strictly Necessary</td>
                        <td className="p-3 border-r border-slate-200 text-slate-505">Required for core site functionality (e.g., login, session management, security checks).</td>
                        <td className="p-3 text-slate-800 font-semibold bg-slate-50/40">No. The site may not function correctly without these.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900">Performance / Analytics</td>
                        <td className="p-3 border-r border-slate-200 text-slate-505">Collect anonymised usage data via Google Analytics.</td>
                        <td className="p-3 text-slate-700 font-semibold">Yes. Via browser settings or Google opt-out tool.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900">Functionality</td>
                        <td className="p-3 border-r border-slate-200 text-slate-505">Remember user preferences (e.g., language, region, user settings).</td>
                        <td className="p-3 text-slate-700 font-semibold">Yes. Via browser settings.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900">Advertising / Third-Party</td>
                        <td className="p-3 border-r border-slate-200 text-slate-505">Deliver relevant ads via Google AdWords or similar systems.</td>
                        <td className="p-3 text-slate-705 font-semibold">Yes. Via browser settings or ad platform opt-outs.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Appendix B: DVS HUB data handling policy and procedure */}
            <section id="appendix-b" className="space-y-6 scroll-mt-24 pt-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Appendix B
              </div>
              <h2 className="text-xl font-bold text-slate-900 pb-1">
                DVS HUB Data Handling Policy and Procedure
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  For ID checks within Australia, the information you provide will be sent to the <span className="font-semibold text-slate-950">DVS Hub</span>, administered by the <span className="font-semibold text-slate-900">Attorney-General's Department</span>, and matched against official records held by the government agency responsible for issuing the identity document (<span className="font-semibold text-slate-950">document issuer</span>).
                </p>
                <p className="font-medium text-slate-800 border-l-2 border-slate-900 pl-4 py-1.5 bg-slate-50/50">
                  The DVS Hub will advise us of whether the information you provide matches official records.
                </p>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">How will the Attorney-General's Department handle your personal information?</h3>
                <p>
                  The DVS Hub facilitates information transfer between NextGen AML Pty Ltd and the document issuer. The DVS Hub itself does not retain any personal information, and the Attorney-General's Department cannot view or edit any of the personal information transmitted through the DVS Hub.
                </p>
                <p>
                  The Attorney-General's Department engages a third-party provider as a managed service provider for the DVS, who is required to adhere to the APP requirements and security standards to ensure the use and disclosure of personal information is limited to explicitly defined purposes including:
                </p>
                <ul className="list-decimal pl-5 space-y-2 text-slate-650">
                  <li>for the purposes of the contract with the department; and</li>
                  <li>to comply with any request under section 95C of the Privacy Act.</li>
                </ul>
                <p>
                  The Attorney-General's Department is authorised to operate the DVS Hub for the purpose of verifying individual identities under the <span className="font-semibold text-slate-800">IVS Act</span>.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-150 rounded-lg text-xs sm:text-sm">
                  <p className="text-slate-500 font-medium">
                    For more information on how the Attorney-General's Department may handle your personal information, see the Attorney-General's Department's 'Privacy Statement – Identity Verification Services' at:{' '}
                    <a 
                      href="https://www.idmatch.gov.au/resources/privacy-statement-identity-verification-services" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-800 underline font-semibold hover:text-slate-950"
                    >
                      https://www.idmatch.gov.au/resources/privacy-statement-identity-verification-services
                    </a>.
                  </p>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">How will the document issuer handle your personal information?</h3>
                <p>
                  Your personal information will be shared by the Attorney General's Department via the DVS Hub with the government agency that issued your identity document to verify it against their official records. These agencies already hold your personal information as part of their official records, in line with their own privacy policies and legal obligations.
                </p>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">What happens if you don't provide your personal information?</h3>
                <p>
                  You do not have to agree to verify your identity documents through the DVS. You can choose instead to utilize alternative methods of identity verification as provided by your services provider – for example, attend to a service provider to verify your identity in person.
                </p>
                <p className="font-semibold text-slate-900 leading-relaxed">
                  However, if you do not provide the personal information we require to verify your identity, we may not be able to provide you with certain products, services or offerings. If you do not provide your personal information, we are unable to verify your identity in accordance with the AML/CTF compliance requirements of AUSTRAC and provide the designated services as required.
                </p>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">Other disclosures</h3>
                <p>Where necessary, NextGen AML may disclose your personal information to third parties, including:</p>
                <ul className="space-y-4 pl-0 list-none">
                  <li className="flex gap-3.5 items-start p-4 border border-slate-200/50 rounded-lg bg-slate-50/50">
                    <span className="font-mono text-xs text-slate-400 shrink-0 mt-0.5">[1]</span>
                    <div>
                      <span className="font-bold text-slate-900 block mb-1">Intermediary Service Providers:</span>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        The following categories of intermediary service providers involved in the use of the DVS who may receive your identification information to make or receive an information match request:
                      </p>
                      <ul className="mt-2 space-y-1 pl-4 list-decimal text-slate-500 font-semibold text-xs">
                        <li>outsourced service providers that connect us to the DVS Hub;</li>
                        <li>identity service providers;</li>
                        <li>customer service providers such as call center operators that respond to customer enquiries and escalate technical support requests.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-3.5 items-start p-4 border border-slate-200/50 rounded-lg bg-slate-50/50">
                    <span className="font-mono text-xs text-slate-400 shrink-0 mt-0.5">[2]</span>
                    <div>
                      <span className="font-bold text-slate-900 block mb-1">Law Enforcement:</span>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        Law enforcement agencies in certain specific, legally mandated circumstances.
                      </p>
                    </div>
                  </li>
                </ul>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">The Attorney-General's Department's verification assistance service</h3>
                <p>
                  There may be circumstances in which we will require assistance to verify your identity. If we request assistance from the Attorney-General's Department to verify your identity through the DVS, the Attorney-General's Department will collect your personal information for the purposes of verifying your identity document(s) through the DVS.
                </p>
                <p>
                  The Attorney-General's Department may also disclose your personal information to the relevant document issuer to assist them with verifying your identity documents. This collection is authorised under APP 5.2(c) and section 27 of the IVS Act which permits the collection of your personal information from someone other than yourself when it is authorised under an Australian law.
                </p>
                <p>
                  The Attorney-General's Department will handle your personal information in accordance with their obligations under the Privacy Act.
                </p>
                <p>
                  Where the identity document(s) you need to be verified include information regarding other individuals (such as a Medicare card covering multiple individuals), it will be assumed that you have advised those individuals and obtained their consent to the disclosure. This information will only be used for the purposes of verifying your identity document(s) through the DVS. Any personal information of other individuals will otherwise be managed in the same way as your personal information.
                </p>
                <p>
                  There may be overseas disclosure of your personal information to recipients located in New Zealand where New Zealand government agencies or private organisations request for verification assistance of your identity document(s).
                </p>
                <p>
                  If you don't provide your personal information to the Attorney-General's Department, the Department will be unable to verify your identity document(s).
                </p>
                <p className="bg-slate-50 p-4 rounded-lg text-xs sm:text-sm border border-slate-150">
                  <span className="text-slate-500 font-medium">
                    More information about the verification assistance service is set out in the Attorney-General's Department's Identity Verification Services{' '}
                    <a href="https://www.idmatch.gov.au/resources/privacy-statement-identity-verification-services" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline font-semibold hover:text-slate-950">Privacy Statement</a>.
                  </span>
                </p>
              </div>
            </section>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
