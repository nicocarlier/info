'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectLink from '@/components/ProjectLink';

export default function ChessAppProject() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    '/projects/chess-app/next-chess-square.webp',
    '/projects/chess-app-game.webp',
    '/projects/chess-app-mobile.webp',
  ];

  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-12 md:px-0 ">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col">
          <h1>NextChess</h1>
          {/* Project Details */}
          <div className="w-fit bg-coal-100 dark:bg-coal-800 py-1 px-2 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-coal-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Created:</span>
              <span>April 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Duration:</span>
              <span>3.5 weeks</span>
            </div>
          </div>
        </div>

        <p className="text-xl ">
          A full-stack chess platform built with Next.js and TypeScript,
          featuring real-time multiplayer gameplay, custom move validation
          engine, and responsive design for all devices.
        </p>

        {/* Main Project Image with Slider */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-800">
          <div
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110"
            style={{ backgroundImage: `url(${images[activeImage]})` }}
          />
          <div className="relative h-full flex items-center justify-center">
            <Image
              priority
              alt="NextChess application"
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
          NextChess is a comprehensive chess platform that brings the classic
          game into the modern web era. Built with a focus on performance and
          user experience, it combines a custom chess engine with an intuitive
          interface to deliver an engaging gameplay experience for players of
          all skill levels.
        </p>
        <p className="">
          The application offers real-time multiplayer matches, AI opponents,
          game history tracking, and responsive design that adapts seamlessly to
          any device. By leveraging Next.js 14 and TypeScript, the platform
          ensures type safety and optimal performance while maintaining clean,
          maintainable code.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2>Technology Stack & Rationale</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-600 dark:text-gray-200">
              Frontend & Backend
            </h3>
            <p className="">
              Built with Next.js 14, leveraging its full-stack capabilities for
              server-side rendering, API routes, and seamless page transitions.
              TypeScript provides robust type safety throughout the codebase,
              reducing runtime errors and improving developer experience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              State Management
            </h3>
            <p className="">
              Redux manages application state, providing a predictable state
              container for complex chess logic, game history, and user
              interactions. This architecture ensures consistent state across
              components and enables features like game replay and move
              validation.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Styling & Responsiveness
            </h3>
            <p className="">
              Tailwind CSS combined with CSS modules creates a responsive and
              visually appealing interface. The design system adapts gracefully
              from mobile to desktop, maintaining usability and aesthetic
              consistency across all screen sizes.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Real-time Communication
            </h3>
            <p className="">
              WebSocket integration enables real-time multiplayer gameplay with
              minimal latency. Players experience smooth, responsive
              interactions during matches, enhancing the competitive nature of
              the game.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Deployment
            </h3>
            <p className="">
              Vercel platform provides seamless deployment with automatic
              preview environments for each pull request, ensuring high
              availability and performance for users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2>Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black dark:text-white text-lg mb-3">
              Custom Chess Engine
            </h3>
            <ul className="space-y-3 text-coal-900 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Hand-crafted move validation system with specialized piece
                  classes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>FEN notation support for game state serialization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Advanced chess rules including en passant, castling, and
                  promotion
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comprehensive check and checkmate detection</span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black dark:text-white text-lg mb-3">
              Multiplayer & AI
            </h3>
            <ul className="space-y-3 text-coal-900 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Real-time multiplayer matches with WebSocket communication
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>AI opponents powered by Stockfish integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Multiple difficulty levels for AI gameplay</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Matchmaking system for finding online opponents</span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black dark:text-white text-lg mb-3">
              Interactive UI
            </h3>
            <ul className="space-y-3 text-coal-900 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Custom drag-and-drop system optimized for chess piece movement
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Visual move highlighting showing legal moves and captures
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Interactive move history with algebraic notation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Game state indicators for check, checkmate, and draw
                  conditions
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black dark:text-white text-lg mb-3">
              User Experience
            </h3>
            <ul className="space-y-3 text-coal-900 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Secure authentication via GitHub and Google OAuth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Responsive design optimized for mobile, tablet, and desktop
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Game history and statistics tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Light and dark mode themes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="space-y-6">
        <h2>Technical Challenges & Solutions</h2>

        <div className="text-coal-900 dark:text-gray-200 bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold">Performance Optimization</h3>
          <p className="">
            One of the most significant challenges was managing component
            re-renders in the chessboard. With 64 squares and multiple pieces,
            even small state changes would trigger cascading re-renders,
            impacting performance and user experience.
          </p>

          <div className="space-y-2">
            <h4 className="font-medium">
              Problem: DragClone Excessive Re-rendering
            </h4>
            <p className="">
              The{' '}
              <code className="bg-coal-200 text-coal-800 dark:text-coal-200 dark:bg-coal-600 px-1.5 py-0.5 rounded text-xs">
                DragClone
              </code>{' '}
              component's position state changes were causing unnecessary
              re-renders of all child components, even when using React's
              memoization techniques.
            </p>

            <div className="bg-coal-800 dark:bg-gray-900 p-4 rounded-md">
              <pre className="text-sm text-coal-100 dark:text-gray-300 overflow-x-auto">
                {`const usePreviousProps = (props) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = props;
    });
    return ref.current; // Returns the previous props
};`}
              </pre>
            </div>

            <p className="">
              I implemented a custom hook to compare prop changes between
              renders, which helped identify{' '}
              <code className="bg-coal-200 text-coal-800 dark:text-coal-200 dark:bg-coal-600 px-1.5 py-0.5 rounded text-xs">
                playMoveIfValid
              </code>{' '}
              as the volatile prop. Further analysis revealed unstable
              dependencies in useCallback hooks for game state management
              functions.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Solution: Strategic Memoization</h4>
            <p className="">
              The solution involved multiple optimization techniques:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Ensuring dependency stability in useCallback and useMemo hooks
              </li>
              <li>
                Implementing React.memo for chess square components with custom
                comparison functions
              </li>
              <li>
                Separating drag state management from board rendering logic
              </li>
              <li>
                Using useRef for position tracking to avoid unnecessary state
                updates
              </li>
            </ul>
          </div>
        </div>

        <div className="text-coal-900 dark:text-gray-200 bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold ">Chess Logic Implementation</h3>
          <p className="">
            Building a robust chess engine required careful consideration of the
            game's complex rules, particularly for special moves like castling
            and detecting check/checkmate conditions.
          </p>

          <div className="space-y-2">
            <h4 className="font-medium ">
              Object-Oriented Design with Inheritance
            </h4>
            <p className="">
              I implemented a class-based structure for chess pieces, using
              inheritance and composition to share common behaviors while
              allowing piece-specific move logic:
            </p>

            <div className="bg-coal-800 dark:bg-gray-900 p-4 rounded-md">
              <pre className="text-sm text-coal-100 dark:text-gray-300 overflow-x-auto">
                {`import { inherit } from './inherit.js';
import { Piece } from './piece.js';
import { Slideable } from './slideable.js';

const DIRS = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];

export function Queen(color, square, board) {
    this.pieceName = "queen";
    this.type = color.slice(0,1) + "_" + this.pieceName;
    Piece.call(this, color, square, board);
    this.slideable = new Slideable(board);
    this.fenChar = color === "white" ? "Q" : "q";
}

inherit(Piece, Queen);

Queen.prototype.pieceMoves = function(pos = this.getPos()) {
    const color = this.getColor();
    const [options, takeOptions] = this.slideable.calculateMoves(color, pos, DIRS);
    return [options, takeOptions];
}`}
              </pre>
            </div>

            <p className="mt-2">
              This approach allowed for efficient code reuse while maintaining
              the unique movement patterns of each chess piece. The Slideable
              composition pattern was particularly effective for handling the
              line-based movements of queens, rooks, and bishops.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      {/* <section className="space-y-6">
        <h2>Feature Showcase</h2>

        <div className="space-y-8">
          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Game Interface
            </h3>
            <p className="">
              The chess board interface features intuitive drag-and-drop
              functionality, move highlighting, and responsive design that works
              seamlessly across devices.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="Chess game interface"
                src="/projects/chess-interface.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Move Validation
            </h3>
            <p className="">
              The custom move validation system highlights legal moves, prevents
              illegal actions, and handles special chess rules like castling and
              en passant captures.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="Move validation demonstration"
                src="/projects/chess-validation.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-coal-500 dark:text-gray-200">
              Mobile Experience
            </h3>
            <p className="">
              The responsive design adapts to mobile screens, maintaining full
              functionality while optimizing the interface for touch
              interactions.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900">
              <Image
                alt="Mobile chess experience"
                src="/projects/chess-mobile.webp"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Development Insights */}
      <section className="space-y-4 ">
        <h2>Development Insights</h2>
        <div className="prose prose-sm max-w-none dark:text-coal-100">
          <p>
            Building NextChess provided valuable experience in both frontend and
            game development. Key learnings included:
          </p>
          <ul>
            <li>
              Performance optimization is critical for interactive applications,
              especially those with complex state management
            </li>
            <li>
              Object-oriented design principles translate effectively to
              JavaScript/TypeScript when building complex systems
            </li>
            <li>
              FEN notation provides an elegant solution for chess game state
              serialization
            </li>
            <li>
              WebSockets enable truly real-time experiences that traditional
              HTTP requests cannot match
            </li>
            <li>
              Careful component architecture planning pays dividends when
              scaling application features
            </li>
          </ul>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="space-y-4">
        <h2>Future Enhancements</h2>
        <div className="prose prose-sm max-w-none dark:text-coal-100">
          <p>
            While NextChess is fully functional, several enhancements are
            planned for future iterations:
          </p>
          <ul>
            <li>Player rankings and ELO system for competitive play</li>
            <li>Tournament functionality with brackets and time controls</li>
            <li>Puzzle mode for chess training and skill improvement</li>
            <li>
              Opening book integration for learning standard chess openings
            </li>
            <li>Advanced analysis tools with position evaluation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
