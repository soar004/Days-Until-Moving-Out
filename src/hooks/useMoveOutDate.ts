import { useContext } from "react";
import { MoveOutDateContext } from "../contexts/MoveOutDateContext";

/**
 * A plain‐JS hook file (no JSX), so plugin-react won’t try to Fast-Refresh it.
 */
export function useMoveOutDate() {
  const ctx = useContext(MoveOutDateContext);
  if (!ctx) {
    throw new Error("useMoveOutDate must be inside <MoveOutDateProvider/>");
  }
  return ctx;
}
