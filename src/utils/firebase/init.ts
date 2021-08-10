import { firebaseConfig } from "./../../config/firebase";
import { initializeApp } from "firebase/app";

export const connection = initializeApp(firebaseConfig);
