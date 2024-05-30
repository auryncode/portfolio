import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function mergeRoutes(...array) {
  return array.reduce((prev, item) => {
      return prev.concat(item);
  }, []);
}