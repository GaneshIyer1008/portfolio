export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['Python', 'C++', 'MATLAB'] },
  {
    group: 'Robot Learning & Simulation',
    items: ['NVIDIA Isaac Lab / Sim / Gym', 'PyTorch', 'MuJoCo', 'ROS2'],
  },
  { group: 'Vision & Data', items: ['NumPy', 'OpenCV', 'Pandas', 'scikit-learn'] },
  { group: 'Tools', items: ['Git', 'Docker', 'LaTeX'] },
];
