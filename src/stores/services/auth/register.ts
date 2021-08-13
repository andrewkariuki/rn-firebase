import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthProps } from "../../../interfaces";
import { auth } from "../../../utils";

export const registerUser = async (values: AuthProps) => {
  let user = null;
  let err = null;

  await createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      err = error;
    });

  if (user && !err) {
    console.log(user);
    return user;
  } else {
    console.log(err);
    return err;
  }
};
