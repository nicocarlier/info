'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1c9COA5j7vNmZvFqz3IqeqVpBlFOQkB1RFouQ8boAaGjgaBU6ihEu3vjZ6aedjNuoo_3xB8LVI?gv=true';

export default function GoogleCalendarButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="MenubarTrigger px-3 ">Request Meeting</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] max-w-[1000px] max-h-[93vh] bg-white dark:bg-coal-900 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-coal-700 flex justify-between items-center">
            <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Request Meeting
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
              src={CALENDAR_URL}
              style={{ border: 0 }}
              width="100%"
              height="800"
              frameBorder="0"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
