import { navigateTo } from "nuxt/app";

import { useCookie } from "#imports";
import { ALLOWED_UNPROTECTED_ROUTES } from "../modules/auth/application/constants/auth";
import { useMainStore } from "../store";

function handleSignOutData(from: any, store: any) {
  if (from.path.includes("signout")) {
    store.setNotificationMessage({
      msg: "Logged out succesfully (msg from Pinia)",
      status: "success",
    });
  }
}

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useMainStore();

  const authData = useCookie("authData", { httpOnly: false, maxAge: 3600 });

  handleSignOutData(from, store);

  // Handle server signout. I had to to this because of a Nuxt bug.
  // when it was left to the "signout" component it would complain with the following error
  // "Cannot redefine property: __navigationId".
  if (import.meta.server && to.path.includes('signout')) {
    authData.value = undefined;
    return navigateTo('/')
  }

  const mainPath = to.path.split("/")[1];
  const isRouteUnprotected = ALLOWED_UNPROTECTED_ROUTES.includes(mainPath);

  if ((!authData.value && !isRouteUnprotected) || (!authData.value && to.path.includes('signout'))) {
    return navigateTo("/signin");
  }
});
