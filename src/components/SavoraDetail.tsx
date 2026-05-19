import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, LayoutGrid, FileText, Code2, ShieldCheck, Presentation, Users, X, ListTodo } from 'lucide-react';
import { useState } from 'react';
import { SavoraPart } from '../types';

function TaskBlock({ number, title, subs }: { number: number, title: string, subs: string[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold">{number}</div>
        <div className="font-bold text-gray-900 text-sm">{title}</div>
      </div>
      <ul className="space-y-2">
        {subs.map((s, i) => (
          <li key={i} className="text-[11px] text-gray-500 flex items-start gap-2">
            <span className="text-blue-400 font-bold">›</span> {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TouristWalkthrough() {
  const [step, setStep] = useState(1);
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');
  const [regData, setRegData] = useState({ name: '', email: '', password: '' });
  const [selectedAcc, setSelectedAcc] = useState<any>(null);
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  
  const [items, setItems] = useState([
    { id: 'acc', name: 'Luxury Sea-View Resort', price: 750, type: 'STAY', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
    { id: 'guide', name: 'Musa "DeepSea" Juma', price: 120, type: 'GUIDE', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
    { id: 'tour1', name: 'Coral Reef Snorkeling', price: 180, type: 'TOUR', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
    { id: 'tour2', name: 'Old Town Heritage Walk', price: 50, type: 'TOUR', img: 'https://images.unsplash.com/photo-1589197331516-4d8459bbde91?auto=format&fit=crop&q=80&w=400' },
  ]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const steps = [
    { id: 1, title: 'Auth & Profile', task: 'Task 1: Setting the Foundation' },
    { id: 2, title: 'Search Accommodation', task: 'Task 2: Discovery' },
    { id: 3, title: 'Evaluate Hosts', task: 'Task 3: Trust Building' },
    { id: 4, title: 'Browse Guides', task: 'Task 4: Expertise Search' },
    { id: 5, title: 'Contact & Vet', task: 'Task 5: Synchronization' },
    { id: 6, title: 'Select & Pay', task: 'Task 6: Conversion' },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h4 className="text-3xl font-bold text-gray-900 mb-4">Tourist Walkthrough</h4>
          <p className="text-gray-600 leading-relaxed">
            Experience the platform through the eyes of our primary persona. Each step correlates to a critical task identified in our research.
          </p>
        </div>
        <div className="flex gap-1">
          {steps.map((s) => (
            <div key={s.id} className={`h-1.5 w-6 rounded-full transition-all ${step >= s.id ? 'bg-blue-600' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
        {/* Interactive Simulation Area */}
        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-2xl shadow-gray-200/50 min-h-[650px] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <LayoutGrid className="w-64 h-64 rotate-12 text-blue-600" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-blue-200">
                    <Users className="w-8 h-8" />
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900">{authMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}</h5>
                  <p className="text-sm text-gray-500">Join the elite community of luxury explorers.</p>
                </div>

                <div className="max-w-sm mx-auto w-full space-y-4">
                  <div className="flex p-1 bg-gray-100 rounded-2xl mb-4">
                    <button 
                      onClick={() => setAuthMode('signup')}
                      className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${authMode === 'signup' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                    >
                      Sign Up
                    </button>
                    <button 
                      onClick={() => setAuthMode('signin')}
                      className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${authMode === 'signin' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                    >
                      Sign In
                    </button>
                  </div>

                  {authMode === 'signup' && (
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Amara Omondi"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                        value={regData.name}
                        onChange={(e) => setRegData({...regData, name: e.target.value})}
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="amara@example.com"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                      value={regData.email}
                      onChange={(e) => setRegData({...regData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                      value={regData.password}
                      onChange={(e) => setRegData({...regData, password: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    onClick={() => {
                      if(regData.email && regData.password) setStep(2);
                    }}
                    className="w-full py-4 bg-blue-600 text-white rounded-[2rem] font-bold mt-4 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    {authMode === 'signup' ? 'Get Started' : 'Sign In'} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Step 02</span>
                    <h5 className="text-2xl font-bold text-gray-900">Search for Accommodation</h5>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'acc1', name: 'Coral Cove Villa', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400', price: 450 },
                    { id: 'acc2', name: 'English Point Luxe', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400', price: 750 }
                  ].map(acc => (
                    <div 
                      key={acc.id}
                      onClick={() => setSelectedAcc(acc)}
                      className={`group cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${selectedAcc?.id === acc.id ? 'border-blue-600 scale-[1.02]' : 'border-gray-50'}`}
                    >
                      <img src={acc.img} className="w-full h-40 object-cover" alt="" referrerPolicy="no-referrer" />
                      <div className="p-4">
                        <div className="font-bold text-gray-900">{acc.name}</div>
                        <div className="text-xs text-gray-400 font-mono">${acc.price}/night</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  disabled={!selectedAcc}
                  onClick={() => setStep(3)} 
                  className={`mt-auto w-full py-5 rounded-[2rem] font-bold transition-all flex items-center justify-center gap-3 ${selectedAcc ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                  Evaluate Selected Host <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block">Step 03</span>
                    <h5 className="text-2xl font-bold text-gray-900">Evaluate & Compare Hosts</h5>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                       <img src="https://picsum.photos/seed/host1/100/100" alt="" referrerPolicy="no-referrer" />
                     </div>
                     <div>
                       <div className="font-bold text-gray-900">Grace Omondi</div>
                       <div className="text-[10px] text-emerald-500 font-black uppercase">Superhost • 4.98 Rating</div>
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     <div className="p-4 bg-white rounded-2xl border border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Response Rate</span>
                        <span className="text-xs font-bold text-gray-900">100% (within 5 mins)</span>
                     </div>
                     <div className="p-4 bg-white rounded-2xl border border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Identity Status</span>
                        <span className="text-xs border border-emerald-200 bg-emerald-50 text-emerald-600 px-2 rounded-md font-bold">VERIFIED</span>
                     </div>
                   </div>

                   <p className="mt-6 text-xs text-gray-500 italic">"Amara compares Grace's verified local knowledge vs. a hotel's generic support. The 'Task 3' requirement is met through transparency."</p>
                </div>

                <button onClick={() => setStep(4)} className="mt-auto w-full py-5 bg-gray-900 text-white rounded-[2rem] font-bold hover:bg-black transition-all">
                  Next: Find a Guide
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block">Step 04</span>
                  <h5 className="text-2xl font-bold text-gray-900">Browse Tour Guide Profiles</h5>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'g1', name: 'Musa "DeepSea" Juma', role: 'Marine Specialist', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
                    { id: 'g2', name: 'Zainab Historical', role: 'City Heritage Guide', img: 'https://images.unsplash.com/photo-1589197331516-4d8459bbde91?auto=format&fit=crop&q=80&w=400' }
                  ].map(guide => (
                    <div 
                      key={guide.id}
                      onClick={() => setSelectedGuide(guide)}
                      className={`p-4 bg-white rounded-3xl border-2 cursor-pointer transition-all flex items-center gap-4 ${selectedGuide?.id === guide.id ? 'border-blue-600' : 'border-gray-50'}`}
                    >
                      <img src={guide.img} className="w-16 h-16 rounded-2xl object-cover" alt="" referrerPolicy="no-referrer" />
                      <div>
                        <div className="font-bold text-gray-900">{guide.name}</div>
                        <div className="text-xs text-gray-400">{guide.role}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  disabled={!selectedGuide}
                  onClick={() => setStep(5)} 
                  className={`mt-auto w-full py-5 rounded-[2rem] font-bold transition-all ${selectedGuide ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                  Contact & Vet Guide
                </button>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Presentation className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Step 05</span>
                    <h5 className="text-2xl font-bold text-gray-900">Contact & Vet Guide</h5>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-[2.5rem] p-6 text-white space-y-4">
                   <div className="flex gap-3">
                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-[10px]">A</div>
                     <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-xs text-white/80 max-w-[80%]">
                       Hi Musa! I want to explore the marine park on a budget. Can we cut the boat private rental?
                     </div>
                   </div>
                   <div className="flex gap-3 justify-end text-right">
                     <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[80%]">
                       Yes Amara! We can join a small group tour instead. Saves $50 and the experience is just as good.
                     </div>
                     <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-[10px]">M</div>
                   </div>
                </div>

                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
                   <span className="text-xs font-bold text-emerald-900">New Package Logic: Optimized</span>
                   <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                <button onClick={() => setStep(6)} className="mt-auto w-full py-5 bg-blue-600 text-white rounded-[2rem] font-bold shadow-xl shadow-blue-200">
                  Finalize & Select Package
                </button>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 flex-1 flex flex-col">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Step 06</span>
                  <h5 className="text-2xl font-bold text-gray-900">Your Custom Trip Bundle</h5>
                  <p className="text-sm text-gray-500 italic mt-1">Review and refine your itinerary before payment.</p>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto max-h-[350px] pr-2">
                  {items.map(item => (
                    <motion.div 
                      layout
                      key={item.id} 
                      className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4 group"
                    >
                      <img src={item.img} className="w-12 h-12 rounded-xl object-cover" alt="" />
                      <div className="flex-1">
                        <div className="text-xs font-bold text-gray-900">{item.name}</div>
                        <div className="text-[10px] text-blue-600 font-bold uppercase">{item.type}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-900">${item.price}</span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 rounded-full bg-white text-gray-400 hover:text-red-500 shadow-sm flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  {items.length === 0 && (
                    <div className="text-center py-10 text-gray-400 text-sm italic">Bundle is empty. Search to add items.</div>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">Sub-Total</div>
                      <div className="text-3xl font-black text-gray-900 font-mono">${total}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-emerald-500 uppercase">Saving</div>
                      <div className="text-lg font-bold text-emerald-500">-$45.00</div>
                    </div>
                  </div>
                  <button 
                    disabled={items.length === 0}
                    onClick={() => setStep(7)} 
                    className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    Confirm & Complete Checkout <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 7 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-emerald-200">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h5 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Mission Accomplished</h5>
                <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
                  Amara completed all tasks flawlessly. The customized itinerary is secured for ${total}.
                </p>
                <div className="grid grid-cols-1 gap-4 w-full max-w-[280px]">
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center">
                     <span className="text-xs font-bold text-gray-400">Order ID</span>
                     <span className="text-xs font-bold text-gray-900">#SAV-9912</span>
                   </div>
                </div>
                <button 
                  onClick={() => {
                    setStep(1); 
                    setRegData({ name: '', email: '' });
                    setItems([
                      { id: 'acc', name: 'Luxury Sea-View Resort', price: 750, type: 'STAY', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
                      { id: 'guide', name: 'Musa "DeepSea" Juma', price: 120, type: 'GUIDE', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
                      { id: 'tour1', name: 'Coral Reef Snorkeling', price: 180, type: 'TOUR', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
                      { id: 'tour2', name: 'Old Town Heritage Walk', price: 50, type: 'TOUR', img: 'https://images.unsplash.com/photo-1589197331516-4d8459bbde91?auto=format&fit=crop&q=80&w=400' },
                    ]);
                  }} 
                  className="mt-10 text-xs font-bold text-blue-600 hover:underline"
                >
                  Restart Simulation
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Task Anatomy Sidebar */}
        <div className="space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-gray-900 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText className="w-32 h-32 rotate-12" />
            </div>
            <div className="relative z-10">
              <h6 className="font-bold mb-6 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Current Task Context
              </h6>
              
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.id} className={`flex gap-4 transition-all ${step === s.id ? 'opacity-100' : 'opacity-30 blur-[0.5px]'}`}>
                    <span className="text-xs font-mono text-gray-500">{String(s.id).padStart(2, '0')}</span>
                    <div>
                       <p className="text-xs font-bold">{s.title}</p>
                       <p className="text-[10px] text-blue-400 font-bold uppercase">{s.task}</p>
                    </div>
                    {step > s.id && <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 italic text-sm text-blue-900 leading-relaxed">
            "By mapping UI triggers directly to Task Analysis nodes, we ensure that every interaction serves a user's psychological goal, reducing bounce rates and increasing trust."
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SavoraDetail({ onBack }: { onBack: () => void }) {
  const [activePart, setActivePart] = useState<SavoraPart>(1);

  const parts = [
    { id: 1, title: 'Identity and Teams', icon: Users, description: 'Meet the team and project vision.' },
    { id: 2, title: 'Problem Domain', icon: LayoutGrid, description: 'Investigating the core problem and market gap.' },
    { id: 3, title: 'Personas', icon: Users, description: 'Detailed user profiles and empathy mapping.' },
    { id: 4, title: 'Design Alternatives', icon: FileText, description: 'Comparing different architectural and UI solutions.' },
    { id: 5, title: 'Task Analysis', icon: ListTodo, description: 'Hierarchical task analysis for all users.' },
    { id: 6, title: 'Prototype and Plan', icon: Code2, description: 'MVP development and evaluation methodology.' },
    { id: 7, title: 'Tourist Walkthrough', icon: LayoutGrid, description: 'Interactive journey through the eyes of a tourist.' },
    { id: 8, title: 'Usability Criteria', icon: ShieldCheck, description: 'Heuristic evaluation and design standards.' },
  ];  const renderContent = () => {
    switch (activePart) {
      case 1:
        return (
          <div className="space-y-8">
            <h4 className="text-3xl font-bold text-gray-900">Identity and Teams</h4>
            <p className="text-gray-600 leading-relaxed">
              Savora began as a vision to simplify luxury travel booking. Inspired by the giants like Booking.com, we aimed to create a more curated, "high-savor" experience. 
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <h5 className="font-bold text-blue-900 mb-2">Team Definition</h5>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Annabel Omondi (Lead Design)</li>
                  <li>• Joy Muiru (Architecture)</li>
                  <li>• Roycline Mwenda (Strategy)</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h5 className="font-bold text-gray-900 mb-2">Primary Links</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                    <ChevronRight className="w-4 h-4" /> Live Demo (Staging)
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                    <ChevronRight className="w-4 h-4" /> GitHub Repository
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                    <ChevronRight className="w-4 h-4" /> Figma Prototype
                  </li>
                </ul>
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/savora_home/1000/400" 
              className="w-full h-80 object-cover rounded-3xl" 
              alt="Savora Mockup"
              referrerPolicy="no-referrer"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Problem Domain</h4>
              <p className="text-gray-600 leading-relaxed">
                To build a flawless problem definition, here is how Savora contrasts with the market, specifically targeting the gaps left by industry leaders.
              </p>
            </div>

            {/* Benchmark Analysis */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900">Benchmark Analysis</h5>
              <div className="grid gap-6">
                {[
                  {
                    name: 'Wanderlog',
                    tag: 'Collaborative Itinerary Builder',
                    good: 'Lets you build beautiful, day-by-day itineraries, pinning hotels and attractions on a map.',
                    problem: 'It is just a planning tool. It doesn\'t handle live inventory or native bookings. Users risk rooms selling out while they finish planning manually elsewhere.',
                    color: 'border-orange-100 bg-orange-50/30'
                  },
                  {
                    name: 'Klook / GetYourGuide',
                    tag: 'Activity Packages',
                    good: 'Sells curated "packages" or experiences (e.g., Mombasa Marine Park snorkeling).',
                    problem: 'Packages are rigid. You can\'t easily swap activities within a mega-package. If you change your mind, the automation breaks.',
                    color: 'border-pink-100 bg-pink-50/30'
                  },
                  {
                    name: 'Standard OTAs',
                    tag: 'Booking.com / Expedia',
                    good: 'Handle live inventory directly with hotel reservation systems to prevent double-booking.',
                    problem: 'They do not organize your time. They sell you a room but don\'t map a logical schedule, leading to manual clashes between tours and check-in times.',
                    color: 'border-blue-100 bg-blue-50/30'
                  }
                ].map((app, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`p-8 rounded-[2rem] border ${app.color} transition-shadow hover:shadow-lg`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Benchmark {idx + 1}</span>
                        <h5 className="text-xl font-bold text-gray-900">{app.name}</h5>
                        <p className="text-xs font-semibold text-blue-600">{app.tag}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-bold text-green-600 mb-2 uppercase tracking-tight">What it does right</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{app.good}</p>
                      </div>
                      <div className="border-l border-gray-200 pl-6">
                        <p className="text-xs font-bold text-red-600 mb-2 uppercase tracking-tight">The Problem to Solve</p>
                        <p className="text-sm text-gray-700 leading-relaxed font-medium">{app.problem}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Problem Definitions */}
            <div className="space-y-8 pt-8 border-t border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900">Formulating the Problem Definition</h5>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm italic">
                  <h6 className="not-italic font-bold text-blue-600 mb-4 tracking-tight">Option A: The "Rigid Packages vs. Planning Burnout" Angle</h6>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "Traditional travel platforms operate in silos: Online Travel Agencies (like Booking.com) secure room availability but fail to organize a traveler's chronological schedule, while itinerary planners (like Wanderlog) map out trips but lack live inventory integration. Consequently, when travelers attempt to book pre-made holiday packages (similar to those on Klook), they are forced into rigid structures with no ability to remove undesirable activities."
                  </p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm italic">
                  <h6 className="not-italic font-bold text-blue-600 mb-4 tracking-tight">Option B: The "Dynamic Inventory Conflict" Angle</h6>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "The modern tourism domain lacks a unified platform capable of combining dynamic package customization with real-time inventory management. While current applications allow users to view destination itineraries, they do not sync live availability across lodging and local events simultaneously. This gap results in high rates of 'false availability' or double-bookings when users try to customize a trip."
                  </p>
                </div>
              </div>

              {/* The Solution */}
              <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-2xl shadow-blue-500/20">
                <h5 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 text-xs">!</div>
                  Our Solution: Dynamic Itinerary Bundling
                </h5>
                <p className="text-blue-50 leading-relaxed text-sm">
                  Savora introduces <strong>Dynamic Itinerary Bundling</strong>. The moment a user selects a "Mombasa Package", the app holds a temporary live lock on those rooms and event slots. When the user "X's out" Fort Jesus, the app instantly updates the price and the time slot, ensuring that whatever remains is 100% guaranteed and mathematically impossible to double-book.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Personas</h4>
              <p className="text-gray-600 leading-relaxed">
                By breaking down the core users into distinct personas, we ensure the platform addresses real-world friction and psychological needs.
              </p>
            </div>

            {/* Persona Profiles */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Persona Profiles
              </h5>
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Amara, 27",
                    role: "Solo Traveller",
                    quote: "I just want to show up and explore — not spend days planning logistics from scratch.",
                    color: "bg-emerald-50 border-emerald-100 text-emerald-900",
                    iconColor: "bg-emerald-500",
                    problems: ["Fragmented discovery", "Time-consuming coordination", "Safety uncertainty"]
                  },
                  {
                    name: "James, 34",
                    role: "Tour Guide",
                    quote: "I know these trails better than anyone — I just need travellers to be able to find me.",
                    color: "bg-amber-50 border-amber-100 text-amber-900",
                    iconColor: "bg-amber-500",
                    problems: ["Low digital visibility", "Manual booking management", "No secure payment"]
                  },
                  {
                    name: "Grace, 45",
                    role: "Eco-Lodge Host",
                    quote: "I have a beautiful property but guests can't find me. My rooms stay empty.",
                    color: "bg-rose-50 border-rose-100 text-rose-900",
                    iconColor: "bg-rose-500",
                    problems: ["Poor discoverability", "Inefficient manual process", "No review infrastructure"]
                  }
                ].map((persona, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-[2.5rem] border ${persona.color} relative overflow-hidden`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full ${persona.iconColor} flex items-center justify-center text-white`}>
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold">{persona.name}</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">{persona.role}</div>
                      </div>
                    </div>
                    <p className="text-sm italic mb-6 leading-relaxed">"{persona.quote}"</p>
                    <div className="space-y-2">
                       {persona.problems.map((p, pi) => (
                         <div key={pi} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter">
                           <div className={`w-1.5 h-1.5 rounded-full ${persona.iconColor}`} />
                           {p}
                         </div>
                       ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Design Alternatives</h4>
              <p className="text-gray-600 leading-relaxed">
                The journey to Savora involved iterative failure. We explored three distinct architectural paradigms, each revealing new depths of the "Dynamic Itinerary" problem.
              </p>
            </div>

            {/* Design 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <h5 className="text-xl font-bold text-gray-900">Design Alternative 1: The "Rigid Bundle" Paradigm</h5>
                </div>
                
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
                  <div className="space-y-6">
                    {/* Problem Diagram: Rigid Bundle Failure */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden relative group">
                      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Package: Mombasa Gold</div>
                          <div className="text-red-500 font-bold text-xs flex items-center gap-1 shrink-0 bg-red-50 px-2 py-1 rounded-md border border-red-100">
                            <X className="w-3 h-3" /> RIGID LINK ERROR
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" /><div className="w-24 h-2 bg-gray-200 rounded" />
                          </div>
                          <div className="h-12 bg-red-50 rounded-xl border-2 border-red-200 flex items-center px-4 gap-3 relative animate-pulse">
                            <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-24 h-2 bg-red-100 rounded" />
                            <div className="absolute right-4 text-red-500 font-black text-xs italic">ITEM SOLD OUT</div>
                          </div>
                          <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" /><div className="w-24 h-2 bg-gray-200 rounded" />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                           <div className="text-red-600 font-black text-2xl uppercase tracking-tighter rotate-[-5deg] border-4 border-red-600 inline-block px-4 py-1 rounded-lg opacity-40">
                             Package Unavailable
                           </div>
                           <p className="text-[10px] text-gray-400 mt-2 italic">Problem: 1 Missing item kills the entire bundle</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
                      <h6 className="text-red-900 font-bold text-sm mb-2 flex items-center gap-2">
                        Problem 1.1: Personalization Wall
                      </h6>
                      <p className="text-xs text-red-700 leading-loose">
                        Users cannot "X-out" individual sub-activities (e.g., swapping a beach tour for a museum visit). It's all-or-nothing.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
                      <h6 className="text-red-900 font-bold text-sm mb-2 flex items-center gap-2">
                        Problem 1.2: Inventory Fragility
                      </h6>
                      <p className="text-xs text-red-700 leading-loose">
                        If the historical museum is full, the entire 5-day "Mombasa Gold" package shows as "Sold Out" even if everything else is available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <h5 className="text-xl font-bold text-gray-900">Design Alternative 2: The "Fragmented Cart" Paradigm</h5>
                </div>
                
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
                  <div className="space-y-6">
                    {/* Problem Diagram: Semantic Clash */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden relative group">
                      <div className="mb-6">
                        <div className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest inline-block">Timeline (09:00 - 15:00)</div>
                      </div>
                      
                      <div className="h-40 relative border-l border-b border-gray-100 ml-4">
                        <div className="absolute bottom-0 left-[20%] w-1/2 h-8 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center text-[8px] font-bold text-blue-600">
                           ACTIVITY A (10:00 - 13:00)
                        </div>
                        <div className="absolute bottom-10 left-[40%] w-1/3 h-8 bg-red-100 border-2 border-red-400 rounded-lg flex items-center justify-center text-[8px] font-bold text-red-600 z-10 animate-bounce">
                           ACTIVITY B (11:00 - 13:00)
                        </div>
                        {/* Collision Indicator */}
                        <div className="absolute bottom-0 left-[40%] w-[33%] top-0 bg-red-500/10 border-x-2 border-dashed border-red-500 flex items-center justify-center">
                           <X className="w-8 h-8 text-red-500 opacity-20" />
                        </div>
                      </div>

                      <div className="mt-8 pt-4 text-center">
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Semantic Clash Detected</p>
                        <p className="text-[10px] text-gray-400 mt-2 italic">Problem: Cart doesn't know you can't be in two places at once</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                      <h6 className="text-orange-900 font-bold text-sm mb-2">
                        Problem 2.1: Semantic Clash
                      </h6>
                      <p className="text-xs text-orange-700 leading-loose">
                        The "Cart" doesn't understand time. A user could add a 2:00 PM snorkeling trip and a 1:00 PM museum visit that takes 3 hours.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                      <h6 className="text-orange-900 font-bold text-sm mb-2">
                        Problem 2.2: The "Ghost" Checkout
                      </h6>
                      <p className="text-xs text-orange-700 leading-loose">
                        Items are just "wishlisted". Between adding the hotel and reaching checkout, the snorkeling trip sells out, causing "Checkout Error" fatigue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design 3 */}
            <div className="relative">
              <div className={`absolute -left-4 top-0 ${activePart === 4 ? 'bottom-0' : 'h-12'} bg-blue-600 rounded-full transition-all`} />
              <div className="pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm animate-pulse">3</div>
                  <h5 className="text-2xl font-bold text-blue-600">Design 3: The Adaptive Canvas (Savora)</h5>
                </div>
                
                <div className="bg-white p-10 rounded-[3rem] border-2 border-blue-600 shadow-2xl shadow-blue-500/10 mb-8 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img 
                      src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover" 
                      alt="Savora Canvas Background"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                    <div className="flex-1 w-full space-y-4">
                       <div className="flex items-center justify-between">
                         <span className="text-[10px] font-bold text-blue-600 uppercase">Live Timeline Engine</span>
                         <div className="flex gap-1">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100" />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <div className="h-14 bg-white rounded-2xl border border-blue-100 p-4 flex items-center justify-between shadow-sm">
                           <div className="flex items-center gap-3"><div className="w-6 h-6 bg-blue-600 rounded-lg" /><div className="w-24 h-2 bg-blue-200 rounded" /></div>
                           <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">X</div>
                         </div>
                         <div className="h-14 bg-white rounded-2xl border border-blue-100 p-4 flex items-center justify-between shadow-sm">
                           <div className="flex items-center gap-3"><div className="w-6 h-6 bg-blue-600 rounded-lg" /><div className="w-24 h-2 bg-blue-200 rounded" /></div>
                           <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">X</div>
                         </div>
                       </div>
                    </div>
                    <div className="w-full md:w-64 space-y-4">
                      <div className="p-4 rounded-2xl bg-gray-900 text-white">
                        <div className="text-[8px] uppercase tracking-widest text-gray-500 mb-1">Total Guarantee</div>
                        <div className="text-2xl font-bold font-mono">$1,240.00</div>
                      </div>
                      <button className="w-full h-12 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 group">
                        Finalize <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100">
                    <h6 className="font-bold text-gray-900 mb-2">Live-Lock Logic</h6>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Instead of a cart, the system utilizes "Ephemeral Reservations". When an item is on the canvas, it is locked in the backend for 15 minutes.
                    </p>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100">
                    <h6 className="font-bold text-gray-900 mb-2">Instant Re-indexing</h6>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Removing an item triggers a global re-calculation of the itinerary logic, checking for gaps or potential new suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Task Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                A hierarchical decomposition of user goals into specific tasks and sub-tasks, providing the blueprint for our system architecture.
              </p>
            </div>

            <div className="space-y-12">
              <h5 className="text-2xl font-bold text-gray-900">3-Level Task Analysis: Goal → Task → Sub-task</h5>
              
              {/* Traveller Tasks */}
              <div className="bg-emerald-50/50 rounded-[3rem] border border-emerald-100 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h6 className="text-2xl font-bold text-emerald-900">Traveller (Amara)</h6>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Goal: Discover & Plan Trip</p>
                      <div className="space-y-4">
                        <TaskBlock number={1} title="Register & Set Up Profile" subs={["Open app / website", "Enter credentials", "Set preferences", "Verify email"]} />
                        <TaskBlock number={2} title="Search for Accommodation" subs={["Enter destination/dates", "Apply filters", "Browse listings", "Read verified reviews"]} />
                        <TaskBlock number={3} title="Evaluate & Compare Hosts" subs={["View host profiles", "Check availability", "Compare properties", "Read response rates"]} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Goal: Find & Select Guide</p>
                      <div className="space-y-4">
                        <TaskBlock number={4} title="Browse Guide Profiles" subs={["Search by area/activity", "View portfolios", "Read testimonials"]} />
                        <TaskBlock number={5} title="Contact & Vet Guide" subs={["Send inquiry message", "Review itinerary draft", "Confirm availability"]} />
                        <TaskBlock number={6} title="Select Guide & Package" subs={["Choose package type", "Review exclusions", "Add to booking cart"]} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Goal: Book, Pay & Complete Trip</p>
                      <div className="space-y-4">
                        <TaskBlock number={7} title="Complete Booking" subs={["Review combined summary", "Confirm exact dates", "Accept platform terms"]} />
                        <TaskBlock number={8} title="Make Payment" subs={["Choose method", "Enter secure details", "Download itinerary"]} />
                        <TaskBlock number={9} title="Complete the Trip" subs={["Check in at property", "Meet guide at location", "Participate in experience"]} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Goal: Feedback & Future Planning</p>
                      <div className="space-y-4">
                        <TaskBlock number={10} title="Rate & Review" subs={["Rate host (1-5 stars)", "Comment on guide", "Submit feedback"]} />
                        <TaskBlock number={11} title="Re-engage / Plan Next" subs={["Save to wishlist", "Receive trip recommendations", "Share social referral link"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Guide Tasks */}
              <div className="bg-amber-50/50 rounded-[3rem] border border-amber-100 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h6 className="text-2xl font-bold text-amber-900">Tour Guide (James)</h6>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Goal: Build Presence</p>
                    <div className="space-y-4">
                      <TaskBlock number={1} title="Register & Create Profile" subs={["Sign up via phone/email", "ID verification", "Select categories"]} />
                      <TaskBlock number={2} title="Build Guide Portfolio" subs={["Write expert bio", "Upload tour photos", "List spoke languages"]} />
                      <TaskBlock number={3} title="Define Tour Packages" subs={["Create package titles", "Write descriptions", "Set pricing & inclusions"]} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Goal: Manage Bookings</p>
                    <div className="space-y-4">
                      <TaskBlock number={4} title="Set Availability" subs={["Mark calendar dates", "Block personal time", "Set notice requirements"]} />
                      <TaskBlock number={5} title="Receive Booking Request" subs={["Get push notification", "View traveller profile", "Check own schedule"]} />
                      <TaskBlock number={6} title="Accept or Decline" subs={["Send confirmation", "Decline with reason", "Propose alternate dates"]} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Host Tasks */}
              <div className="bg-rose-50/50 rounded-[3rem] border border-rose-100 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h6 className="text-2xl font-bold text-rose-900">Host (Grace)</h6>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-widest">Goal: List & Attract</p>
                    <div className="space-y-4">
                      <TaskBlock number={1} title="Register as a Host" subs={["Submit verification docs", "Accept host agreement", "Set up payment account"]} />
                      <TaskBlock number={2} title="Create Property Listing" subs={["Specify room types", "Upload high-quality photos", "Set house rules"]} />
                      <TaskBlock number={3} title="Set Pricing & Policies" subs={["Set nightly rates", "Define seasonal discounts", "Enable instant booking"]} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-widest">Goal: Host & Experience</p>
                    <div className="space-y-4">
                      <TaskBlock number={7} title="Pre-Arrival Preparation" subs={["Send check-in instructions", "Prepare room to standard", "Brief support staff"]} />
                      <TaskBlock number={8} title="Check In & Host" subs={["Conduct property walkthrough", "Provide local tips", "Remain available for queries"]} />
                      <TaskBlock number={9} title="Check Out & Payment" subs={["Confirm room condition", "Release payment trigger", "Send thank-you message"]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8">
             <h4 className="text-3xl font-bold text-gray-900">Prototype and Plan</h4>
             <p className="text-gray-600 leading-relaxed">
               The prototype was built using React 19 for ultra-fast rendering. We implemented a "Search-to-Stay" funnel that takes under 4 clicks to confirm a booking.
             </p>
             <div className="p-8 rounded-[2.5rem] bg-black text-white">
               <h5 className="text-lg font-bold mb-6">Evaluation Pillars</h5>
               <div className="grid sm:grid-cols-3 gap-8">
                 <div>
                   <div className="text-2xl font-bold mb-1">SUS</div>
                   <div className="text-xs text-gray-400">System Usability Scale (&gt;85 target)</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold mb-1">A/B</div>
                   <div className="text-xs text-gray-400">Checkout completion comparison</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold mb-1">500ms</div>
                   <div className="text-xs text-gray-400">Average interaction latency</div>
                 </div>
               </div>
             </div>
          </div>
        );
      case 7:
        return (
          <TouristWalkthrough />
        );
      case 8:
        return (
          <div className="space-y-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Usability Criteria & Design Principles</h4>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to bridge the gap between travellers seeking authentic local experiences and local providers (Hosts and Guides) through a seamless, transparent, and reliable digital interface.
              </p>
            </div>

            {/* Heuristic Principles */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                Heuristic Principles (The 10 Rules)
              </h5>
              <div className="grid gap-6">
                {[
                  {
                    id: "A",
                    title: "Match between System and the Real World",
                    desc: "Information appears in a natural and logical order. Terms like 'Local Taxes' or 'Booking Deposit' must be used instead of technical jargon. Imagery must strictly reflect current reality—avoiding edited photos that create false expectations."
                  },
                  {
                    id: "B",
                    title: "Visibility of System Status",
                    desc: "During the payment journey, the system must provide immediate feedback. If a Transaction_Status = Failed, the user must be informed exactly why (e.g., Currency Restriction or Gateway Timeout) rather than seeing a generic error."
                  },
                  {
                    id: "C",
                    title: "Error Prevention (The 'Double Booking' Guard)",
                    desc: "The system shall implement a 10-minute 'soft-lock' on selected dates to prevent 'Calendar Glitches' noted in the requirements. Status_{Room} = Locked if (User_{Action} = Checkout)."
                  }
                ].map((rule) => (
                  <div key={rule.id} className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">{rule.id}</div>
                    <div>
                      <h6 className="font-bold text-gray-900 mb-2">{rule.title}</h6>
                      <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usability Criteria Table */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900">Detailed Usability Criteria</h5>
              <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Requirement</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Persona Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      { cat: "Transparency", req: "Initial price must equal final price (P_{initial} + Tax = P_{total}). No hidden local fees.", impact: ["Traveller"] },
                      { cat: "Reliability", req: "Real-time synchronization between Tour Guide calendars and Accommodation availability.", impact: ["Host", "Guide"] },
                      { cat: "Support", req: "AI-driven real-time support accessible within 2 clicks from any failure point.", impact: ["Tech Support"] },
                      { cat: "Security", req: "Biometric update logic: If Face_{Stored} eq Face_{Scanned}, update security records.", impact: ["Host"] }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-8 py-6 font-bold text-gray-900">{row.cat}</td>
                        <td className="px-8 py-6 text-gray-600 leading-relaxed">{row.req}</td>
                        <td className="px-8 py-6">
                          <div className="flex flex-wrap gap-2">
                            {row.impact.map(persona => (
                              <span key={persona} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase whitespace-nowrap">{persona}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Task-Specific Design Goals */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900">Task-Specific Design Goals</h5>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                  <h6 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Task 7.1: The Booking Journey
                  </h6>
                  <p className="text-sm leading-relaxed opacity-90">
                    Ensure the transition from "browsing" to "booked" involves no more than 4 screens. Each screen must include a "Back" button to maintain user control and freedom.
                  </p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gray-900 text-white shadow-xl shadow-black/20">
                  <h6 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Task 7.2: Portfolio & Trust
                  </h6>
                  <p className="text-sm leading-relaxed opacity-90">
                    As requested in point 11 of the notes, the system must display a "Portfolio of Projects" for guides. Usability here means showing verified past tours and "Current Project" status to build traveller trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-8">
              <h5 className="text-2xl font-bold text-gray-900">Success Metrics</h5>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Task Success Rate", val: "95%", desc: "Users should complete a booking without contacting support." },
                  { label: "Error Rate", val: "< 1%", desc: "'Double Booking' instances per month." },
                  { label: "Time to Recovery", val: "120s", desc: "AI support should resolve 'Failed Transaction' queries." }
                ].map((m, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{m.label}</div>
                      <div className="text-4xl font-black text-blue-600 mb-4">{m.val}</div>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-20 overflow-hidden min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Savora <span className="text-blue-600">Case Study</span></h2>
          </div>
          <div className="flex -space-x-4">
             {[1,2,3].map(i => (
               <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                 <img src={`https://picsum.photos/seed/team${i}/100/100`} alt="Team Member" referrerPolicy="no-referrer" />
               </div>
             ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Navigation Sidebar */}
          <div className="space-y-2">
            {parts.map((part) => (
              <button
                key={part.id}
                onClick={() => setActivePart(part.id as SavoraPart)}
                className={`w-full text-left p-6 rounded-3xl transition-all border flex items-start gap-4 ${
                  activePart === part.id 
                  ? 'bg-blue-50 border-blue-200 text-blue-900 shadow-sm' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                }`}
              >
                <div className={`p-2 rounded-xl ${activePart === part.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <part.icon className="w-5 h-5" />
                </div>
                <div>
                   <div className="font-bold text-sm">{part.title}</div>
                   <div className={`text-xs mt-1 ${activePart === part.id ? 'text-blue-700' : 'text-gray-400'}`}>{part.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <motion.div
            key={activePart}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50/50 rounded-[3rem] p-8 md:p-16 border border-gray-100"
          >
             {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
