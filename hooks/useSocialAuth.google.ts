import { googleLoginAction, googleRegisterAction } from "@/actions";
import { debugLog } from "@/functions/debug";
import { __paths } from "@/utils";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface GoogleAuthHook {
  loading: boolean;
  startAuth: () => Promise<void>;
}

export const useGoogleAuth = (): GoogleAuthHook => {
  const [loading, setLoading] = useState<boolean>(false);
  const { replace, push } = useRouter();

  useEffect(() => {
    async function listenForAuth() {
      try {
        // setLoading(true);
        // alert("hmm")
        // return;

        const auth = getAuth();
        // const provider = new GoogleAuthProvider();

        const result = await getRedirectResult(auth);
        debugLog({ auth, result });
        if (!result) {
          return;
        }
        let user: User = result.user;

        // check if the user is already registered
        const res = await googleLoginAction(user.email!, user.uid);
        if (res === "success") {
          toast.success("Google login successful");
          replace(__paths.user);
          return;
        }
        if (res === 404) {
          debugLog("hmmmm");
          await googleRegisterAction({
            email: user.email!,
            firstName: user.displayName?.split(" ")[0] ?? "",
            lastName: user.displayName?.split(" ")[1] ?? "",
            googleId: user.uid,
          });
          push(__paths.signUpGoogle);
          return;
        }
        toast.error(res);

        // Log user details
        // console.log("User details:", {
        //   uid: user.uid,
        //   name: user.displayName,
        //   email: user.email,
        //   photoURL: user.photoURL,
        // });

        // Additional tasks like sending user details to a backend can be added here
      } catch (error: any) {
        debugLog({ error, "@": "hooks/useSocialAuth.google.ts:58" });
        if (error.toString().includes("auth/popup-blocked"))
          toast.error("Google Authentication Pop-up Blocked");
        else if (error.toString().includes("auth/popup-closed-by-user"))
          toast.error("Google Authentication Cancelled");
        else toast.error("Google Authentication Failed");
        debugLog("Error during Google Sign-In:", error.message);
      } finally {
        setLoading(false);
      }
    }

    listenForAuth();
  }, []);

  const startAuth = async (): Promise<void> => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      setLoading(true);

      // Initiate Google Sign-In
      await signInWithRedirect(auth, provider);
      const result = await getRedirectResult(auth);
      // const result = await signInWithPopup(auth, provider);
      if (!result) {
        toast.error("Google authentication error");
        return;
      }
      let user: User = result.user;

      // check if the user is already registered
      const res = await googleLoginAction(user.email!, user.uid);
      if (res === "success") {
        toast.success("Google login successful");
        replace(__paths.user);
        return;
      }
      if (res === 404) {
        debugLog("hmmmm");
        await googleRegisterAction({
          email: user.email!,
          firstName: user.displayName?.split(" ")[0] ?? "",
          lastName: user.displayName?.split(" ")[1] ?? "",
          googleId: user.uid,
        });
        push(__paths.signUpGoogle);
        return;
      }
      toast.error(res);

      // Log user details
      // console.log("User details:", {
      //   uid: user.uid,
      //   name: user.displayName,
      //   email: user.email,
      //   photoURL: user.photoURL,
      // });

      // Additional tasks like sending user details to a backend can be added here
    } catch (error: any) {
      debugLog({ error, "@": "hooks/useSocialAuth.google.ts:58" });
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
