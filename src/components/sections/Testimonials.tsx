import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block">
            Testimonials
          </span>
        </RevealOnScroll>

        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="relative py-12">
              {/* Large Quote */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-5"
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Quote className="w-32 h-32 text-blue-600 dark:text-blue-400" />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0, rotate: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: star * 0.08 + 0.2, type: 'spring', stiffness: 300 }}
                  >
                    <Star size={22} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text — Large */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed italic font-medium relative z-10 mb-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-30 blur" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-white dark:border-gray-700 shadow-lg relative"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
