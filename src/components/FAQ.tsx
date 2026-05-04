import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Does NextGenAML submit reports directly to AUSTRAC?",
    answer: "The platform generates the report and sends it to your assigned compliance officer for review. The Compliance Officer can submit after he conducts his due diligence preserving the human control in the loop. Submission status, date, and reference are captured inside the case record for audit continuity."
  },
  {
    question: "Do small businesses really need AML/CTF controls?",
    answer: "Yes. Businesses that provide AUSTRAC defined designated services must incorporate AML/CTF Controls. These include and are not limited to Real Estate Agents and Agencies, Lawyers and Conveyancers and Accounting Practitioners. AUSTRAC has mandated that all new regulated entities should be ready to meet compliance guidelines by the 1st July, 2026. All businesses must comply, regardless of size."
  },
  {
    question: "Is NextGenAML suitable for real estate agencies?",
    answer: "Yes, NextGen AML is purpose built for the Real Estate agents and agencies. Our workflows are designed around entity checks, beneficial ownership, risk scoring, document collection and verification. We also are aware of specific industry requirements that might require multiple buyer profiles and checks."
  },
  {
    question: "Can NextGenAML support accounting firms?",
    answer: "Yes. The platform supports Accounting Firms and Accountants with client onboarding, KYB, entity verification, beneficial owner capture, risk assessments, PEP screening and audit ready record keeping. It is aligned with requirements of the industry and is calibrated to the engagement requirements of your business."
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-slate-200 transition-colors ${isOpen ? 'bg-slate-50/50' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-4 md:px-8 text-left group transition-all"
      >
        <span className={`text-base font-bold tracking-tight transition-colors ${isOpen ? 'text-emerald-600' : 'text-navy-950 group-hover:text-emerald-600'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 p-2 rounded-full transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-8 pb-8 pt-2">
              <p className="text-slate-600 leading-relaxed max-w-4xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 overflow-hidden border-b border-slate-100" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Answers, before you ask.
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden mb-12">
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
