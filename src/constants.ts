import { TeamMember, Project } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'annabel',
    name: 'ANNABEL OMONDI',
    role: 'Lead Designer',
    bio: 'Annabel is a visionary designer with a passion for creating intuitive and aesthetically pleasing user experiences. With over 5 years of experience in product design, she leads the creative direction of AdventHub.',
    image: 'https://picsum.photos/seed/annabel/400/400'
  },
  {
    id: 'joy',
    name: 'JOY MUIRU',
    role: 'Systems Architect',
    bio: 'Joy specializes in backend infrastructure and scalable systems. Her expertise ensures that all AdventHub projects are built on a solid, reliable foundation.',
    image: 'https://picsum.photos/seed/joy/400/400'
  },
  {
    id: 'roycline',
    name: 'ROYCLINE MWENDA',
    role: 'Project Manager',
    bio: 'Roycline keeps the team on track and ensures that all projects are delivered on time and within scope. Her organizational skills are the glue that holds AdventHub together.',
    image: 'https://picsum.photos/seed/roy/400/400'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'savora',
    title: 'Savora',
    description: 'A revolutionary booking platform inspired by the simplicity and efficiency of top-tier travel sites. Savora offers seamless reservations for luxury stays worldwide.',
    image: 'https://picsum.photos/seed/savora/1200/800',
    isMain: true
  },
  {
    id: 'aqua-flow',
    title: 'AquaFlow',
    description: 'An intelligent water management system for smart cities, optimizing distribution and reducing waste through real-time data analytics.',
    image: 'https://picsum.photos/seed/aqua/800/600'
  }
];
