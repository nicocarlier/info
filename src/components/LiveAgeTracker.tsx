'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Birth date constant
const BIRTH_DATE = new Date('December 26, 2000 14:00:00');

const LiveAgeTracker = () => {
  // State for age
  const [nextBirthday, setNextBirthday] = useState('');
  const [ageBreakdown, setAgeBreakdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  // Calculate age in real-time
  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const diffMs = now.getTime() - BIRTH_DATE.getTime();

      // Calculate each unit
      const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365.25);
      const months = Math.floor((totalDays % 365.25) / 30.44);
      const days = Math.floor((totalDays % 365.25) % 30.44);
      const hours = totalHours % 24;

      setAgeBreakdown({ years, months, days, hours });

      // Calculate months until next birthday
      const currentYear = now.getFullYear();
      const nextBirthdayDate = new Date(BIRTH_DATE);
      nextBirthdayDate.setFullYear(currentYear);

      // If birthday has passed this year, set to next year
      if (now > nextBirthdayDate) {
        nextBirthdayDate.setFullYear(currentYear + 1);
      }

      const monthsUntil = Math.round(
        (nextBirthdayDate.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24 * 30.44)
      );
      setNextBirthday(`in ${monthsUntil} months`);
    };

    calculateAge();
    const intervalId = setInterval(calculateAge, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex space-x-3">
      <span aria-hidden="true">🎂</span>
      <div>
        <p className="text-gray-900 dark:text-coal-100">
          {ageBreakdown.years} years, {ageBreakdown.months} months,{' '}
          {ageBreakdown.days} days, {ageBreakdown.hours} hours
        </p>
        <p className="text-sm text-gray-600 dark:text-coal-300">
          Next birthday {nextBirthday}
        </p>
      </div>
    </div>
  );
};

export default LiveAgeTracker;
