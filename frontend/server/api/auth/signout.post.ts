import { setCookie } from "#imports";

export default defineEventHandler(async (event) => {
  if (import.meta.server) {
    setCookie(event, "authData", "", {
      httpOnly: false,
      maxAge: -1,
    });
  }
});
