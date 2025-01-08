import { __paths } from "@/utils";
import { notFound, redirect, RedirectType } from "next/navigation";

/**
 * intersect an error thrown on the server side and
 *
 * - redirect if need be
 *
 * - log the user out
 *
 * - show a 404 page
 *
 * @param error the error object
 *
 * @param isAdmin if the error was thrown by an admin action
 */
export function intersectError(err: any, isAdmin = false) {
  const error = err as Error & { digest?: string };
  switch (error.message) {
    case "EXPIRED":
      break;
    // redirect(isAdmin ? __paths.adminLogin : "");
    case "NEXT_REDIRECT":
      if (!error.digest) return;
      const [_, redirectType, to, _errorCode] = error.digest.split(";") as [
        string,
        string,
        string,
        string
      ];
      redirect(
        to,
        redirectType == "replace" ? RedirectType.replace : RedirectType.push
      );
    case "NEXT_NOT_FOUND":
      notFound();
  }
}
