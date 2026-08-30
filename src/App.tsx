import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FreeMixingChallenge } from './components/FreeMixingChallenge';
import { Packages } from './components/Packages';
import { RecordingGuide } from './components/RecordingGuide';
import { StudioPolicies } from './components/StudioPolicies';
import { FinalCTA } from './components/FinalCTA';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex flex-col selection:bg-[#7C3AED] selection:text-white relative overflow-x-hidden">
        {/* Cinematic Dual-Tone Ambient Gradient Backdrop */}
        <div
          className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, #7C3AED 0%, transparent 40%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 40%)'
          }}
        />

        {/* Sticky Top Navigation Header */}
        <Header />

        {/* Main Single-Page Content Body */}
        <main className="flex-grow relative z-10">
          {/* Primary Hero Section */}
          <Hero />

          {/* 01 — Free Mixing */}
          <FreeMixingChallenge />

          {/* 02 — Paid Mixing Packages */}
          <Packages />

          {/* 03 — Home Recording Guide Video */}
          <RecordingGuide />

          {/* 04 — Studio Guidelines & Policies */}
          <StudioPolicies />

          {/* Cinematic Final Closing CTA */}
          <FinalCTA />

          {/* Social Media & Direct Contact Channels */}
          <SocialSection />
        </main>

        {/* Studio Footer */}
        <Footer />

        {/* Floating and Sticky Mobile WhatsApp CTA Engine */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

