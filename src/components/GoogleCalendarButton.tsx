'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function GoogleCalendarButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100">
          Book a conversation
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] max-w-[1000px] max-h-[90vh] bg-white dark:bg-coal-900 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-coal-700 flex justify-between items-center">
            <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Schedule a Meeting
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-coal-700 transition-colors"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>
          <div className="p-4">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hlb_Glrdds3B6Kx8Q-S090rMV9BdTzjetur9PTCAVeQdcHqxS5PDsNtTcRNdrkOysYl1yJ_Mv?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="700"
              frameBorder="0"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
