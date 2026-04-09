import React from 'react';
import { Sparkles, Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-vivid-cyan flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Blog AdSense <span className="text-vivid-cyan">AI</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              AI 기술을 통해 블로거들의 수익 창출을 돕는 글로벌 SaaS 플랫폼입니다. 
              데이터 기반의 의사결정으로 당신의 가치를 증명하세요.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-vivid-cyan hover:text-navy-900 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">키워드 분석</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">SEO 에디터</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">수익 대시보드</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">성공 사례</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">고객 지원</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-vivid-cyan transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Blog AdSense AI. All rights reserved.</p>
          <p>Made with ❤️ for Bloggers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
