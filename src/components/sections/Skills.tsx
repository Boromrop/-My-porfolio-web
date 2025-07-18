'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaLinux, FaChartBar } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiTensorflow, SiDjango, SiFastapi, SiNumpy, SiPandas } from 'react-icons/si';
import { SparklesCore } from '@/components/ui/sparkles';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const skillCategories = [
  // Data Science cycle categories
  {
    title: 'Data Collection & Acquisition',
    color: 'from-blue-400 to-blue-600',
    skills: [
      { name: 'Web Scraping (BeautifulSoup, Selenium)', icon: FaPython },
      { name: 'APIs (REST)', icon: FaPython },
      { name: 'SQL (PostgreSQL, SQL Server, MySQL)', icon: SiPostgresql },
    ]
  },
  {
    title: 'Data Cleaning & Preparation',
    color: 'from-yellow-400 to-yellow-600',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Regex', icon: FaPython },
    ]
  },
  {
    title: 'EDA & Visualization',
    color: 'from-pink-400 to-pink-600',
    skills: [
      { name: 'Power BI', icon: FaChartBar },
      { name: 'Matplotlib', icon: FaPython },
      { name: 'Seaborn', icon: FaPython },
      { name: 'Plotly', icon: FaPython },
    ]
  },
  {
    title: 'Modeling & Machine Learning',
    color: 'from-orange-400 to-orange-600',
    skills: [
      { name: 'Scikit-learn', icon: FaPython },
      { name: 'XGBoost', icon: FaPython },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: FaPython },
      { name: 'Keras', icon: FaPython },
    ]
  },
  {
    title: 'Deployment & Cloud',
    color: 'from-green-400 to-green-600',
    skills: [
      { name: 'Flask', icon: FaPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Streamlit', icon: FaPython },
      { name: 'Docker', icon: FaDocker },
      { name: 'Digital Ocean', icon: FaLinux },
      { name: 'Google Cloud', icon: FaLinux },
    ]
  },
  {
    title: 'Other Relevant Skills',
    color: 'from-purple-400 to-purple-600',
    skills: [
      { name: 'NLP', icon: SiTensorflow },
      { name: 'Computer Vision', icon: SiTensorflow },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
    ]
  },
  // Explicit Frontend, Backend, Database categories
  {
    title: 'Frontend Development',
    color: 'from-cyan-400 to-cyan-600',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    title: 'Backend Development',
    color: 'from-lime-400 to-lime-600',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
    ]
  },
  {
    title: 'Database',
    color: 'from-fuchsia-400 to-fuchsia-600',
    skills: [
      { name: 'SQL (PostgreSQL, SQL Server, MySQL)', icon: SiPostgresql },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative">
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
              particleDensity={40}
              className="w-full h-full"
              particleColor="#f59e0b"
              speed={0.3}
            />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white relative z-10">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 relative z-10">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              {/* Glowing Effect Container */}
              <div className="relative rounded-lg overflow-hidden h-full">
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={120}
                  inactiveZone={0.1}
                  borderWidth={3}
                  movementDuration={0.4}
                  blur={1}
                />
                {/* Skills Card Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative h-full flex flex-col">
                  <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-4 flex-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <skill.icon className="text-xl text-gray-600 dark:text-gray-300" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
