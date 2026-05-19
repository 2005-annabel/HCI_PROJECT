export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  isMain?: boolean;
}

export type SavoraPart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
