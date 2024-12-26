"use server";

import { GeminiService, UsernameSuggestionParams } from "@/lib/gemini";
import { isUsernameAvailable } from "../client";

export async function suggestUsernamesWithAi(
  params: UsernameSuggestionParams
): Promise<null | string[]> {
  if (!params.firstName || !params.lastName) return null;
  const names = await GeminiService.suggestUsernames(params);
  if (names.length === 0) return null;

  const availableNames = await Promise.all(
    names.map(async (name: string) => {
      const res = await isUsernameAvailable(name);
      if (res === true) return name;
      else return null;
    })
  );
  const refinedAvailableNames = availableNames
    .filter((i) => i !== null)
    .slice(0, 3);
  if (refinedAvailableNames.length === 0) return null;
  return refinedAvailableNames;
}
