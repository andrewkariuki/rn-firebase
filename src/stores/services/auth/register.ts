import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils";

export const registerUser = async (email: string, password: string) => {
  let user = null;
  let err = null;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      err = error;
    });

  if (user && !err) {
    return user;
  } else {
    return err;
  }
};
