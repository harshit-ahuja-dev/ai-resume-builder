import React from 'react'
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div>

      <nav class="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  
            <rect x="4" y="6" width="42" height="48" rx="8" fill="#4F39F6"/>

            
            <rect x="13" y="18" width="18" height="3" rx="1.5" fill="white"/>
            <rect x="13" y="26" width="24" height="3" rx="1.5" fill="white"/>
            <rect x="13" y="34" width="20" height="3" rx="1.5" fill="white"/>

            
            <path d="M53 12L55.5 18L62 20.5L55.5 23L53 29L50.5 23L44 20.5L50.5 18L53 12Z"
                  fill="#F59E0B"/>

          
            <text x="75" y="28"
                  font-family="Inter, Arial, sans-serif"
                  font-size="22"
                  font-weight="700"
                  fill="#0F172A">
              Resume
            </text>

            <text x="155" y="28"
                  font-family="Inter, Arial, sans-serif"
                  font-size="22"
                  font-weight="700"
                  fill="#4F39F6">
              AI
            </text>

            <text x="75" y="46"
                  font-family="Inter, Arial, sans-serif"
                  font-size="10"
                  letter-spacing="1"
                fill="#64748B">
            BUILD SMARTER RESUMES
            </text>
          </svg>

          <div class="hidden md:flex items-center gap-20 transition duration-500 mr-50 ml-40">
              <a href="/home" class="hover:text-slate-500 transition">
                  Home
              </a>
              <a href="/features" class="hover:text-slate-500 transition">
                  Features
              </a>
              <a href="/testimonials" class="hover:text-slate-500 transition">
                  Testimonials
              </a>
              <a href="/contact" class="hover:text-slate-500 transition">
                  Contact
              </a>
          </div>

          <div className="flex gap-2">

            <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95
            transition-all rounded-full text-white">
            Get started
            </Link>

            <Link to='/app?state=login' className="hidden md:block px-6
            py-2 border active:scale-95 hover:bg-slate-50
            transition-all rounded-full text-slate-700
            hover: text-slate-900" >
            Login
            </Link>

          </div>
          
      </nav>

    </div>
  )
}

export default Hero