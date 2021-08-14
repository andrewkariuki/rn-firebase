import auth from "@react-native-firebase/auth";
import { AuthProps, IUpdatePasswordInput, IUser } from "../interfaces";

class AuthService {
  register = async (values: AuthProps) => {
    await auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        user.user.sendEmailVerification();
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

  passwordReset = (values: IUpdatePasswordInput) => {
    const user = auth().currentUser;
    if (user) {
      user
        .updatePassword(values.password)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  sendPasswordReset = (values: IUser) => {
    if (values.email) {
      auth()
        .sendPasswordResetEmail(values.email)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return error;
        });
    }
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
