import type { Video, Link } from './types';

export interface Project {
  title: string;
  context: string;
  period: string;
  contextUrl?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
  video?: Video;
  image?: string;
  videoSoon?: boolean;
  links?: Link[];
}

export const projects: Project[] = [
  {
    title: 'Humanoid Motion Control for Soccer',
    context: 'NomadZ · RoboCup Team, ETH Zürich',
    contextUrl: 'https://nomadz.ethz.ch/',
    period: 'Feb 2026 – Present',
    featured: true,
    summary:
      'Imitation-learning motion control for Booster K1 humanoid robots competing in RoboCup soccer.',
    highlights: [
      'Retarget custom-recorded human motion (walking, dribbling, kicking) onto the robot using GVHMR and GMR.',
      'Trained a velocity-tracking locomotion policy and a dribbling policy that uses Adversarial Motion Priors (AMP) to encode natural style while satisfying the task objective, in NVIDIA Isaac Lab (MimicKit).',
      'Building deployment code for sim-to-real and integrating the policies with the vision and behaviour pipelines.',
    ],
    tags: ['Imitation Learning', 'AMP', 'Humanoid', 'Isaac Lab'],
    videoSoon: true,
  },
  {
    title: 'Cloth Folding with a Multi-Task Diffusion Policy',
    context: 'Robot Learning Course · ETH Zürich',
    period: 'Spring 2026',
    featured: true,
    summary:
      'Teaching a LeRobot SO-101 arm to fold a towel with a multi-task diffusion-transformer policy — assembled, teleoperated, trained and deployed on the real robot.',
    highlights: [
      'Assembled the SO-101 arm and collected ~200 teleoperated demonstrations, each performing three sub-tasks in succession: grasp a corner, first fold, second fold.',
      'Trained a multi-task DiT policy (LeRobot): CLIP vision + text encoders condition a Diffusion Transformer that predicts action chunks from a single wrist-camera RGB feed and the language instruction.',
      'Curated consistent demonstrations (similar joint trajectories, start and cloth positions, smooth motion) so the policy could learn all three stages.',
      'Deployed on the real robot with asynchronous inference on a local RTX 4060 (8 GB): policy server at 5 FPS and robot client at 15 FPS, within the limits of the local hardware’s inference latency.',
    ],
    tags: ['Diffusion Policy', 'Imitation Learning', 'LeRobot', 'Manipulation'],
    video: { youtubeId: 'KXIX6n430TI' },
    links: [{ label: 'Code — GitHub', href: 'https://github.com/GaneshIyer1008/Robot_Learning_Cloth_Folding' }],
  },
  {
    title: 'Monocular Visual Odometry',
    context: 'VAMR · ETH Zürich',
    contextUrl: 'https://rpg.ifi.uzh.ch/teaching.html#VAMR',
    period: 'Dec 2025 – Jan 2026',
    featured: true,
    summary:
      'A full monocular visual-odometry pipeline that recovers 6-DoF camera motion from a single camera.',
    highlights: [
      'Harris + SIFT features, KLT optical-flow tracking, PnP + RANSAC pose estimation and triangulation to recover 6-DoF poses (Python / OpenCV).',
      'Robust bootstrapping, nonlinear pose refinement (Levenberg–Marquardt), re-initialization and landmark rescaling to handle drift, feature loss and scale ambiguity.',
      'Tuned and validated on KITTI, Malaga, Parking and a custom ETH Polybahn dataset, achieving locally consistent trajectories.',
    ],
    tags: ['Computer Vision', 'SLAM', 'OpenCV', 'RANSAC'],
    video: {
      playlistId: 'PL9LvgMznBv40a43pjhvMSbIP-hU3sikqC',
      posterId: 'W7_cKB-Tfqw',
      title: 'Results across KITTI, Malaga, Parking & Polybahn',
    },
  },
];
