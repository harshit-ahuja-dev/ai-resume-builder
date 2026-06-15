import { BookAIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Testimonials = () => {

  const testimonials = [
    { id: 1, role: 'Product Designer', quote: 'This platform transformed our team collaboration. The interface and features make design work seamless.', author: 'Sarah Chen', },
    { id: 2, role: 'Software Engineer', quote: 'Best investment for our workflow. The integration capabilities and optimization tools are outstanding.', author: 'Marcus Johnson', },
    { id: 3, role: 'Marketing Manager', quote: 'Our campaign efficiency increased by 40%. The analytics dashboard provides insights we never had before.', author: 'Emily Rodriguez', },
    { id: 4, role: 'Startup Founder', quote: 'As a small team, we needed something reliable and scalable. This exceeded our expectations and grew with us from day one.', author: 'David Park', },
    { id: 5, role: 'Content Creator', quote: 'The automation features save me hours every week. I can finally focus on creating content rather than managing tedious tasks.', author: 'Jessica Taylor', },
    { id: 6, role: 'Sales Director', quote: 'Our team closed 30% more deals this quarter thanks to the streamlined processes and real-time collaboration tools provided.', author: 'Michael Anderson', },
  ]

  return (

    <>
      <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-10'>
        <div className="flex items-center gap-2 text-sm text-indigo-800 bg-indigo-400/10 border border-indigo-800 rounded-full px-6 py-1 mb-4">
              <BookAIcon width={14}/>
              <span>Testimonials</span>
        </div>
        <Title title="Don't just take our words" description= "Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />
      </div>

    
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>

      <section className="pb-16 ">
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 pt-10">
          {testimonials.map((t) => (
            <article key={t.id} role="article" aria-label={`Testimonial by ${t.author}`} tabIndex={0} className="bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transform transition hover:-translate-y-1" >
              <p className="font-medium text-sm text-white mb-6">{t.role}</p>
              <blockquote className="text-sm text-gray-200 mb-4.5">“{t.quote}”</blockquote>
              <cite className="text-xs text-gray-300 not-italic">- {t.author}</cite>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials
