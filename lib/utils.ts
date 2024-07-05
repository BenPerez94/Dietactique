import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return format(parsedDate, "d MMMM yyyy 'à' HH:mm", { locale: fr });
}
