import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "김민수",
    role: "IT 블로거",
    content: "Blog AdSense AI를 사용한 지 3개월 만에 수익이 3배로 뛰었습니다. 특히 키워드 분석 도구가 정말 정확해요.",
    revenue: "+320%",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "이지은",
    role: "여행 작가",
    content: "SEO 에디터 덕분에 글 쓰는 시간이 절반으로 줄었습니다. 구글 상위 노출이 이렇게 쉬운 줄 몰랐어요.",
    revenue: "+180%",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "박준호",
    role: "경제 전문 블로거",
    content: "직장 다니면서 부업으로 블로그를 하는데, AI가 모든 걸 자동화해주니 너무 편합니다. 강력 추천합니다.",
    revenue: "+250%",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="success" className="py-24 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            실제 <span className="text-gradient">성공 사례</span>
          </h2>
          <p className="text-slate-400">
            이미 수천 명의 블로거들이 AI와 함께 수익 창출의 꿈을 실현하고 있습니다.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-vivid-cyan/10" />
              
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-vivid-cyan/20">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-vivid-cyan text-navy-900 px-3 py-1 rounded-full text-xs font-black">
                    {testimonials[currentIndex].revenue}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-vivid-cyan text-vivid-cyan" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-200 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
