
export interface ServiceTime {
  day: string;
  time: string;
  name: string;
  description: string;
}

export interface Ministry {
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons conceptually
  imageUrl: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  roleNe: string;
  bio: string;
  bioNe: string;
  imageUrl: string;
}