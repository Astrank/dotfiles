import * as Toast from '@radix-ui/react-toast';

const Notification = (title: string) => {
  return (
    <>
        <Toast.Provider>
            <Toast.Root>
            <Toast.Title>
                {title}
            </Toast.Title>
            <Toast.Description />
            <Toast.Close />
            </Toast.Root>

            <Toast.Viewport />
        </Toast.Provider>
    </>
  )
}

export default Notification;
