import * as Toast from '@radix-ui/react-toast';

const Notification = (title: string) => {
  return (
    <>
        <Toast.Provider>
            <Toast.Root>
            <Toast.Title>
                
            </Toast.Title>
            <Toast.Description />
            <Toast.Action />
            <Toast.Close />
            </Toast.Root>

            <Toast.Viewport />
        </Toast.Provider>
    </>
  )
}

export default Notification;
