import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeywordTool from './components/KeywordTool';
import SEOEditor from './components/SEOEditor';
import Dashboard from './components/Dashboard';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 selection:bg-vivid-cyan/30 selection:text-vivid-cyan">
      <Navbar />
      <main>
        <Hero />
        <KeywordTool />
        <SEOEditor />
        <Dashboard />
        <SuccessStories />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

