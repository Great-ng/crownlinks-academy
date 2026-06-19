export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: "award" | "briefcase" | "clock" | "certificate";
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface AccreditationItem {
  id: string;
  name: string;
  subtitle: string;
  accent: string;
}
