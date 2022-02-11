import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../../../firebase.config";

export const auth = getAuth(app);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
