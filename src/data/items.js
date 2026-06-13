import expressmedCover from '../assets/expressmed-cover.png'
import homecare from '../assets/homecare.png'

export const PROJECTS = [
  {
    id: 'expressmed-patient-app',
    name: 'ExpressMed Patient App',
    status: 'deployed',
    date: '2023 - Present',
    thumbnail: expressmedCover,
    images: [expressmedCover, homecare],
    shortDesc: 'Cross-platform mobile app for booking healthcare appointments with integrated payment flow.',
    longDesc: 'Built with Flutter and Firebase, this app allows patients to book appointments in real time, and navigate payment flows. Includes push notifications for reminders and appointment confirmations. Live on both the Google Play Store and Apple App Store.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    links: {
      github: null,
      video: null,
      htmlDemo: null,
      playstore: 'https://play.google.com/store/apps/details?id=expressmed.patient&pcampaignid=web_share',
      appstore: 'https://apps.apple.com/gh/app/expressmed-healthcare/id6744465789',
    }
  },
]

export const RESEARCH = [
  {
    id: 'nhis-ml',
    name: 'Hospital Revisit & Disease Prediction',
    status: 'in-progress',
    date: '2023 – 2024',
    thumbnail: null,
    images: [],
    shortDesc: 'Large-scale ML study on ~549K hospital visits from Ghana NHIS claims data.',
    longDesc: 'Compared five models — logistic regression, random forest, XGBoost, MLP, and TabM — across binary and multi-class classification tasks for patient outcome prediction. XGBoost consistently outperformed. Stratified splits applied to prevent data leakage. Targeting JMIR publication with a clinician-facing web app featuring reasoning chains.',
    tech: ['Python', 'XGBoost', 'PyTorch', 'TabM', 'scikit-learn', 'pandas'],
    links: {
      github: null,
      paper: null,
      video: null,
      htmlDemo: null,
    }
  }
]

export const LAB = [
  {
    id: 'mastering-tinkering',
    name: 'Mastering Tinkering',
    status: 'completed',
    date: '2026',
    thumbnail: null,
    images: [],
    shortDesc: 'Course portfolio of group projects and individual assignments exploring prototyping and making.',
    longDesc: 'A collection of work from the Mastering Tinkering course at the University of Twente. Documents the full journey through group projects and individual assignments, covering hands-on prototyping, iterative design, and physical/digital making.',
    tech: ['Prototyping', 'Interaction Design', 'Physical Computing'],
    links: {
      notion: 'https://www.notion.so/Mastering-Tinkering-Portfolio-c51982b074434c84954931ef743b8c31?source=copy_link',
    }
  }
]