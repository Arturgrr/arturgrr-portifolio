"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/");
    }, 100);
    return () => clearTimeout(t);
  }, [router]);

  return null;
}
