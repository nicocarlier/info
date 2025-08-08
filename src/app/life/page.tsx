'use client';

import { motion } from 'framer-motion';
import Timeline from '../../components/Timeline';

export default function LifePage() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2"
        >
          Life Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A visual timeline of my professional and personal milestones
        </motion.p>
      </div>

      <Timeline />
    </main>
  );
}
