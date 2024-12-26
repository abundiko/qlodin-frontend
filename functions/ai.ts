import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

function generateUsernameSuggestions(...params: string[]): string[] {
  // Configuration for the name generator
  const config: Config = {
    dictionaries: [adjectives, animals], // Use adjectives and animals to generate usernames
    separator: "_",
    style: "lowerCase",
  };

  // Helper function to sanitize input strings
  const sanitize = (input: string): string => {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, "")
      .slice(0, 15);
  };

  // Reduce params into an array of unique sanitized inputs
  const baseNames = params
    .filter(Boolean)
    .map((param) => sanitize(param))
    .filter((name) => name.length > 0);

  // Generate username suggestions
  const suggestions: string[] = [];

  for (const base of baseNames) {
    if (suggestions.length >= 4) break;

    // Use the sanitized base name
    suggestions.push(base);

    // Add random usernames using the name generator
    if (suggestions.length < 4) suggestions.push(uniqueNamesGenerator(config));
    if (suggestions.length < 4)
      suggestions.push(`${base}_${uniqueNamesGenerator(config)}`);
    if (suggestions.length < 4)
      suggestions.push(uniqueNamesGenerator(config) + `_${base}`);
  }

  // Ensure unique suggestions and return the first 4
  return Array.from(new Set(suggestions)).slice(0, 4);
}

// Example usage
const usernames = generateUsernameSuggestions(
  "John",
  "Doe",
  "johndoe",
  "john.doe@example.com"
);
console.log(usernames);
