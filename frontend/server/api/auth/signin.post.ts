import { signinWithEmail } from "~/src/shared/modules/auth/infrastructure/firebase"
import { getFirebaseAuth } from "~/src/shared/modules/auth/infrastructure/firebase/config"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (!body || !body.email || !body.password) {
        return createError({
            statusCode: 422,
            statusMessage: "Either \"email\" or \"password\" fields are missing in the body",
            stack: ""
        })
    }

    const { email, password } = body
    const auth = getFirebaseAuth()
    try {
        const loggedInUser = await signinWithEmail({ auth, email, password})
        return {
            loggedInUser
        }
    } catch (e: any) {
        console.log(e)
        return createError({
            statusCode: 500,
            statusMessage: e.message,
            stack: ""
        })
    }
})