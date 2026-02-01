/* Label: WARO TECH - Full Stack AI VA Folio (FINAL BUILD FIX)
   Style: Cyber-Corporate / Premium Dark Mode
   Tech: Next.js + Tailwind + Lucide Icons
   Constraint: 100% Mobile Responsive | G-Protocol Applied | Fixed TS Size Error
*/

import React from 'react';
import { 
  Bot, 
  Cpu, 
  Code, 
  Layers, 
  ArrowUpRight, 
  Zap, 
  Database, 
  Smartphone, 
  Mail, 
  Linkedin, 
  Terminal, 
  Binary, 
  ShieldCheck, 
  Search, 
  Settings,
  BarChart3, 
  Share2,
  BrainCircuit,
  Workflow,
  Server,
  Fingerprint,
  Box,
  Palette,
  CheckCircle2,
  TrendingUp,
  Clock,
  Lock,
  Globe,
  Monitor,
  Activity,
  MapPin,
  ArrowRight,
  Facebook,
  MessageCircle,
  Phone,
  User,
  Send,
  LucideIcon
} from 'lucide-react';

export default function FullStackVAFolio() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-600/40 font-sans scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 text-[10px]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Binary size={18} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase underline decoration-blue-600 decoration-4 underline-offset-4 font-mono text-white font-bold group-hover:text-blue-500 transition-colors">WARO TECH</span>
          </a>
          <div className="hidden md:flex gap-10 font-mono uppercase tracking-[0.3em] text-gray-500 font-bold">
            <a href="#expertise" className="hover:text-blue-500 transition-colors tracking-tighter uppercase">Expertise</a>
            <a href="#solutions" className="hover:text-white transition-colors tracking-tighter uppercase">Solutions</a>
            <a href="#systems" className="hover:text-white transition-colors tracking-tighter uppercase font-bold text-white">Proven Systems</a>
          </div>
          <a href="#contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 uppercase tracking-tighter">
            LAUNCH PROJECT
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full animate-pulse" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-500/20 text-blue-400 text-[10px] font-mono mb-10 uppercase tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              System Status: Operational
            </div>
            <h1 className="text-6xl md:text-[100px] font-black tracking-tighter mb-8 leading-[0.85] uppercase text-white font-mono">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">FULL STACK</span> <br />
              <span className="text-blue-600 italic tracking-tighter">AI SOLUTIONS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light italic text-white/80">
              I am a Technical VA who builds, automates, and scales. Combining <span className="text-white italic font-bold tracking-widest uppercase tracking-tighter">AI Strategy</span> with <span className="text-white italic font-bold uppercase tracking-widest tracking-tighter">Full-Stack Execution</span>.
            </p>
            <div className="mb-14 p-6 bg-white/5 border border-white/10 rounded-2xl text-left backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <User size={20} className="text-blue-500" />
                    <h3 className="text-sm font-mono text-blue-400 uppercase tracking-[0.2em] font-bold">About Me</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed italic font-light">
                    Hi, I'm Waro! My mission is to empower businesses with intelligent automation and robust digital infrastructure. I leverage cutting-edge AI and full-stack development to create scalable solutions that drive efficiency and growth.
                </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a href="#solutions" className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 group">
                Explore Solutions <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-8 lg:p-12 rounded-[3rem] bg-white/5 border border-white/10 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
            <img 
              src="/my-profile.png" 
              alt="Waro Tech Profile" 
              className="relative z-10 w-full max-w-sm rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out border-4 border-transparent group-hover:border-blue-500 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* --- EXPERTISE MATRIX --- */}
      <section id="expertise" className="py-24 px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4 tracking-tighter font-bold">Technical Domain</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight uppercase italic font-black">Expertise Matrix.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { icon: <Bot className="text-blue-500" />, title: "API Orchestration", desc: "Integrating Gemini, GPT-4, and Claude into CRM workflows via Webhooks and Zapier." },
              { icon: <Code className="text-purple-500" />, title: "Full-Stack Logic", desc: "Advanced Next.js, TypeScript, and PHP/SQL for building scalable internal agency tools." },
              { icon: <Server className="text-green-500" />, title: "Data Infrastructure", desc: "Designing robust relational database schemas and managing high-volume data indexing." },
              { icon: <Palette className="text-pink-500" />, title: "Visual Engineering", desc: "Premium Photoshop editing and 3D Blender rendering for high-ticket brand assets." },
              { icon: <Lock className="text-orange-500" />, title: "Cyber-Security", desc: "Implementing security protocols for client data and protecting digital assets from vulnerabilities." },
              { icon: <Search className="text-yellow-500" />, title: "Technical SEO", desc: "Structuring site schema and content to dominate AI search results and SGE ecosystems." },
              { icon: <BarChart3 className="text-cyan-500" />, title: "Metrics & KPIs", desc: "Developing real-time performance tracking systems for ROI-focused marketing campaigns." },
              { icon: <Fingerprint className="text-indigo-500" />, title: "Digital Identity", desc: "Architecting unique brand signatures that stand out in crowded AI-saturated markets." }
            ].map((skill, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-blue-600 group transition-all">
                <div className="mb-6">{skill.icon}</div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2 italic tracking-tighter">{skill.title}</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-blue-100 leading-relaxed uppercase tracking-widest font-bold tracking-tighter">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS MATRIX (FIXED TYPESCRIPT) --- */}
      <section id="solutions" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4 italic tracking-tighter font-bold font-mono">Operational Scale</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight uppercase font-black italic">Agency Solutions Matrix.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { Icon: Search, color: "text-blue-500", title: "AI Search Indexing", desc: "Visibility optimization for SGE and Perplexity ecosystems." },
              { Icon: Workflow, color: "text-purple-500", title: "Autonomous Flows", desc: "End-to-end automation for lead and client onboarding cycles." },
              { Icon: Box, color: "text-pink-500", title: "AI Content Engines", desc: "Mass-production of brand assets via fine-tuned LLM agents." },
              { Icon: Database, color: "text-green-500", title: "CRM Engineering", desc: "Secure database structures for high-volume agency operations." },
              { Icon: BarChart3, color: "text-cyan-500", title: "Predictive Metrics", desc: "Real-time ROI tracking and operational bottleneck analysis." },
              { Icon: Settings, color: "text-orange-500", title: "Tech-Stack Management", desc: "API maintenance and technical support for high-ticket tools." }
            ].map((sol, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/50 transition-all group">
                <div className="mb-6 group-hover:rotate-12 transition-transform">
                  <sol.Icon className={sol.color} size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase italic tracking-widest tracking-tighter">{sol.title}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed italic font-bold tracking-tighter">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYSTEMS SECTION --- */}
      <section id="systems" className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4 italic tracking-tighter font-bold font-mono">Functional Proof</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight uppercase font-black tracking-tighter italic">Business-Critical Systems.</p>
          </div>
          <div className="grid grid-cols-1 gap-16">
            <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all overflow-hidden text-left">
              <div className="relative z-10 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500"><Database size={24} /></div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold underline underline-offset-4 decoration-blue-500 tracking-tighter font-bold">Inventory Case Study</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 italic tracking-tighter leading-none text-white font-mono">Inventory & POS <br/><span className="text-blue-600 italic">Logic Suite</span></h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed italic font-bold">"I developed this system to solve the 'Manual Entry Gap' in retail operations. By automating the sync between physical sales and digital stock levels."</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 font-bold uppercase tracking-widest">
                  <div className="flex items-start gap-4"><CheckCircle2 className="text-blue-500 mt-1" size={20} /><div><p className="text-white text-[11px]">98% Accuracy</p><p className="text-[10px] text-gray-500 mt-1">Error-free.</p></div></div>
                  <div className="flex items-start gap-4"><Activity className="text-blue-500 mt-1" size={20} /><div><p className="text-white text-[11px]">Auto-Reporting</p><p className="text-[10px] text-gray-500 mt-1">Instant ROI.</p></div></div>
                </div>
              </div>
              <div className="bg-[#050505] rounded-[2.5rem] border border-white/5 aspect-video lg:aspect-square flex items-center justify-center relative overflow-hidden order-1 lg:order-2"><Server size={100} className="text-blue-600 opacity-10 animate-pulse" /></div>
            </div>
            {/* System 2: Queuing Solution */}
            <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all overflow-hidden text-left">
               <div className="bg-[#050505] rounded-[2.5rem] border border-white/5 aspect-video lg:aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl">
                 <Smartphone size={100} className="text-purple-600 opacity-10 animate-pulse" />
              </div>
              <div className="relative z-10 text-left">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500"><Smartphone size={24} /></div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold underline underline-offset-4 decoration-purple-500 tracking-tighter">Flow Strategy</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 italic tracking-tighter text-purple-500 leading-none underline decoration-white/10 decoration-8 font-mono">Virtual <br/><span className="text-white italic">Queuing System</span></h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed italic font-bold">"Built to optimize the 'Wait Time Experience.' This mobile-first platform allows customers to join queues remotely."</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 font-bold uppercase tracking-widest text-gray-500 font-mono">
                  <div className="flex items-start gap-4"><Clock className="text-purple-500 mt-1" size={20} /><div><p className="text-white text-[11px]">Optimization</p><p className="text-[10px] mt-1">Wait-time logic.</p></div></div>
                  <div className="flex items-start gap-4"><TrendingUp className="text-purple-500 mt-1" size={20} /><div><p className="text-white text-[11px]">Scaling</p><p className="text-[10px] mt-1">Zero lag sync.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="relative bg-[#030303] border-t border-white/5 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start text-left">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white font-mono">Let's <br/><span className="text-blue-600">Integrate.</span></h2>
              <p className="text-gray-500 text-lg max-w-md font-light leading-relaxed mb-10 italic">Currently open for AI-driven technical partnerships.</p>
              <div className="flex flex-col gap-4 text-gray-400 font-mono text-xs uppercase tracking-widest font-bold">
                 <div className="flex items-center gap-4"><MapPin size={14} className="text-blue-500" /> Surigao Del Sur, PH</div>
                 <div className="flex items-center gap-4"><Phone size={14} className="text-blue-500" /> +639452371937</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 uppercase font-bold text-white max-w-lg">
                <a href="https://www.linkedin.com/in/juaro-impuesto-b96743157/" target="_blank" className="group flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-blue-600 transition-all font-mono font-bold"><div className="flex items-center gap-4"><Linkedin size={20} className="text-blue-500 group-hover:text-white" /><span className="text-[10px] tracking-widest font-bold">LinkedIn</span></div><ArrowRight size={16} /></a>
                <a href="https://wa.me/+639452371937" target="_blank" className="group flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-green-600 transition-all font-mono font-bold"><div className="flex items-center gap-4"><MessageCircle size={20} className="text-green-500 group-hover:text-white" /><span className="text-[10px] tracking-widest font-bold">WhatsApp</span></div><ArrowRight size={16} /></a>
                <a href="https://web.facebook.com/profile.php?id=61586711326892" target="_blank" className="group flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-blue-600 transition-all font-mono font-bold"><div className="flex items-center gap-4"><Facebook size={20} className="text-blue-500 group-hover:text-white" /><span className="text-[10px] tracking-widest font-bold">Facebook</span></div><ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl group">
              <h3 className="text-2xl font-black uppercase italic mb-8 tracking-tighter flex items-center gap-3 font-mono text-white"><Mail className="text-blue-500" size={24} /> Message</h3>
              <form action="https://formspree.io/f/mlgnkrdv" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 uppercase font-bold font-mono tracking-tighter">
                  <input type="text" name="name" placeholder="NAME" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-white" />
                  <input type="email" name="email" placeholder="EMAIL" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 text-white" />
                </div>
                <textarea name="message" rows={4} placeholder="WHAT CAN WE AUTOMATE?" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 font-mono tracking-tighter text-white"></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest font-bold">
                  Initiate Sync <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8 font-bold font-mono text-gray-700">
            <div className="flex items-center gap-4"><Binary size={14} className="text-blue-500 font-bold" /><span className="font-black tracking-tighter uppercase text-sm underline underline-offset-4 decoration-blue-600 text-white font-bold font-mono">WARO TECH</span></div>
            <p className="text-[10px] tracking-[0.8em] uppercase italic font-bold">© 2026 WARO TECH SOLUTIONS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}