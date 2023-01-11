import * as Toast from '@radix-ui/react-toast';

const Toast = () => (
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
);

export default Toast;