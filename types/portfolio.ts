import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TechItem {
  name: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
}

export interface UserCapability {
  number: string;
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  label: string;
  sublabel?: string;
  type: 'primary' | 'secondary' | 'storage';
}

export interface ArchitectureHighlight {
  title: string;
  description: string;
}

export interface EngineeringStep {
  number: string;
  title: string;
  content: EngineeringContent;
}

export type EngineeringContent =
  | { kind: 'text'; paragraphs: string[] }
  | { kind: 'list'; intro?: string; items: string[] }
  | { kind: 'layered'; layers: StateLayer[] }
  | { kind: 'roles'; intro: string; roles: RolePermission[] }
  | { kind: 'lifecycle'; steps: string[] }
  | { kind: 'flow'; steps: string[] }
  | { kind: 'events'; intro: string; events: string[] }
  | { kind: 'decisions'; decisions: EngineeringDecision[] };

export interface StateLayer {
  label: string;
  description: string;
  subItems?: string[];
}

export interface RolePermission {
  role: string;
  permissions: string[];
}

export interface EngineeringDecision {
  question: string;
  why: string;
  result: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  organization: string;
  year: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
}

export interface Profile {
  name: string;
  role: string;
  specialization: string;
  coreStack: string[];
  realtimeStack: string[];
  github: string;
  linkedin: string;
  email: string;
}
