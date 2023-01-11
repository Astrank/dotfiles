import * as Toast from '@radix-ui/react-toast';

export default function Toast() {
  return (
    <>
        <Toast.Provider>
            <Toast.Root>
            <Toast.Title>
                <span></span>
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
