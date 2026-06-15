import { Zap } from 'lucide-react';
import React from 'react'
import Title from './Title';

const Features = () => {

  const [isHover, setIsHover] = React.useState(false);

  return (

    
    <div className='flex flex-col items-center my-10 scroll-mt-10'>
    
      <div className="flex items-center gap-2 text-sm text-indigo-800 bg-indigo-400/10 border border-indigo-800 rounded-full px-6 py-1 mb-4">
            <Zap width={14}/>
            <span>Responded to 99% applicants</span>
      </div>

    

      <Title title={'AI-Powered Resume Features'} description={'Create ATS-friendly resumes, optimize keywords, and get AI-powered feedback in seconds.'} />

      <div className="flex flex-wrap items-center justify-center gap-20 mt-16 mb-16 pb-20">

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-200">
          <img
            className="rounded-xl"
            src="./src/assets/images/ats-score.png"
            alt="ATS Resume Scanner"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            ATS Score Analysis
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Analyze your resume against Applicant Tracking Systems and discover missing keywords.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="/src/assets/images/ai-feedback.png"
            alt="AI Feedback"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            AI Resume Feedback
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Receive personalized suggestions to improve skills, projects, achievements, and formatting.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="/images/resume-builder.jpg"
            alt="Resume Builder"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            One-Click Resume Generation
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Generate professional resumes instantly using AI-powered templates and content suggestions.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Features
