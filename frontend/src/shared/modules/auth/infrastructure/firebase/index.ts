import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    type UserCredential,
} from 'firebase/auth'
import type { AuthDetailsEmailPassword } from './models';

export const signUpWithEmail = async (signupDetails: AuthDetailsEmailPassword): Promise<UserCredential> => {
    const { auth, email, password } = signupDetails
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        return newUser
    } catch (err: any) {
        const errorMsg = `Error while signing up user ${err}`
        console.log(errorMsg)
        throw new Error(errorMsg)
    }
}

export const signInWithEmail = async (signupDetails: AuthDetailsEmailPassword): Promise<UserCredential> => {
    const { auth, email, password } = signupDetails
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
        const errorMsg = `Error while signing up user ${err}`
        console.log(errorMsg)
        throw new Error(errorMsg)
    }
}