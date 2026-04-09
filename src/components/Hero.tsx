import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-blue/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-vivid-cyan/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-vivid-cyan" />
            <span className="text-sm font-medium text-slate-300">AI 기반 수익 최적화 솔루션</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            AI로 잠자는 동안에도 <br />
            <span className="text-gradient">수익을 만드세요</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            데이터 분석과 AI의 만남. 당신의 블로그를 고수익 머신으로 변환합니다. 
            키워드 발굴부터 SEO 최적화까지, 모든 과정을 자동화하세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-blue to-vivid-cyan text-white font-bold text-lg shadow-xl shadow-electric-blue/30 hover:scale-105 transition-transform shimmer flex items-center gap-2">
              무료로 시작하기 <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" /> 데모 보기
            </button>
          </motion.div>

          {/* Stats / Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
          >
            {[
              { icon: Zap, label: "분석 속도", value: "0.8s" },
              { icon: TrendingUp, label: "평균 수익 증가", value: "+240%" },
              { icon: Shield, label: "정확도", value: "99.9%" },
              { icon: Globe, label: "글로벌 키워드", value: "12M+" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-vivid-cyan" />
                </div>
                <span className="text-slate-400 text-sm mb-1">{stat.label}</span>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
