import { motion } from 'motion/react';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-template-columns-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Innovation at Speed
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Building the <span className="text-blue-600">Future</span> of Digital Experience.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              AdventHub is a boutique technology studio dedicated to crafting high-performance digital products. From AI-driven solutions to global booking platforms, we bring vision to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onExplore}
                className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-3 shadow-xl shadow-black/10 group"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl text-lg font-medium border border-gray-200 hover:border-gray-900 transition-all">
                Learn More
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">12+</div>
                <div className="text-sm text-gray-500 font-medium">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-500 font-medium">Core Minds</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-500 font-medium">Client Love</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
               <img 
                src="https://picsum.photos/seed/adventhub_hero/1000/1000" 
                alt="AdventHub Innovation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[240px] -rotate-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-bold text-gray-900">Global Reach</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our infrastructure powers applications accessible in over 50 countries.
              </p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px] rotate-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-bold text-gray-900">Scalable</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Built to handle millions of requests with ease.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
