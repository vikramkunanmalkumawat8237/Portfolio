export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location: string;
  blurb: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
}

export interface EducationEntry {
  course: string;
  institution: string;
  year: string;
  marks: string;
  remark?: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  note: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface StatEntry {
  value: string;
  label: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
