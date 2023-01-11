import * as Toast from '@radix-ui/react-toast';

const Notification = (title: string, description: string, duration: number, isOpen: boolean) => {
  return (
    <>
        <Toast.Provider duration={duration}>
            <Toast.Root open={isToastOpen} onOpenChange={openToast}>
                <Toast.Title>
                    {title}
                </Toast.Title>
                <Toast.Description>
                    {description}
                </Toast.Description>
                <Toast.Close aria-label='Close'>
                    Close
                </Toast.Close>
            </Toast.Root>

            <Toast.Viewport />
        </Toast.Provider>
    </>
  )
}

export default Notification;
