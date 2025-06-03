'use client';

import React, { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

const LiveLocalTimeTracker = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US'));
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
      <FiClock className="w-4 h-4" />
      <div className="flex items-center space-x-2">
        <span className="text-gray-900 dark:text-coal-100">
          My local time:{' '}
        </span>
        <span className="text-sm text-gray-600 dark:text-coal-300">{time}</span>
      </div>
    </div>
  );
};

export default LiveLocalTimeTracker;
