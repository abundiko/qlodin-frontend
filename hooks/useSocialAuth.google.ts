import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import toast from "react-hot-toast";
import { debugLog } from "@/functions/debug";

interface GoogleAuthHook {
  loading: boolean;
  startAuth: () => Promise<void>;
}

export const useGoogleAuth = (): GoogleAuthHook => {
  const [loading, setLoading] = useState<boolean>(false);

  const startAuth = async (): Promise<void> => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      setLoading(true);

      // Initiate Google Sign-In
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;

      // Log user details
      console.log("User details:", {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      // Additional tasks like sending user details to a backend can be added here
    } catch (error: any) {
      if (error.toString().includes("auth/popup-blocked"))
        toast.error("Google Authentication Pop-up Blocked");
      else if (error.toString().includes("auth/popup-closed-by-user"))
        toast.error("Google Authentication Cancelled");
      else toast.error("Google Authentication Failed");
      debugLog("Error during Google Sign-In:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, startAuth };
};
