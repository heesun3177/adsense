import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  PenTool, 
  Search, 
  TrendingUp, 
  User, 
  LogOut, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI 도구', href: '#tools', icon: Search },
    { name: 'SEO 에디터', href: '#editor', icon: PenTool },
    { name: '수익 분석', href: '#dashboard', icon: BarChart3 },
    { name: '성공 사례', href: '#success', icon: TrendingUp },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-navy-900/80 backdrop-blur-md border-bottom border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-vivid-cyan flex items-center justify-center shadow-lg shadow-electric-blue/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Blog AdSense <span className="text-vivid-cyan">AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-vivid-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all border border-white/10">
            로그인
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-electric-blue to-vivid-cyan text-white text-sm font-bold shadow-lg shadow-electric-blue/30 shimmer">
            시작하기
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy-800 border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-vivid-cyan transition-colors"
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className="py-3 rounded-xl bg-white/10 text-white font-semibold">로그인</button>
              <button className="py-3 rounded-xl bg-gradient-to-r from-electric-blue to-vivid-cyan text-white font-bold">시작하기</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
