import { getAuth, type Auth as FirebaseAuth } from "firebase/auth"
import { getApps, initializeApp, type FirebaseApp } from "firebase/app"
import type { RuntimeConfig } from "nuxt/schema"

const getFirebaseApp = (config: RuntimeConfig): FirebaseApp => {
    const apiKey = config.public.FB_API_KEY
    const firebaseConfig = {
        apiKey,
    }

    // Prevents reinitialization of Firebase app
    if (!getApps.length) {
        return initializeApp(firebaseConfig);
    }
    return getApps()[0]
}

/** Get Firebase authentication object, behaving as a Singleton because NodeJS internal cache */
export const getFirebaseAuth = (config: RuntimeConfig): FirebaseAuth => {
    try {
        const auth = getAuth(getFirebaseApp(config))
        return auth
    } catch (err: any) {
        const errorMsg = `Error while initializing auth ${err}`
        console.log(errorMsg)
        throw new Error(errorMsg)
    }
}