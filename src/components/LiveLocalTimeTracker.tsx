'use client';

import { TimerIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';

const LiveLocalTimeTracker = () => {
  // Instead of directly using Date.now(), use state with useEffect
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US'));
    };

    // Update immediately
    updateTime();

    // Then update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Only render the time if it's available (client-side)
  return (
    <div className="flex items-center space-x-3">
      <span aria-hidden="true">
        <TimerIcon />
      </span>
      <div>
        <p className="text-gray-900 dark:text-coal-100">
          {`My local time: ${time}`}
        </p>
      </div>
    </div>
  );
};

export default LiveLocalTimeTracker;
