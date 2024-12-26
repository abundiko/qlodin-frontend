function generateUsernameSuggestions(...params: string[]): string[] {
    // Helper function to sanitize input strings
    const sanitize = (input: string): string => {
        return input
            .toLowerCase()                     // Convert to lowercase
            .replace(/[^a-z0-9_]/g, "")      // Remove invalid characters
            .slice(0, 15);                    // Limit to 15 characters for brevity
    };

    // Helper function to generate random numbers for variety
    const randomSuffix = (): string => {
        return Math.floor(Math.random() * 10000).toString();
    };

    // Helper function to generate a random string for additional variety
    const randomString = (): string => {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        return Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    // Reduce params into an array of unique sanitized inputs
    const baseNames = params
        .filter(Boolean)                      // Filter out null, undefined, or empty strings
        .map(param => sanitize(param))        // Sanitize each string
        .filter(name => name.length > 0);     // Remove any empty results after sanitization

    // Generate username suggestions
    const suggestions: string[] = [];

    for (const base of baseNames) {
        if (suggestions.length >= 4) break;
        suggestions.push(base); // Add the base name

        // Add variations if space allows
        if (suggestions.length < 4) suggestions.push(`${base}_${randomString()}`);
        if (suggestions.length < 4) suggestions.push(`${base}${randomSuffix()}`);
        if (suggestions.length < 4) suggestions.push(`${randomString()}_${base}`);
    }

    // Ensure unique suggestions and return the first 4
    return Array.from(new Set(suggestions)).slice(0, 4);
}

// Example usage
const usernames = generateUsernameSuggestions("john.doe@example.com", "John", "Doe", "johndoe");
console.log(usernames);
