import { defineStore } from "pinia";
import { type ToastNotification } from "../utils/notification";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            notification: {
                status: 'success' as ToastNotification,
                msg: ''
            }
        }
    },

    actions: {
        setNotificationMessage({msg, status}: { msg: string, status: ToastNotification}) {
            this.notification.msg = msg
            this.notification.status = status
        },
        clearNotificationMessage() {
            this.notification.msg = ''
            this.notification.status = 'success'
        }
    }
});