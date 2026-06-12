import type { Video, Link } from './types';

export interface Experience {
  org: string;
  role: string;
  period: string;
  location?: string;
  orgUrl?: string;
  advisor?: { name: string; href?: string };
  highlights: string[];
  tags: string[];
  video?: Video;
  image?: string;
  videoSoon?: boolean;
  links?: Link[];
}

export const experience: Experience[] = [
  {
    org: 'xTerra Robotics',
    role: 'Research Intern — RL for Quadruped Locomotion',
    period: 'Jun 2025 – Jul 2025',
    location: 'India',
    orgUrl: 'https://xterrarobotics.com/',
    highlights: [
      'Collected a 3-minute reference dataset by running a model-based controller on the Svan M2 hardware.',
      'Trained an RL policy to imitate those reference trajectories — joint positions, velocities and torques, and foot placements — using trajectory-tracking rewards.',
      'Ran PPO in NVIDIA Isaac Gym with domain randomization for sim-to-real, validated in MuJoCo.',
      'Built a neural state estimator for base linear/angular velocity and height from the sensor buffer required by the policy.',
      'Deployed on Svan M2 hardware, achieving a trot gait (0.7 m/s forward, 0.5 m/s lateral, 1 rad/s yaw).',
    ],
    tags: ['Reinforcement Learning', 'Isaac Gym', 'Sim-to-Real', 'Legged Robots'],
    video: { youtubeId: 'Kl71MqVsgZI', title: 'Svan M2 — training, simulation & hardware' },
  },
  {
    org: 'Nanyang Technological University',
    role: 'Global Connect Fellow — Path Planning Research',
    period: 'May 2024 – Jul 2024',
    location: 'Singapore',
    advisor: { name: 'Prof. Domenico Campolo', href: 'https://dr.ntu.edu.sg/cris/rp/rp00604' },
    highlights: [
      'Developed a novel algorithm to build Voronoi diagrams for superquadric obstacles, then ran Dijkstra on the resulting graph for efficient path planning.',
      'Extracted obstacle point clouds from a single environment image and fit superquadrics, validating on a physical maze of varied shapes.',
      'Benchmarked against A*, RRT*, genetic-algorithm heuristics and a state-of-the-art 3D drone planner — Voronoi planning gave safer, shorter paths with fewer nodes.',
    ],
    tags: ['Path Planning', 'Computer Vision', 'Superquadrics', 'Voronoi'],
    image: 'voronoi.png',
    links: [
      { label: 'Code — GitHub', href: 'https://github.com/synergylab-ntu/Voronoi-Superquadrics' },
      {
        label: 'Resulting paper — ROBIO 2025',
        href: 'https://scholar.google.com/citations?user=gVqKmrsAAAAJ&hl=en',
      },
    ],
  },
];
