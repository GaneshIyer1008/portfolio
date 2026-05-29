export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['Python', 'C++', 'MATLAB'] },
  {
    group: 'Robot Learning & Simulation',
    items: ['NVIDIA Isaac Lab / Sim / Gym', 'MuJoCo', 'PyTorch', 'ROS2'],
  },
  { group: 'Vision & Data', items: ['OpenCV', 'NumPy', 'Pandas', 'scikit-learn'] },
  { group: 'Tools', items: ['Git', 'Docker', 'LaTeX'] },
];
