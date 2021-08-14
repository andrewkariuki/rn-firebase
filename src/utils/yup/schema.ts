import * as yup from "yup";
import { ERROR_MESSAGES } from "../../constants/errors";

export const validatePassword = yup
  .string()
  .min(8, ERROR_MESSAGES.passwordNotLongEnough)
  .matches(
    /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
    ERROR_MESSAGES.passwordNoSpecialCharacter
  )
  .matches(/[A-Z]/, ERROR_MESSAGES.passwordNoUppercase)
  .max(255);

export const validateEmail = yup
  .string()
  .min(5, ERROR_MESSAGES.emailNotLongEnough)
  .max(255)
  .email(ERROR_MESSAGES.invalidEmail);

export const validateFirstName = yup
  .string()
  .min(2, ERROR_MESSAGES.firstNameNotLongEnough);

export const validateLastName = yup
  .string()
  .min(2, ERROR_MESSAGES.lastNameNotLongEnough);

export const validateStoryTitle = yup
  .string()
  .min(3, ERROR_MESSAGES.titleNotLongEnough)
  .max(150, ERROR_MESSAGES.titleLongEnough);

export const validateStoryBody = yup
  .string()
  .min(5, ERROR_MESSAGES.bodyNotLongEnough);
