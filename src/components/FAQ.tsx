import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: "애드센스 승인 전에도 사용 가능한가요?",
    answer: "네, 당연합니다! 오히려 승인 전부터 AI의 가이드를 받아 글을 작성하면 애드센스 승인 확률이 비약적으로 높아집니다. 구글이 좋아하는 고품질 콘텐츠 구조를 처음부터 잡을 수 있습니다."
  },
  {
    question: "AI가 쓴 글은 저품질에 걸리지 않나요?",
    answer: "저희 서비스는 단순한 복사-붙여넣기 AI가 아닙니다. 사용자의 초안을 바탕으로 SEO 최적화 요소를 제안하고, 문맥을 다듬어주는 '어시스턴트' 역할을 합니다. 독창적인 가치와 AI의 기술력이 결합되어 저품질 걱정 없이 상위 노출이 가능합니다."
  },
  {
    question: "수익 분석 데이터는 얼마나 정확한가요?",
    answer: "전 세계 수백만 개의 키워드 데이터와 실시간 광고 입찰가를 기반으로 분석합니다. 100% 일치할 수는 없지만, 업계 최고 수준인 95% 이상의 정확도를 자랑하며 수익화 전략 수립에 충분한 신뢰도를 제공합니다."
  },
  {
    question: "초보자도 쉽게 따라 할 수 있나요?",
    answer: "네, 복잡한 설정 없이 키워드 입력과 글쓰기만으로 모든 기능을 이용할 수 있습니다. 각 단계마다 AI가 친절하게 가이드를 제공하므로 블로그를 처음 시작하는 분들도 하루 만에 적응할 수 있습니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-4">
            <HelpCircle className="w-4 h-4 text-vivid-cyan" />
            <span className="text-sm font-medium text-vivid-cyan">자주 묻는 질문</span>
          </div>
          <h2 className="text-4xl font-bold text-white">궁금한 점이 있으신가요?</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 text-slate-500 transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
