/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import SavoraDetail from './components/SavoraDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSavoraDetail, setShowSavoraDetail] = useState(false);

  // Handle navigation
  const navigate = (id: string) => {
    setShowSavoraDetail(false);
    setCurrentPage(id);
    
    if (id !== 'home') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openSavora = () => {
    setShowSavoraDetail(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (showSavoraDetail) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onNavigate={navigate} currentPage={currentPage} />
        <SavoraDetail onBack={() => setShowSavoraDetail(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <main>
        <Hero onExplore={() => navigate('projects')} />
        <Projects onSelectProject={(id) => id === 'savora' ? openSavora() : navigate('projects')} />
        <AboutUs />
      </main>

      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">AdventHub</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AdventHub. All rights reserved. Built by Annabel, Joy & Roycline.
            </p>
            <div className="flex gap-6 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-black">Terms</a>
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

