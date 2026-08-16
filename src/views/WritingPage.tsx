import { posts } from '../data/blog';
import { WritingListClient } from './WritingListClient';

export function WritingPage() {
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-6 block">
              Archive // Writing
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.9]">
              Thoughts on <br /> Systems & <br /> <span className="text-text-secondary">Growth.</span>
            </h1>
          </div>

          <WritingListClient posts={posts} categories={categories} />
        </div>
      </main>
    </>
  );
}
