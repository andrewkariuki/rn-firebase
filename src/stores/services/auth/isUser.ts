import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils";

export const isUser = () => {
  let userData = null;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userData = user;
    } else {
      userData = null;
    }
  });
  return userData;
};
