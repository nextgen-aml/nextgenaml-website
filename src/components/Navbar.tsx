import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-20 w-full items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-8">
        {/* Logo */}
        <Link to="/" className="group cursor-pointer">
          <Logo className="group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Nav - Empty/Removed as requested */}
        <nav className="hidden lg:flex"></nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-emerald-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Toggle - Removing as it's empty */}
        {/* <button className="lg:hidden p-2 text-navy-900 hover:bg-slate-50 rounded-lg">
          <Menu className="h-6 w-6" />
        </button> */}
      </div>
    </header>
  );
}
