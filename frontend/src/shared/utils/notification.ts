import { toast, type ToastOptions } from "vue3-toastify";

export type ToastNotification = "success" | "info" | "warning" | "error";

/** Gets default notification message. Uses "TypeScript object initialization with default values" concept */
function getMessage({
  notificationType = "success",
  message = "",
}: { notificationType?: ToastNotification; message?: string } = {}) {
  if (message) return message;

  if (!message) {
    switch (notificationType) {
      case "success":
        message = "Operation successful";
        break;
      case "info":
        message = "(Info) Operation successful";
        break;
      case "warning":
        message = "(Warning) Operation successful but with warnings";
        break;
      case "error":
        message = "(Error) Operation was not successful";
        break;
      default:
        message =
          "Please review this notification! Function parameters are invalid";
        break;
    }
  }

  return message;
}

export const notify = (
  notificationType: ToastNotification,
  message: string = "",
  time: number = 3000,
) => {
  if (!message) message = getMessage({ notificationType });
  toast[notificationType](message, {
    autoClose: time,
  } as ToastOptions);
};
