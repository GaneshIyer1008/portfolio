import type { Link } from './types';

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status?: string;
  links: Link[];
}

// The component bolds your name automatically — keep it spelled exactly as below.
export const me = 'Ganesh Iyer';

export const publications: Publication[] = [
  {
    title: 'Path Planning in Complex Environments with Superquadrics and Voronoi-Based Orientation',
    authors:
      'Lin Yang, Ganesh Iyer, Baichuan Lou, Sri Harsha Turlapati, Chen Lv, Domenico Campolo',
    venue: 'IEEE International Conference on Robotics and Biomimetics (ROBIO)',
    year: '2025',
    status: 'Accepted',
    links: [
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=gVqKmrsAAAAJ&hl=en' },
      { label: 'Conference', href: 'https://www.robio2025.org/' },
    ],
  },
];
