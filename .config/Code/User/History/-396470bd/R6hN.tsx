import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'

const MyDialog = () => {
    let [isOpen, setIsOpen] = useState(true)
  let completeButtonRef = useRef(null)

  function completeOrder() {
    // ...
  }

  return (
        /* Use `initialFocus` to force initial focus to a specific ref. */
        <Dialog
        initialFocus={completeButtonRef}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        >
            <Dialog.Panel>
                <Dialog.Title>Complete your order</Dialog.Title>

                <p>Your order is all ready!</p>

                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button ref={completeButtonRef} onClick={completeOrder}>
                Complete order
                </button>
            </Dialog.Panel>
        </Dialog>
    )
}

export default MyDialog;