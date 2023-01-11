import * as Toast from "@radix-ui/react-toast";
import { Toast as ToastType } from "../types/Toast";

const Notification = (propa: ToastType) => {
  return (
    <>
      <Toast.Provider duration={propa.duration}>
        <Toast.Root open={propa.isOpen} onOpenChange={propa.closeToast}>
          <Toast.Title>{propa.title}</Toast.Title>
          <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default Notification;
