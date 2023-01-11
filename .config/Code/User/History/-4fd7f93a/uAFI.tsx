import * as Toast from "@radix-ui/react-toast";
import { Toast as ToastType } from "../types/Toast";

const Notification = (tostada: ToastType) => {
  return (
    <>
      <Toast.Provider duration={tostada.duration}>
        <Toast.Root open={true} onOpenChange={tostada.closeToast}>
          <Toast.Title>{tostada.title}</Toast.Title>
          <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default Notification;
