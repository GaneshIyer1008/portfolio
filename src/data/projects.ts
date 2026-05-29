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
      title: 'Results across KITTI, Malaga, Parking & Polybahn',
    },
  },
  {
    title: 'Koopman / DMD Control for Nonlinear Systems',
    context: 'Bachelor Thesis · IIT Bombay',
    period: 'Aug 2024 – Apr 2025',
    summary: 'Data-driven control of nonlinear dynamics through Koopman operator theory.',
    highlights: [
      'Studied Koopman theory and data-driven control: DMD / EDMD, control variants (DMDc) and Hankel-based MPC.',
      'Applied Koopman prediction to spring-mass, Van der Pol, pendulum and a two-link manipulator.',
      'Used Koopman / DMD on simulation data of a planar soft robot to obtain approximate linear dynamics in a lifted space.',
    ],
    tags: ['Koopman', 'DMD', 'Control', 'MPC'],
  },
  {
    title: 'Warehouse Drone — e-Yantra',
    context: 'National Robotics Competition (eYRC)',
    contextUrl: 'https://portal.e-yantra.org/',
    period: 'Aug 2024 – Sep 2024',
    summary: 'Autonomous quadcopter navigation through a simulated warehouse.',
    highlights: [
      'PID control of roll / pitch / yaw / throttle for a Swift Pico drone in Gazebo, with the ROS2 node and communication pipeline.',
      'A* motion planning to navigate and control the drone through the warehouse environment.',
      'Ranked 40 of 3000+ teams nationally and selected among the top 50 for the hardware phase.',
    ],
    tags: ['ROS2', 'PID Control', 'A*', 'Gazebo'],
  },
];
