import { connection } from "./init";
import { initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const auth = initializeAuth(connection);
export const db = getDatabase(connection);
