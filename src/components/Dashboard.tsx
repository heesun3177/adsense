import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { DollarSign, MousePointer2, Eye, TrendingUp, Calendar } from 'lucide-react';

const earningsData = [
  { name: 'Mon', revenue: 45, clicks: 120 },
  { name: 'Tue', revenue: 52, clicks: 150 },
  { name: 'Wed', revenue: 48, clicks: 140 },
  { name: 'Thu', revenue: 61, clicks: 180 },
  { name: 'Fri', revenue: 55, clicks: 160 },
  { name: 'Sat', revenue: 67, clicks: 210 },
  { name: 'Sun', revenue: 72, clicks: 230 },
];

const topKeywords = [
  { keyword: '비트코인 전망', revenue: 124, cpc: 2.4 },
  { keyword: 'AI 주식 추천', revenue: 98, cpc: 1.8 },
  { keyword: '부동산 절세 전략', revenue: 85, cpc: 3.2 },
  { keyword: '해외 여행 보험', revenue: 72, cpc: 1.5 },
  { keyword: '디지털 노마드', revenue: 64, cpc: 1.2 },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              실시간 <span className="text-gradient">수익 대시보드</span>
            </h2>
            <p className="text-slate-400">
              당신의 블로그 성과를 한눈에 파악하세요. AI가 수익 패턴을 분석하여 최적의 포스팅 시점을 제안합니다.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm">
            <Calendar className="w-4 h-4" />
            <span>최근 7일 데이터</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "예상 수익", value: "$420.50", change: "+12.5%", icon: DollarSign, color: "text-vivid-cyan" },
            { label: "클릭 수", value: "1,240", change: "+8.2%", icon: MousePointer2, color: "text-electric-blue" },
            { label: "페이지 뷰", value: "45.2K", change: "+15.4%", icon: Eye, color: "text-purple-400" },
            { label: "CTR (클릭률)", value: "2.74%", change: "+0.5%", icon: TrendingUp, color: "text-green-400" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={stat.color}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <span className="text-slate-400 text-sm block mb-1">{stat.label}</span>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-8">수익 추이</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                    itemStyle={{ color: '#3B82F6' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Keywords */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-8">수익 기여 키워드</h3>
            <div className="space-y-6">
              {topKeywords.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{item.keyword}</span>
                    <span className="text-slate-500 text-xs">CPC: ${item.cpc}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-vivid-cyan font-bold block">${item.revenue}</span>
                    <div className="w-24 h-1.5 bg-white/5 rounded-full mt-1">
                      <div 
                        className="h-full bg-vivid-cyan rounded-full" 
                        style={{ width: `${(item.revenue / 150) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-colors">
              전체 키워드 리포트
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
