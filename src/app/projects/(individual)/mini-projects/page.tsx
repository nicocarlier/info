'use client';

import React, { useState } from 'react';
import { BiCollapseAlt, BiExpandAlt } from 'react-icons/bi';
import SlideshowArrow from '@/components/SlideShowArrow';
import { Button, Modal, ModalContent } from '@heroui/react';
import { div } from 'framer-motion/client';
// import {createPortal} from "react-dom"

export default function MiniProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const miniProjects = [
    '/projects/fairbnb/fairbnb-square.webp',
    '/projects/fairbnb-map.webp',
    '/projects/fairbnb-booking.webp',
  ];

  if (isExpanded) {
    return <ModalTest />;
  }

  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-12 md:px-0 ">
      <h1>Mini Projects</h1>

      {/* Main Project Image with Slider */}
      <div className={`${isExpanded ? 'h-screen w-screen absolute' : ''}`}>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-coal-800">
          <div className="absolute right-4 top-4">
            <Button
              className=""
              onPress={() => setIsExpanded((prev) => !prev)}
              isIconOnly
            >
              {isExpanded ? (
                <BiCollapseAlt size={20} />
              ) : (
                <BiExpandAlt size={20} />
              )}
            </Button>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <SlideshowArrow
              direction="left"
              isDisabled={activeProject === 0}
              onPress={() => setActiveProject((prev) => prev - 1)}
            />
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <SlideshowArrow
              direction="right"
              isDisabled={activeProject === miniProjects.length - 1}
              onPress={() => setActiveProject((prev) => prev + 1)}
            />
          </div>

          {`project number ${activeProject + 1}`}

          {/* Bottom Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {miniProjects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeProject === index
                    ? 'bg-blue-600'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                onClick={() => setActiveProject(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const ModalTest = () => {
  return (
    <Modal size="5xl" className="z-[100 bg-red-200]">
      <ModalContent className="w-full h-full bg-red-200">
        <div className="h-screen w-screen z-[100] absolute"></div>
      </ModalContent>
    </Modal>
  );
};
