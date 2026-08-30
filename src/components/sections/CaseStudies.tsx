"use client";
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { projects, testimonials } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

const ACCENT = '#60a5fa';
const AR = '59,130,246';
const E = [0.16, 1, 0.3, 1] as const;

export function CaseStudies() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  const spotlightProjects = projects.filter(p => p.featured);
  const clientProjects = projects.filter(p => !p.featured);

  return (
    <section id="case-studies" className="relative w-full" style={{ background: '#050505' }}>
      {/* Section Header */}
      <div
        ref={headRef}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(48px, 8vh, 80px) clamp(24px, 5vw, 80px) clamp(32px, 4vh, 48px)',
        }}
      >
        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.0, ease: E as any }}
          style={{
            height: 1,
            width: '100%',
            transformOrigin: 'left',
            background: 'rgba(255,255,255,0.06)',
            marginBottom: 'clamp(24px, 4vh, 48px)',
          }}
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E as any, delay: 0.1 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: `rgba(${AR},0.5)`,
            marginBottom: 16,
          }}
        >
          01 // Selected Work
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: E as any, delay: 0.18 }}
          style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(12px, 2vw, 24px)', flexWrap: 'wrap' }}
        >
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            color: 'rgba(250,250,250,0.95)',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Selected
          </span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            color: ACCENT,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Work.
          </span>
          <span style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: `rgba(${AR},0.4)`,
          }}>
            ({projects.length})
          </span>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: E as any, delay: 0.28 }}
          style={{
            marginTop: 12,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(250,250,250,0.5)',
          }}
        >
          Shipped products and client work.
        </motion.p>
      </div>

      {/* ── Featured Products — Editorial Rows ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px) 64px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <h4
          className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mb-12 mt-12"
        >
          Featured Products & Systems
        </h4>

        <div className="flex flex-col gap-20 lg:gap-24">
          {spotlightProjects.map((project, idx) => {
            const isVideo = project.image.endsWith('.mp4') || project.image.endsWith('.webm');
            const isReversed = idx % 2 !== 0;
            const num = String(idx + 1).padStart(2, '0');

            return (
              <FeaturedRow
                key={project.title}
                project={project}
                isVideo={isVideo}
                isReversed={isReversed}
                num={num}
                idx={idx}
              />
            );
          })}
        </div>
      </div>

      {/* ── Client Work — Compact List ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px) 48px',
        }}
      >
        <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mb-6 mt-16 pt-12 border-t border-zinc-900">
          Client Contracts & Web Projects
        </h4>

        <div className="flex flex-col">
          {clientProjects.map((project, idx) => (
            <ClientRow key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>

      {/* ── Inline Client Feedback ── */}
      {testimonials.length > 0 && (
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: 'clamp(32px, 4vh, 48px) clamp(24px, 5vw, 80px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: E as any }}
            style={{
              position: 'relative',
              padding: 'clamp(20px, 3vw, 32px)',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.03)',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 3,
              height: '100%',
              background: `linear-gradient(to bottom, ${ACCENT}, transparent)`,
              opacity: 0.4,
            }} />

            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: `rgba(${AR},0.5)`,
              display: 'block',
              marginBottom: 12,
            }}>Client Feedback</span>

            <p style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: 'rgba(250,250,250,0.55)',
              lineHeight: 1.8,
              fontWeight: 300,
              fontStyle: 'italic',
              marginBottom: 16,
              maxWidth: 700,
            }}>
              &quot;{testimonials[0].quote}&quot;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: `rgba(${AR},0.08)`,
                border: `1px solid rgba(${AR},0.15)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: ACCENT,
              }}>
                {testimonials[0].author.charAt(0)}
              </div>
              <div>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'rgba(250,250,250,0.85)',
                  display: 'block',
                }}>{testimonials[0].author}</span>
                <span style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,250,0.45)',
                }}>{testimonials[0].role}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom accent line */}
      <div style={{ height: 1, background: `rgba(${AR},0.12)`, marginTop: 'clamp(32px, 4vh, 48px)' }} />
    </section>
  );
}


/* ═══════════════════════════════════════════════════
   Featured Project — Editorial Row
   ═══════════════════════════════════════════════════ */

interface FeaturedRowProps {
  project: typeof projects[number];
  isVideo: boolean;
  isReversed: boolean;
  num: string;
  idx: number;
}

function FeaturedRow({ project, isVideo, isReversed, num, idx }: FeaturedRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: E as any }}
      className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start`}
    >
      {/* Media block */}
      <div
        className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative overflow-hidden w-full aspect-[16/10] bg-zinc-900/30 rounded-lg border border-zinc-800/50 group-hover:border-zinc-700/60 transition-colors duration-500">
          {isVideo ? (
            <video
              src={project.image}
              autoPlay muted loop playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
            />
          )}
        </div>
      </div>

      {/* Text block */}
      <div
        className={`lg:col-span-5 flex flex-col gap-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Number + Role */}
        <div className="flex items-center gap-4">
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: `rgba(${AR}, 0.15)`,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {num}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
            {project.role}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'rgba(250,250,250,0.95)',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
            className="group-hover:text-[#60a5fa] transition-colors duration-300"
          >
            {project.title}
          </h3>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-zinc-500 hover:text-white hover:border-[#60a5fa]/50 transition-all shrink-0 mt-1"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed font-light">
          {project.result}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="flex flex-col gap-2.5 pt-4 border-t border-zinc-800/40">
            {project.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-zinc-500 leading-normal">
                <span className="text-[#60a5fa] shrink-0 select-none font-bold mt-px">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack — inline, no pills */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-800/40 mt-auto">
          <span className="font-mono text-[10px] text-zinc-500 tracking-wide">
            {project.tech.join(' · ')}
          </span>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 hover:text-[#60a5fa] transition-colors whitespace-nowrap"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


/* ═══════════════════════════════════════════════════
   Client Project — Compact List Row
   ═══════════════════════════════════════════════════ */

interface ClientRowProps {
  project: typeof projects[number];
  idx: number;
}

function ClientRow({ project, idx }: ClientRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: idx * 0.06, ease: E as any }}
      className="group flex items-center gap-5 py-5 border-b border-zinc-900/60 last:border-b-0"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden shrink-0 w-16 h-11 md:w-20 md:h-14 rounded-md bg-zinc-900/40 border border-zinc-800/40 group-hover:border-zinc-700/50 transition-colors">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-grow min-w-0">
        <div className="flex items-baseline gap-3">
          <h4
            className="font-display font-semibold text-sm md:text-base text-zinc-200 group-hover:text-[#60a5fa] transition-colors leading-tight uppercase tracking-tight truncate"
          >
            {project.title}
          </h4>
          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-wider text-zinc-600 whitespace-nowrap hidden sm:inline">
            {project.role}
          </span>
        </div>
        <p className="text-[11px] md:text-xs text-zinc-500 leading-relaxed font-light mt-1 line-clamp-1">
          {project.result}
        </p>
      </div>

      {/* Link arrow */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-zinc-600 hover:text-[#60a5fa] transition-colors p-1"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}
