import * as Toast from "@radix-ui/react-toast";
import ToastType from "../types/Toast";

const Notification = (props: ToastType) => {
  return (
    <>
      <Toast.Provider duration={duration}>
        <Toast.Root open={isOpen} onOpenChange={onOpenChange}>
          <Toast.Title>{title}</Toast.Title>
          <Toast.Description>{description}</Toast.Description>
          <Toast.Close aria-label="Close">Close</Toast.Close>
        </Toast.Root>

        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default Notification;
