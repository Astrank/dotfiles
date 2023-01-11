import * as Toast from "@radix-ui/react-toast";
import { Toast as ToastType } from "../types/Toast";

const Notification = (props: ToastType | false) => {
  return (
    <>
      <Toast.Provider duration={props.duration}>
        <Toast.Root open={props ? true : props} onOpenChange={props.closeToast}>
          <Toast.Title>{props.title}</Toast.Title>
          <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default Notification;
