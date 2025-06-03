import React from 'react';
import Image from 'next/image';
import ProjectLink from '@/components/ProjectLink';

export default function RepsNRecipesProject() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-12 md:px-0">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <h1>Reps 'N Recipes</h1>
          {/* Project Details */}
          <div className=" flex-wrap w-fit bg-coal-100 dark:bg-coal-800 py-1 px-2 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-coal-400 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Created:</span>
              <span>September 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Duration:</span>
              <span>2.5 weeks</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Co-collaborators:</span>
              <span>Elliot Chang, Stefan Lazarevic</span>
            </div>
          </div>
        </div>

        <p className="text-xl dark:text-coal-300 text-coal-700">
          A comprehensive fitness application that combines workout tracking and
          nutrition management, helping users achieve their health and wellness
          goals all in one place.
        </p>

        {/* Project Links */}
        {/* <div className="flex space-x-4">
          <ProjectLink
            href="https://reps-n-recipes-d98cf03910d0.herokuapp.com/"
            variant="primary"
            target="_blank"
            isDisabled={true}
          >
            Live Demo
          </ProjectLink>
          <ProjectLink
            href="https://github.com/stefanlazarevic97/reps-n-recipes/"
            variant="secondary"
            target="_blank"
          >
            GitHub Repository
          </ProjectLink>
        </div> */}

        {/* Main Project Image */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-coal-800">
          <Image
            priority
            alt="Reps 'N Recipes dashboard"
            src="/projects/reps-n-recipes/reps-n-recipes-square.webp"
            className="object-contain z-10 relative"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={95}
          />
          <Image
            src="/projects/reps-n-recipes/reps-n-recipes-square.webp"
            alt=""
            className="object-cover blur-xl opacity-30 scale-110"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={30}
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2>Project Overview</h2>
        <p className="dark:text-coal-300 text-coal-700">
          Reps 'N Recipes is a fitness app designed to help users achieve their
          health and wellness goals. While many fitness apps focus on either
          workout tracking or nutrition management, Reps 'N Recipes combines
          both features into one seamless application, eliminating the need for
          multiple apps.
        </p>
        <p className="dark:text-coal-300 text-coal-700">
          The app features a database of built-in exercises with GIFs for proper
          form guidance, allows manual exercise input, and generates workouts
          for beginners. Additionally, it leverages the Spoonacular API for
          comprehensive meal tracking and can generate personalized meal plans
          based on user parameters.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2>Technology Stack</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              MERN Stack
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Built with MongoDB, Express.js, React.js, and Node.js, creating a
              robust and scalable application architecture with a flexible NoSQL
              database.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              State Management
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Redux for centralized state management, particularly valuable for
              handling complex application state across workout and nutrition
              tracking features.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              Data Visualization
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Chart.js integrated with React to create interactive
              visualizations of user nutrition data, caloric intake, macros,
              weight tracking, and exercise progression over time.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              External APIs
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Spoonacular API for comprehensive food and nutrition data,
              including ingredients, products, recipes, menu items, and meal
              plan generation capabilities.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              Cloud Storage
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Amazon Web Services (AWS) S3 for scalable and secure storage of
              exercise demonstration GIFs, enhancing the user experience with
              visual guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <h2>Key Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="dark:bg-coal-800/50 bg-coal-100/50 p-4 rounded-md">
            <h3 className="font-semibold dark:text-coal-100 text-coal-900 mb-2">
              User Profile & Customization
            </h3>
            <ul className="space-y-2 dark:text-coal-300 text-coal-700 text-sm">
              <li>
                • Personalized onboarding survey for physical measurements
              </li>
              <li>• Automated TDEE calculation and caloric recommendations</li>
              <li>• Goal setting and progress tracking</li>
              <li>• Weight updates with automatic TDEE adjustments</li>
            </ul>
          </div>

          <div className="dark:bg-coal-800/50 bg-coal-100/50 p-4 rounded-md">
            <h3 className="font-semibold dark:text-coal-100 text-coal-900 mb-2">
              Workout Tracking
            </h3>
            <ul className="space-y-2 dark:text-coal-300 text-coal-700 text-sm">
              <li>• Pre-defined workout programs for beginners</li>
              <li>• Custom workout creation with exercise library</li>
              <li>• Exercise GIFs for proper form guidance</li>
              <li>• Set and rep tracking with weight progression</li>
            </ul>
          </div>

          <div className="dark:bg-coal-800/50 bg-coal-100/50 p-4 rounded-md">
            <h3 className="font-semibold dark:text-coal-100 text-coal-900 mb-2">
              Nutrition Tracking
            </h3>
            <ul className="space-y-2 dark:text-coal-300 text-coal-700 text-sm">
              <li>• Comprehensive food database via Spoonacular</li>
              <li>• Meal logging with portion adjustments</li>
              <li>• Daily macronutrient and calorie tracking</li>
              <li>• Calendar view for nutrition history</li>
            </ul>
          </div>

          <div className="dark:bg-coal-800/50 bg-coal-100/50 p-4 rounded-md">
            <h3 className="font-semibold dark:text-coal-100 text-coal-900 mb-2">
              Data Analysis
            </h3>
            <ul className="space-y-2 dark:text-coal-300 text-coal-700 text-sm">
              <li>• Visual progress charts for key metrics</li>
              <li>• Weight tracking over time</li>
              <li>• Estimated 1-rep max calculations</li>
              <li>• Nutrition trend analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Demos */}
      <section className="space-y-4">
        <h2>Feature Demos</h2>

        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-coal-300">
              Health Profile Setup
            </h3>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-coal-800">
              <Image
                alt="Health form setup demo"
                src="/projects/reps-n-recipes/health-form.gif"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-coal-300">
              Workout Management
            </h3>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-coal-800">
              <Image
                alt="Workout management demo"
                src="/projects/reps-n-recipes/workout-tracking.gif"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-coal-300">
              Nutrition Tracking
            </h3>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-coal-800">
              <Image
                alt="Nutrition tracking demo"
                src="/projects/reps-n-recipes/nutrition-tracking.gif"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-coal-300">
              Progress Analytics
            </h3>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-coal-800">
              <Image
                alt="Progress charts demo"
                src="/projects/reps-n-recipes/charts.gif"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Highlights */}
      {/* <section className="space-y-4">
        <h2>Technical Implementation</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              1-Rep Max Calculator
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              A selector function that extracts all workouts containing a
              specific exercise, calculates the estimated one-rep max for each
              workout, and keeps the highest value per day:
            </p>
            <div className="bg-coal-800 p-4 rounded-md">
              <pre className="text-sm text-coal-300 overflow-x-auto">
                {`export const getWorkoutsByExercise = exercise => state => {
    const workouts = state.users.workouts;
    const workoutsByExercise = workouts
        .filter(workout => workout.sets.find(set => set.hasOwnProperty(exercise)))
        .reduce((accumulator, workout) => {
            const exerciseSets = workout.sets.find(
                set => set.hasOwnProperty(exercise))[exercise];
        
            if (exerciseSets && exerciseSets.length > 0) {
                const topSet = exerciseSets.sort((a, b) => {
                    if (a.kg !== b.kg) {
                        return a.kg - b.kg;
                    } else {
                        return a.reps - b.reps;
                    }
                }).slice(-1)[0];

                const estimated1RM = topSet.kg / (1.0278 - (0.0278 * topSet.reps));
                accumulator[workout.datePerformed.split('T')[0]] = estimated1RM;
            }

            return accumulator;
        }, {});

    return workoutsByExercise;
}`}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-coal-200 text-coal-800">
              Workout Session Persistence
            </h3>
            <p className="dark:text-coal-300 text-coal-700">
              Implementation of session persistence to handle page refreshes
              during active workouts:
            </p>
            <div className="bg-coal-800 p-4 rounded-md">
              <pre className="text-sm text-coal-300 overflow-x-auto">
                {`useEffect(()=>{
    const currentWorkout = JSON.parse(sessionStorage.getItem("currentWorkout"));
    
    if (currentWorkout){
        sessionStorage.setItem("currentWorkout", JSON.stringify(currentWorkout));
        const workoutMeta = JSON.parse(sessionStorage.getItem("currentWorkoutMETA"));
        setWorkoutStarted(workoutMeta.active)
        setResumeTime(parseInt(workoutMeta.time,10))
        setExerciseList([...currentWorkout.sets])
    } else {
        resetWorkout()
    }
}, [])`}
              </pre>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
