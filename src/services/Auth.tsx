import auth from "@react-native-firebase/auth";
import { AuthProps } from "../interfaces";

class AuthService {
  register = async (values: AuthProps) => {
    await auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  };

  login = (values: AuthProps) => {
    let user = null;
    let err = null;
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredentials) => {
        return userCredentials;
      })
      .catch((error) => {
        return error;
      });

    if (user && !err) {
      return user;
    } else {
      return err;
    }
  };

  logout = () => {
    auth()
      .signOut()
      .then(() => {
        return true;
      });
  };
}

export const AuthProvider = new AuthService();

// if (error.code === "auth/email-already-in-use") {
//   console.log("That email address is already in use!");
// }

// if (error.code === "auth/invalid-email") {
//   console.log("That email address is invalid!");
// }

// console.error(error);

// if (error.code === "auth/email-already-in-use") {
//   console.log("That email address is already in use!");
// }

// if (error.code === "auth/invalid-email") {
//   console.log("That email address is invalid!");
// }

// console.error(error);
