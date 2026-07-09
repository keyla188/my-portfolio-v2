export type NavIconKey = "home" | "about" | "experience" | "projects" | "tech" | "contact";

export interface NavItem {
  id: string;
  label: string;
  icon: NavIconKey;
}
