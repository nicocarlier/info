'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectLink from '@/components/ProjectLink';

export default function FairbnbProject() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    '/projects/fairbnb/fairbnb-square.webp',
    '/projects/fairbnb-map.webp',
    '/projects/fairbnb-booking.webp',
  ];

  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-12 md:px-0 ">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <h1>Fairbnb</h1>
          {/* Project Details */}
          <div className="w-fit bg-coal-100 dark:bg-coal-800 py-1 px-2 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-coal-400 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Created:</span>
              <span>August 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Duration:</span>
              <span>3 weeks</span>
            </div>
          </div>
        </div>

        <p className="text-xl">
          A comprehensive full-stack Airbnb clone built with React/Redux
          frontend and Ruby on Rails backend, featuring Google Maps integration
          and AWS S3 for media storage.
        </p>

        {/* Project ProjectLinks */}
        {/* <div className="flex space-x-4">
          <ProjectLink
            href="https://fairbnb-36c07c3f3067.herokuapp.com/"
            variant="primary"
            target="_blank"
            isDisabled={true}
          >
            Live Demo
          </ProjectLink>
          <ProjectLink
            href="https://github.com/nicocarlier/Fairbnb"
            variant="secondary"
            target="_blank"
          >
            GitHub Repository
          </ProjectLink>
        </div> */}

        {/* Main Project Image with Slider */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110"
            style={{ backgroundImage: `url(${images[activeImage]})` }}
          />
          <div className="relative h-full flex items-center justify-center">
            <Image
              priority
              alt="Fairbnb dashboard"
              src={images[activeImage]}
              className="object-contain max-h-full"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              quality={95}
            />
          </div>

          {/* Image Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeImage === index
                    ? 'bg-blue-600'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2>Project Overview</h2>
        <p className="">
          Fairbnb is a full-stack web application that meticulously emulates the
          Airbnb experience, allowing users to discover, explore, and book
          accommodations with ease. The platform combines a responsive
          React/Redux frontend with a Ruby on Rails backend to deliver a
          seamless and intuitive user experience.
        </p>
        <p className="">
          I prioritized data integrity and user experience by implementing
          robust encapsulation principles, ensuring that users can only review
          properties they've stayed at, preventing post-experience booking
          modifications, and enforcing homeowner-defined constraints for all
          reservations.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2>Technology Stack & Rationale</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className="">
              Built with Ruby on Rails for its convention-over-configuration
              paradigm, accelerating development and providing excellent
              scalability for growing user bases. Rails' robust structure is
              particularly well-suited for platforms like Fairbnb that
              anticipate expanding data needs.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Database</h3>
            <p className="">
              PostgreSQL database with Active Record ORM, ensuring data
              integrity and enabling complex operations through object-oriented
              database interactions. This pairing excels at maintaining critical
              relational data like user profiles, property listings, and booking
              records.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className="">
              React.js with Redux for state management, creating a dynamic and
              modular UI with predictable state updates and reusable components.
              This architecture promotes code reusability and efficient
              rendering, essential for the interactive features that define the
              Fairbnb experience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold ">APIs & Libraries</h3>
            <p className="">
              Integrated Google Maps API for interactive location visualization,
              Date Range Picker for intuitive booking calendar functionality,
              and AWS S3 for optimized media storage and delivery, enhancing
              performance without compromising on functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2>Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-3">User Authentication</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Secure account management with CSRF protection and encrypted
                  passwords
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Intelligent email routing for streamlined signup/login flow
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Comprehensive password strength validation with real-time
                  feedback
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Demo user access for quick platform exploration</span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-3">Property Discovery</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interactive map integration with Google Maps API</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Keyword search functionality for targeting specific amenities
                  or locations
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Immersive photo slideshows for comprehensive property previews
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Expandable property descriptions and user reviews</span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-3">Booking System</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Interactive booking calendar with Date Range Picker
                  integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Real-time availability updates and conflict prevention
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Dynamic pricing calculations based on duration and property
                  rates
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Comprehensive booking management interface for users
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800  p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-3">Review System</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Post-stay review creation with data integrity validation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Encapsulated review system allowing only verified guests to
                  leave reviews
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Rating system with detailed feedback categories</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Property listing review display with expandable details
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features without images */}
      {/* <section className="space-y-4">
        <h2>Features</h2>
        <div className="prose prose-sm max-w-none text-coal-300 dark:text-gray-300">
          <ul>
            <li>
              <span className="underline">User Authentication flow.</span>
              {" "}Routes users to either signup or login based on email recognition, provides real-time validation feedback
            </li>
            <li>
              <span className="underline">Interactive Map Integration.</span>
              {" "}Google Maps integration allowing users to browse available
              properties geographically, with custom-styled markers and
              infoWindows providing property previews directly from the map
              interface.
            </li>
            <li>
              <span className="underline">Booking Calendar System.</span>
              {" "}Customized Date Range Picker for intuitive date selection experience. Availability vailability checking and dynamic pricing based on period
            </li>
          </ul>
        </div>
      </section> */}

      {/* Feature Showcase */}
      {/* <section className="space-y-6">
        <h2>Feature Showcase</h2>

        <div className="space-y-8">
          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-200 dark:text-gray-200">
              User Authentication Flow 
            </h3>
            <p className="text-coal-300 dark:text-gray-300">
              The authentication system intelligently routes users to either
              signup or login based on email recognition, provides real-time
              validation feedback, and offers a streamlined demo user option for
              quick exploration.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="User authentication demonstration"
                src="/projects/UserAuth.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-200 dark:text-gray-200">
              Interactive Map Integration
            </h3>
            <p className="text-coal-300 dark:text-gray-300">
              The Google Maps integration allows users to browse available
              properties geographically, with custom-styled markers and
              infoWindows providing property previews directly from the map
              interface.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="Interactive map demonstration"
                src="/projects/map-view.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-200 dark:text-gray-200">
              Booking Calendar System
            </h3>
            <p className="text-coal-300 dark:text-gray-300">
              The booking system utilizes a customized Date Range Picker to
              offer an intuitive date selection experience, with automatic
              availability checking and dynamic pricing calculations.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="Booking calendar demonstration"
                src="/projects/booking-calendar.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Development Insights */}
      <section className="space-y-4">
        <h2>Development Insights</h2>
        <div className="prose prose-sm max-w-none dark:text-coal-200">
          <p>
            Building Fairbnb provided valuable experience in full-stack
            development with a focus on data integrity and user experience. Key
            learnings included:
          </p>
          <ul>
            <li>
              Implementing proper encapsulation principles to maintain data
              integrity is crucial for booking platforms
            </li>
            <li>
              Managing date and time data requires thorough consideration of
              timezone implications
            </li>
            <li>
              Integrating third-party APIs like Google Maps and AWS S3
              significantly enhances functionality while requiring thoughtful
              implementation
            </li>
            <li>
              Custom styling third-party components (like Date Range Picker)
              often requires creative approaches to override default behaviors
            </li>
            <li>
              A well-designed Redux store architecture is essential for managing
              complex application state in a predictable manner
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
