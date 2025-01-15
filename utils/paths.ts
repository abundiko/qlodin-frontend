export const __paths = {
  // public
  index: "/",

  wardrobe: "/wardrobe",
  explore: "/explore",
  community: "/community",
  home: "/home",

  // legal
  termsOfService: "/terms-of-service",
  privacyPolicy: "/privacy-policy",

  // auth
  signIn: "/sign-in",
  signUp: "/sign-up",
  signUpVerifyEmail: "/sign-up/verify",
  signUpCompleteProfile: "/sign-up/complete-profile",
  signUpGoogle: "/sign-up/google",
  forgotPassword: "/forgot-password",

  // onboarding
  onboarding: "/onboarding",
  onboardingPeopleToFollow: "/onboarding/people-to-follow",
  onboardingComplete: "/onboarding/complete",

  // profile
  user: "/user",
  singleUser: (username: string) => `/user/@${username}`,
  userLooks: (prefix = "/user") => `${prefix}`,
  userCollections: (prefix = "/user") => `${prefix}/collections`,
  userCatalogue: (prefix = "/user") => `${prefix}/catalogue`,
  newLook: "/user/looks/new"
} as const;
