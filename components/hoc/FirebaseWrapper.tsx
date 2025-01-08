"use client";

import { ReactNode, useEffect, useState } from "react";
import {getFirebaseApp} from "@/lib/firebase"


export default function FirebaseWrapper({ children }: { children: ReactNode }) {
  const [app, setApp] = useState<any>(null);
  
  useEffect(() => {
    if(app) return;
    const _app = getFirebaseApp();
    if(_app) setApp(_app);
  });

  if(app)
  return children;
}
