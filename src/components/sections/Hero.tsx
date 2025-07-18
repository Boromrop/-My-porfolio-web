'use client';

import Link from 'next/link';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Boromrop',
      icon: FaGithub,
      color: 'hover:text-gray-500'
    },
    {
      name: 'Email',
      url: 'mailto:ropborom7@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-500'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={0.5}
        />
      </div>
      
      <Card className="w-full mx-4 md:mx-auto max-w-7xl h-[calc(100vh-8rem)] bg-white/80 dark:bg-transparent relative overflow-hidden backdrop-blur-sm shadow-none border-none">
        {/* Star/particle effect inside the card */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={60}
            className="w-full h-full"
            particleColor={typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#f5f3ff' : '#6366f1'}
            speed={0.3}
          />
        </div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 bg-white dark:bg-gray-900"
        />
        
        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  ROP BOROM
                </span>
              </h1>

              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
              >
                <TypeAnimation
                  sequence={[
                    'Data Scientist',
                    2000,
                    'AI Engineer',
                    2000,
                    'Web Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-2xl text-lg text-gray-600 dark:text-gray-300"
              >
                Data Scientist and AI Engineer passionate about building robust, scalable, and innovative solutions. Experienced in web development, machine learning, and data analytics. Open to collaboration and new opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex gap-6 pt-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 ${link.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-4 pt-6"
              >
                <Link href="#contact">
                  <motion.button
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link href="#projects">
                  <motion.button
                    className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects →
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
