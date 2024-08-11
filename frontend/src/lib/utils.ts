import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseSonnerError(errorMessage: String) {
  const splitedMessage = errorMessage.split(" ");
  const statusIndex: number =
    splitedMessage.findIndex((e) => e === "status:") + 1 ||
    splitedMessage.length - 1;

  return parseInt(splitedMessage[statusIndex]);
}
