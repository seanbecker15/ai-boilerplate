"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

export default function Page() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut();
  }, [signOut]);

  return null;
}
