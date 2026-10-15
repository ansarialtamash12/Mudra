import React from 'react';

const VideoSectionUI = () => {
  return (
    // Main Container (Background transparent rakha hai taaki page ka theme inherit ho)
    <div className="w-full max-w-7xl mx-auto py-24 px-6 transition-colors duration-300">
      
      {/* 1. TOP SECTION: Heading, Text aur Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        
        {/* Left Side: Heading & Subtext */}
        <div className="max-w-3xl">
          {/* Light mode: Black text | Dark mode: White text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Where crypto meets real life — <br className="hidden md:block" />
            empowering global payments with stablecoins
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-lg">
            Spend stablecoins instantly — buy coffee, shop online, or pay bills with MDR Futuristics
          </p>
        </div>

        {/* Right Side: Button (Light aur Dark dono ke liye alag styling) */}
        {/* Light: Navy background, white text | Dark: White background, navy text */}
        <button className="flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-colors duration-300 shrink-0 bg-[#06143F] text-white hover:bg-gold hover:text-white dark:bg-white dark:text-[#06143F] dark:hover:bg-gold dark:hover:text-white">
          <span>Get started</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* 2. BOTTOM SECTION: Video Box */}
      {/* Light mode: Light border & soft shadow | Dark mode: Glowing blue shadow */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border transition-all duration-300 bg-gray-100 dark:bg-[#0A1636] border-gray-200 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-[0_40px_80px_rgba(6,20,63,.45),0_0_60px_rgba(47,123,255,.25)] group">
        
        {/* Video Element */}
        <video
          src="bannerVideos.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Dark Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Bottom Center Text  */}
        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h3 className="font-serif text-white text-2xl md:text-4xl lg:text-5xl tracking-wide drop-shadow-lg mb-2">
            Fast <span className="text-gold mx-2">•</span> Secure <span className="text-gold mx-2">•</span> Contactless Payments
          </h3>
          <p className="font-serif text-white text-3xl md:text-5xl lg:text-6xl drop-shadow-xl">
            Tap. Pay. Go.
          </p>
        </div>

        {/* Bottom Right Logo  */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 z-10 px-5 py-2.5 rounded-full border transition-colors duration-300 bg-white/80 border-gray-200 dark:bg-black/50 dark:border-white/10 backdrop-blur-md">
          {/* Logo Icon Placeholder */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FFEDB5] via-gold to-gold-dark flex items-center justify-center">
            <span className="text-[#06143F] font-bold text-sm">M</span>
          </div>
          <span className="font-bold tracking-[0.2em] text-sm uppercase text-gray-900 dark:text-white">
            Mudra
          </span>
        </div>

      </div>

    </div>
  );
};

export default VideoSectionUI;