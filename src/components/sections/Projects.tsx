'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ImageModal from '@/components/ImageModal';
import { SparklesCore } from '@/components/ui/sparkles';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const categories = ["All", "Web Development", "Data Science", "AI/ML"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : 
    Array.isArray(project.category) 
      ? project.category.includes(selectedCategory)
      : project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative"
        >
          {/* Sparkles behind the header */}
          <div className="absolute inset-0 w-full h-32 -top-8">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#3b82f6"
              speed={0.3}
            />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white relative z-10">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 relative z-10">
            A showcase of my recent work and achievements
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Glowing Effect Container */}
                <div className="relative rounded-lg overflow-hidden">
                  <GlowingEffect
                    spread={55}
                    glow={true}
                    disabled={false}
                    proximity={140}
                    inactiveZone={0.08}
                    borderWidth={3}
                    movementDuration={0.35}
                    blur={1.5}
                  />
                  {/* Project Card Content */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden relative">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-600">
                      {project.image && (
                        <div 
                          onClick={() => setSelectedImage({ src: project.image!, alt: project.title })}
                          className="cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={225}
                            className="object-cover w-full h-48"
                          />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <Link href={`/projects/${project.id}`} legacyBehavior>
                          <a className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium">
                            View Details →
                          </a>
                        </Link>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-white bg-gray-900 dark:bg-gray-800 rounded hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
                            title="View on GitHub"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-7.5A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5h7.5a2.25 2.25 0 002.25-2.25v-3.75m1.5-6l-9 9m0 0h6.75M7.5 16.5V9.75" />
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  );
}
