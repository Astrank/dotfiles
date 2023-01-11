import * as Toast from "@radix-ui/react-toast";
import { Toast as ToastType } from "../types/Toast";

const Notification = (props: ToastType) => {
  return (
    <>
      <Toast.Provider duration={props.duration}>
        <Toast.Root open={props.isOpen} onOpenChange={props.onOpenChange}>
          <Toast.Title>{props.title}</Toast.Title>
          <Toast.Description>{props.description}</Toast.Description>
          <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default Notification;
