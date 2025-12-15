import { ExternalLink } from 'lucide-react';
import { articles } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import type { Article } from '../../types';

export const Writing = () => {
  return (
    <section id="writing" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="thoughts">Writing & Thoughts</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article: Article, index: number) => (
            <RevealOnScroll key={index}>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noreferrer" 
                className="block group h-full"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      {article.platform}
                    </span>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="text-xs text-gray-400 font-medium pt-4 border-t border-gray-100 dark:border-gray-700">
                    Published {article.date}
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};