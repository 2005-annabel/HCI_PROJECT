import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl font-bold text-gray-900">Featured Creations</h3>
          </div>
          <p className="text-gray-500 max-w-md">
            Each project is a testament to our commitment to excellence, usability, and technical rigor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onSelectProject(project.id)}
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-black/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="w-full flex justify-between items-center text-white">
                    <span className="font-bold flex items-center gap-2">
                       Explore Case Study <ArrowUpRight className="w-5 h-5" />
                    </span>
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                {project.isMain && (
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-lg">
                    Flagship Project
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">Web Engine</span>
                  <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">System Architecture</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
