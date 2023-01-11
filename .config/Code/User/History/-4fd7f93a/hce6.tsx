import * as Toast from '@radix-ui/react-toast';

const Notification = (title: string, description: string) => {
  return (
    <>
        <Toast.Provider>
            <Toast.Root>
                <Toast.Title>
                    {title}
                </Toast.Title>
                <Toast.Description>
                    {description}
                </Toast.Description>
                <Toast.Close>
                    Close
                </Toast.Close>
            </Toast.Root>

            <Toast.Viewport />
        </Toast.Provider>
    </>
  )
}

export default Notification;
