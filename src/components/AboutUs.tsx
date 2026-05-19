import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">The Inventors</h2>
          <h3 className="text-4xl font-bold text-gray-900">Meet AdventHub Core</h3>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A small team of passionate technologists dedicated to pushing the boundaries of what is possible in the digital space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">{member.role}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">VIEW PROFILE</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Detail Popover (Modal-like) */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedMember.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-3xl rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                title="Close Profile"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-[3/4] overflow-hidden">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">{selectedMember.role}</p>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{selectedMember.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedMember.bio}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Twitter className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Github className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-gray-500">Currently available for collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
