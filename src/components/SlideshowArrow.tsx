import { Button } from '@heroui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export default function SlideshowArrow({
  direction,
  isDisabled,
  onPress,
}: {
  direction: 'left' | 'right';
  isDisabled: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      className="w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer bg-coal-500 hover:bg-coal-600 transition-300 "
      isDisabled={isDisabled}
      onPress={onPress}
      isIconOnly
    >
      {direction === 'left' ? (
        <ChevronLeftIcon
          className="text-gray-900"
          color="white"
          width={30}
          height={30}
        />
      ) : (
        <ChevronRightIcon
          className="text-gray-900"
          color="white"
          width={30}
          height={30}
        />
      )}
    </Button>
  );
}
