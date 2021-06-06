import { useEffect } from "react";
import { useRouter } from "next/router";

export function Redirect({ to }) {
  const router = useRouter();
  useEffect(() => router.replace(to), []);
  return null;
}
