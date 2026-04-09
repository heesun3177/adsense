import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckCircle2, AlertCircle, Info, PenTool, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function SEOEditor() {
  const [content, setContent] = useState('');
  
  // Mock SEO score calculation
  const getScore = () => {
    if (!content) return 0;
    const length = content.length;
    const keywords = (content.match(/수익|블로그|AI|애드센스/g) || []).length;
    let score = Math.min(100, (length / 500) * 40 + (keywords * 10));
    return Math.round(score);
  };

  const score = getScore();
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ];
  const COLORS = ['#3B82F6', '#1E293B'];

  const checklists = [
    { label: '글자 수 (1,500자 이상 권장)', status: content.length > 1500 },
    { label: '핵심 키워드 밀도 (2-3%)', status: (content.match(/수익|블로그|AI|애드센스/g) || []).length > 5 },
    { label: '이미지 대체 텍스트 포함', status: content.includes('alt=') },
    { label: '소제목(H2, H3) 구조화', status: content.includes('##') },
  ];

  return (
    <section id="editor" className="py-24 bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            SEO <span className="text-gradient">최적화 엔진</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            작성 중인 글을 실시간으로 분석하여 상위 노출 확률을 극대화합니다. 
            구글 알고리즘에 최적화된 구조와 키워드 배치를 가이드합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <PenTool className="w-5 h-5" />
                  <span className="font-medium">스마트 에디터</span>
                </div>
                <button className="px-4 py-2 rounded-lg bg-vivid-cyan/10 text-vivid-cyan text-sm font-bold flex items-center gap-2 hover:bg-vivid-cyan/20 transition-colors">
                  <Sparkles className="w-4 h-4" /> AI 글쓰기 도우미
                </button>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="여기에 블로그 포스팅 내용을 입력하세요..."
                className="w-full h-[500px] bg-transparent text-slate-200 resize-none focus:outline-none leading-relaxed text-lg"
              />
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-slate-500 text-sm">
                <span>글자 수: {content.length}자</span>
                <span>예상 읽기 시간: {Math.ceil(content.length / 500)}분</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-6">SEO 점수</h3>
              <div className="w-full h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="100%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-4xl font-black text-white">{score}</span>
                  <span className="text-slate-500 block text-sm">/ 100</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4 text-center">
                {score < 50 ? "내용을 더 보강하여 점수를 높여보세요." : "훌륭한 SEO 구조입니다! 발행을 준비하세요."}
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">SEO 체크리스트</h3>
              <div className="space-y-4">
                {checklists.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className={cn("text-sm", item.status ? "text-slate-300" : "text-slate-500")}>
                      {item.label}
                    </span>
                    {item.status ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Info className="w-4 h-4" /> 상세 가이드 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
