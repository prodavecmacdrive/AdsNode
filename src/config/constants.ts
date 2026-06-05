/**
 * Ad network identifiers and display names.
 */
export const AD_NETWORKS = {
  UNITY: 'Unity Ads',
  APPLOVIN: 'AppLovin',
  IRONSOURCE: 'ironSource',
  MINTEGRAL: 'Mintegral',
  GOOGLE_ADS: 'Google Ads',
  META: 'Meta Ads',
  TIKTOK: 'TikTok Ads',
  LIFTOFF: 'Liftoff',
  MOLOCO: 'Moloco',
} as const;

export type AdNetwork = (typeof AD_NETWORKS)[keyof typeof AD_NETWORKS];

/**
 * File size and upload limits.
 */
export const LIMITS = {
  MAX_PLAYABLE_SIZE_MB: 5,
  MAX_UPLOAD_FILES: 10,
  PIN_COMMENT_MAX_LENGTH: 500,
} as const;

/**
 * Playable ad orientation options.
 */
export const ORIENTATIONS = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
} as const;
