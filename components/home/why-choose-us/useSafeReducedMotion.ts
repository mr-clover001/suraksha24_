"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * SSR-safe reduced-motion detection via useSyncExternalStore: the server
 * snapshot is always `false` (matching what the server rendered), so
 * hydration never mismatches — React reconciles to the real client value
 * right after mount. Framer Motion's own useReducedMotion() reads
 * matchMedia synchronously on the client instead, which mismatches the
 * server render for anyone who already has the OS-level setting on.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
