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
  newLook: "/user/looks/new",
  singleUser: (username: string) => `/@${username}`,
  userLooks: (prefix = "/user") => `/${prefix}`.replace("//", "/"),
  userCollections: (prefix = "/user") =>
    `/${prefix}/collections`.replace("//", "/"),
  userCatalogue: (prefix = "/user") =>
    `/${prefix}/catalogue`.replace("//", "/"),
  userFollowers: (prefix = "/user") =>
    `/${prefix}/followers`.replace("//", "/"),
  userFollowing: (prefix = "/user") =>
    `/${prefix}/following`.replace("//", "/"),
  userSettings: "/user/settings",
  userSettingsProfile: "/user/settings/profile",
  userSettingsDriptag: "/user/settings/driptag",
  userSettingsEmail: "/user/settings/email",
  userSettingsPassword: "/user/settings/password",
} as const;
