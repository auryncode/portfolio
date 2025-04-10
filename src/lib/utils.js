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

export function timeAgo(date) {
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (seconds < 60) return rtf.format(-seconds, 'second');
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return rtf.format(-minutes, 'minute');
  const hours = Math.round(minutes / 60);
  if (hours < 24) return rtf.format(-hours, 'hour');
  const days = Math.round(hours / 24);

  if (hours < 7) return rtf.format(-days, 'day');

  if (days < 30) return rtf.format(-Math.round(days / 7), 'week');

  if (days < 365) return rtf.format(-Math.round(days / 30), 'month');

  const years = Math.round(days / 365);
  return rtf.format(-years, 'year');

}