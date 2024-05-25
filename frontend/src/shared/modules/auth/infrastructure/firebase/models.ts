import { type Auth as FirebaseAuth } from 'firebase/auth';

export type AuthDetailsEmailPassword = {
    auth: FirebaseAuth,
    email: string,
    password: string,
}