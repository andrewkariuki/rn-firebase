import * as yup from "yup";
import { validateEmail, validatePassword } from "./schema";
export const yupAuthSchema = yup.object().shape({
  email: validateEmail,
  password: validatePassword,
});
