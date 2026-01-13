import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="testimonials">Client Feedback</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-1 transition-transform duration-300">
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-20 h-20 -rotate-12" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-600 shadow-sm" 
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
