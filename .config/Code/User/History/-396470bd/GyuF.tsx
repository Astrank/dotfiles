import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const MyDialog = () => {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <>
        <button onClick={() => setIsOpen(true)}>Open</button>
        <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
        >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                <Dialog.Title>Complete your order</Dialog.Title>
            </Dialog.Panel>
        </div>
        </Dialog>
        <button className='mt-96' onClick={() => setIsOpen(true)}>Open</button>
    </>
  )
}

export default MyDialog;