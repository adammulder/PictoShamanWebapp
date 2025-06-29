import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// Define the types for the props
interface MyModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, setIsOpen }) => {
  // Function to close the dialog
  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out"
            >
              <DialogTitle as="h3" className="text-base font-medium text-white">
                Important Message
              </DialogTitle>
              <p className="mt-2 text-sm text-white">
                Please note: some art may not be suitable to view in the workplace. Please proceed at your own discretion.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default MyModal