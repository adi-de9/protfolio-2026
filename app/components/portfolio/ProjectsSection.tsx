'use client';

import { useState, useMemo, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { Project, ProjectCategory } from '../../types/portfolio';
import { PROJECTS } from '../../data/portfolio-data';
import { useSound } from '../../hooks/use-sound-fx';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Backend & Cloud',
  'Web Platforms',
  'Mobile Apps',
];

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { playSound } = useSound();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, spotX: 50, spotY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;

    const rx = -py * 5;
    const ry = px * 5;

    setTilt({
      rx,
      ry,
      spotX: Math.round((x / rect.width) * 100),
      spotY: Math.round((y / rect.height) * 100),
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0, spotX: 50, spotY: 50 });
  };

  return (
    <article
      ref={cardRef}
      onClick={() => onCardClick(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
      }}
      className="relative group cursor-pointer rounded-2xl bg-charcoal hairline-box p-6 sm:p-7 flex flex-col justify-between touch-card overflow-hidden hover:border-alabaster/40 transition-transform duration-200 ease-out"
      data-cursor="System Flow"
    >
      {/* Dynamic Cursor Spotlight Radial Highlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(420px circle at ${tilt.spotX}% ${tilt.spotY}%, rgba(224, 79, 51, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {project.imageUrl && (
          <div className="relative w-full h-44 sm:h-52 mb-5 rounded-xl overflow-hidden bg-obsidian border border-white/5">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none" />
          </div>
        )}

        <div className="flex items-center justify-between font-mono text-xs mb-4">
          <span className="px-2.5 py-1 rounded-md bg-surface text-vermilion font-medium hairline-box">
            Project {project.number}
          </span>
          <span className="text-stone font-medium">{project.category}</span>
        </div>

        <h3 className="font-sans font-bold text-xl sm:text-2xl text-alabaster group-hover:text-vermilion transition-colors mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-stone text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-surface hairline-box font-mono text-[11px] text-alabaster"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links Bar */}
        <div className="pt-4 hairline-t flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  playSound('tap');
                }}
                className="btn-awwwards px-2.5 py-1 rounded-md bg-vermilion/15 border border-vermilion/30 text-vermilion hover:bg-vermilion hover:text-white transition flex items-center gap-1 text-[11px]"
                title="Open live deployment"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  playSound('tap');
                }}
                className="btn-awwwards px-2.5 py-1 rounded-md bg-surface hairline-box text-stone hover:text-alabaster hover:border-stone transition flex items-center gap-1 text-[11px]"
                title="View repository on GitHub"
              >
                <span>Code</span>
                <span>↗</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-alabaster group-hover:text-vermilion transition-colors font-medium">
            <span className="hidden sm:inline">System Flow</span>
            <span className="px-2.5 py-1 rounded-md bg-surface hairline-box group-hover:bg-vermilion group-hover:text-white text-alabaster transition-all duration-200">
              Inspect →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const { playSound } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All Projects');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') return PROJECTS;
    return PROJECTS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleFilter = (cat: ProjectCategory) => {
    playSound('tap');
    setSelectedCategory(cat);
  };

  const handleCardClick = (project: Project) => {
    playSound('switch');
    onSelectProject(project);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 hairline-b scroll-mt-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="font-mono text-xs text-vermilion uppercase tracking-widest mb-2 font-semibold">
            Selected Projects
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-alabaster descender-safe">
            Production{' '}
            <span className="font-serif italic font-normal text-vermilion">Applications</span> &amp;
            Systems
          </h2>
        </div>

        {/* Filter Pills with Full Button Lifecycle */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilter(cat)}
                className={`btn-awwwards shrink-0 h-10 px-4 rounded-full font-mono text-xs transition active:scale-95 ${
                  isActive
                    ? 'bg-alabaster text-obsidian font-semibold shadow-md'
                    : 'bg-charcoal hairline-box text-stone hover:text-alabaster'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with 3D Spotlight Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}
