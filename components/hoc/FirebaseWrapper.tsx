"use client";

import { ReactNode, useEffect } from "react";
import {getFirebaseApp} from "@/lib/firebase"


export default function FirebaseWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    getFirebaseApp();
  }, []);

  return children;
}
