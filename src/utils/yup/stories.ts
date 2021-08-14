import * as yup from "yup";
import { validateStoryTitle, validateStoryBody } from "./schema";
export const yupStoriesSchema = yup.object().shape({
  title: validateStoryTitle,
  body: validateStoryBody,
});
