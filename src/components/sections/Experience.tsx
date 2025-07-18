'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaHandsHelping } from 'react-icons/fa';
import { experience, volunteerExperience } from '@/data/resume';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { SparklesCore } from '@/components/ui/sparkles';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Sort work and volunteer experience by date (most recent first)
  const sortedWork = [...experience].sort((a, b) => {
    const yearA = parseInt(a.period.split(' ')[a.period.split(' ').length - 1]) || 0;
    const yearB = parseInt(b.period.split(' ')[b.period.split(' ').length - 1]) || 0;
    return yearB - yearA;
  });
  const sortedVolunteer = [...volunteerExperience].sort((a, b) => {
    const yearA = parseInt(a.period.split(' ')[a.period.split(' ').length - 1]) || 0;
    const yearB = parseInt(b.period.split(' ')[b.period.split(' ').length - 1]) || 0;
    return yearB - yearA;
  });

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative">
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
              particleDensity={60}
              className="w-full h-full"
              particleColor="#10b981"
              speed={0.4}
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white relative z-10">
            Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 relative z-10">
            My professional journey and volunteer contributions
          </p>
        </motion.div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-2">
            <FaBriefcase className="inline-block text-blue-500" /> Work Experience
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedWork.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-h-[20rem] list-none"
              >
                <div className="animated-border-tracer relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 dark:border-gray-700 p-2 md:rounded-[1.5rem] md:p-3 group">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={150}
                    inactiveZone={0.05}
                    borderWidth={4}
                    movementDuration={0.3}
                    blur={2}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] group-hover:shadow-2xl group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="relative flex flex-1 flex-col justify-between gap-3 h-full">
                      {/* Icon Container - Aceternity Style */}
                      <div className="w-fit rounded-lg border-[0.75px] border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-3 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300">
                        <FaBriefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      {/* Title always at the top */}
                      <div className="flex flex-col flex-grow">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <span className={cn(
                            "px-3 py-1 text-xs rounded-full font-medium shrink-0 transition-all duration-300",
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 group-hover:shadow-lg group-hover:shadow-blue-500/30'
                          )}>
                            Work
                          </span>
                        </div>
                        {/* Rest of the content below */}
                        <div className="space-y-1">
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {exp.period} {exp.type && exp.type !== 'Volunteer' && `• ${exp.type}`}
                          </p>
                        </div>
                        <div className="space-y-2 mt-2">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Key Responsibilities:</h4>
                          <ul className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300 space-y-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/50"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {exp.image && (
                          <div 
                            className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-300 mt-4 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 group-hover:shadow-xl"
                            onClick={() => setSelectedImage({ src: exp.image!, alt: exp.title })}
                          >
                            <Image
                              src={exp.image}
                              alt={exp.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-2">
            <FaHandsHelping className="inline-block text-green-500" /> Volunteer Experience
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedVolunteer.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-h-[20rem] list-none"
              >
                <div className="animated-border-tracer relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 dark:border-gray-700 p-2 md:rounded-[1.5rem] md:p-3 group">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={150}
                    inactiveZone={0.05}
                    borderWidth={4}
                    movementDuration={0.3}
                    blur={2}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] group-hover:shadow-2xl group-hover:shadow-green-500/10 dark:group-hover:shadow-green-500/20 transition-all duration-300">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-3 group-hover:border-green-300 dark:group-hover:border-green-600 transition-colors duration-300">
                        <FaHandsHelping className="h-5 w-5 text-green-600 dark:text-green-400 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors duration-300" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <span className={cn(
                            "px-3 py-1 text-xs rounded-full font-medium shrink-0 transition-all duration-300",
                            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 group-hover:bg-green-200 dark:group-hover:bg-green-800 group-hover:shadow-lg group-hover:shadow-green-500/30'
                          )}>
                            Volunteer
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-green-600 dark:text-green-400 font-medium text-lg group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors duration-300">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {exp.period}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Key Responsibilities:</h4>
                          <ul className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300 space-y-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 bg-green-500 group-hover:bg-green-400 group-hover:shadow-lg group-hover:shadow-green-500/50"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {exp.image && (
                          <div 
                            className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-300 mt-4 border border-gray-200 dark:border-gray-700 group-hover:border-green-300 dark:group-hover:border-green-600 group-hover:shadow-xl"
                            onClick={() => setSelectedImage({ src: exp.image!, alt: exp.title })}
                          >
                            <Image
                              src={exp.image}
                              alt={exp.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
