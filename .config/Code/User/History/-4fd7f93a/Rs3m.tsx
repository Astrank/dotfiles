import * as Toast from "@radix-ui/react-toast";
import { Toast as ToastType } from "../types/Toast";

const Notification = (toast: ToastType) => {
  return (
    <Toast.Provider duration={toast.duration}>
        <Toast.Root>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
    </Toast.Provider>
  );
};

export default Notification;
