'use client'

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

export default function FadeInWrapper(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...(props as any)}
    />
  );
}
