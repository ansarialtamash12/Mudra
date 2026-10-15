"use client";

import { useState, useRef } from "react";

// 1. TypeScript Interface
interface Testimonial {
  id: number;
  rating: number;
  title: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

// 2. 7 Testimonials ka Data
const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 0,
    rating: 5,
    title: "Seamless Stablecoin Integration",
    quote: "MDR Futuristics crypto card is my go to for any payment online. The stablecoin integration makes global transactions seamless.",
    name: "Rajiv Sharma",
    role: "Verified User on Trustpilot",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 1,
    rating: 5,
    title: "Smooth Everyday Spending",
    quote: "The experience with MDR Futuristics is really amazing. From fueling up my ride to late night online hauls, it's so smooth!",
    name: "Priya Kaur",
    role: "Community Member on X",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    rating: 5,
    title: "Best Crypto Card Ever Used",
    quote: "I've tried several crypto cards over the years and MDR Futuristics is hands down the BEST one I've ever used!",
    name: "Amit Singh",
    role: "Top Reviewer on Trustpilot",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    rating: 5,
    title: "Unforgettable Customer Experience",
    quote: "MDR Futuristics turned an ordinary day into something unforgettable. Their customer service resolves issues within minutes.",
    name: "Neha Verma",
    role: "Prize Winner & User of MDR",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 4,
    rating: 5,
    title: "Game Changer for Freelancers",
    quote: "As a freelancer receiving payments globally, MDR has been a game changer. Instant conversion to local currency saves me so much time.",
    name: "Rahul Mehta",
    role: "Freelance Developer",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 5,
    rating: 5,
    title: "Highly Recommended",
    quote: "The no hidden fees policy is what drew me in, but the smooth UI and instant transfers kept me here. Highly recommended!",
    name: "Sneha Kapoor",
    role: "Crypto Enthusiast",
    avatarUrl: "https://i.pravatar.cc/150?img=28",
  },
  {
    id: 6,
    rating: 5,
    title: "Finally, Crypto Made Easy",
    quote: "I used to struggle with spending my crypto. MDR made it as easy as using a regular bank card. Absolutely brilliant!",
    name: "Vikram Das",
    role: "Early Adopter",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 3. Dot pe click karne par smooth scroll
  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    const cardElement = document.getElementById(`testimonial-card-${index}`);
    if (cardElement && scrollRef.current) {
      cardElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // 4. Manual scroll karne par active dot update karna
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Card ki width (approx 324px including gap)
      const cardWidth = 324; 
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex >= 0 && newIndex < TESTIMONIALS_DATA.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-300 overflow-hidden">
      
      {/* ================= TOP HEADER ================= */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Hear from Our Community
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
          Join thousands of users who trust MDR Futuristics for effortless, secure payments with stablecoins. Your age, experience, or location doesn't matter — we give everyone a chance to spend crypto in real life.
        </p>
      </div>

      {/* ================= SLIDER CONTAINER ================= */}
      <div className="relative">
        
        {/* Scrollable Track (Scrollbar hidden) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`testimonial-card-${index}`}
              className="snap-start flex-shrink-0 w-[300px] md:w-[320px] lg:w-[350px] h-auto"
            >
              {/* CARD DESIGN (Theme reference from previous components) */}
              <div className="h-full flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0A1636] border border-gray-200 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-colors duration-300">
                
                {/* Stars (Gold accents) */}
                <div className="flex gap-1 mb-5 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                {/* Title & Quote */}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Divider & User Info */}
                <div className="border-t border-gray-100 dark:border-white/10 pt-5 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/20"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= PAGINATION DOTS ================= */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-6 h-2.5 bg-[#0A1636] dark:bg-[#1E4FD6]" // Active dot (Navy in light, Blue in dark)
                  : "w-2.5 h-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40" // Inactive dot
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}