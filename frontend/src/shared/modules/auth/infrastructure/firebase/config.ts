import { getAuth, type Auth as FirebaseAuth } from "firebase/auth"
import { initializeApp, type FirebaseApp } from "firebase/app"

const getFirebaseApp = (): FirebaseApp => {
    const firebaseConfig = {
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_AUTH_DOMAIN,
        projectId: process.env.FB_PROJECT_ID,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        appId: process.env.FB_APP_ID,
        measurementId: process.env.FB_MEASUREMENT_ID,
    }
    
    // @ts-ignore
    const app: FirebaseApp = initializeApp(firebaseConfig);
    
    return app;
}

/** Get Firebase authentication object, behaving as a Singleton because NodeJS internal cache */
export const getFirebaseAuth = (): FirebaseAuth => {
    try {
        const auth = getAuth(getFirebaseApp())
        return auth
    } catch (err: any) {
        const errorMsg = `Error while initializing auth ${err}`
        console.log(errorMsg)
        throw new Error(errorMsg)
    }
}