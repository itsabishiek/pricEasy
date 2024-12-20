export type TierNames = keyof typeof subscriptionTiers;

export const subscriptionTiers = {
  Starter: {
    name: "Starter",
    priceInPaise: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
  },
  Standard: {
    name: "Standard",
    priceInPaise: 39900,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: true,
  },
  Pro: {
    name: "Pro",
    priceInPaise: 79900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
  Elite: {
    name: "Elite",
    priceInPaise: 99900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
} as const;

export const subscriptionTiersInOrder = [
  subscriptionTiers.Starter,
  subscriptionTiers.Standard,
  subscriptionTiers.Pro,
  subscriptionTiers.Elite,
] as const;
