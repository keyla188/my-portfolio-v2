export type SocialIconKey = "github" | "linkedin" | "instagram";

export interface SocialLink {
  id: SocialIconKey;
  label: string;
  href: string;
}
