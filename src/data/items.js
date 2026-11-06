import expressmedCover from "../assets/expressmed-cover.png";
import homecare from "../assets/homecare.png";
import designCaseStudies from "../assets/DCS.png";
import OptimusKGVis from "../assets/KGV.png";
import Siren from "../assets/Sir.png";
import MT from "../assets/MT.png";
import hospitalRevisitDiseasePred from "../assets/HRDP.png";
import expressmedMedic from "../assets/medic.png";
import sirenHome from "../assets/siren-home.png";
import sirenSections from "../assets/siren-sections.png";
import sirenChooseVoice from "../assets/siren-choose-voice.png";
import sirenDocPlayer from "../assets/siren-doc-player.png";
// TODO: add this image to ../assets/ (see asset suggestions). Placeholder name:
import twenteDispatch from "../assets/centralised-and-decentralised.png";
import signRace from "../assets/sign-race.png";

const base = import.meta.env.BASE_URL;

export const PROJECTS = [
  {
    id: "expressmed-patient-app",
    name: "ExpressMed Patient App",
    status: "deployed",
    date: "2023 – Present",
    thumbnail: expressmedCover,
    images: [expressmedCover, homecare],
    shortDesc:
      "Cross-platform mobile app for booking healthcare appointments with integrated payment flow.",
    longDesc:
      "Built with Flutter and Firebase, this app allows patients to book appointments in real time and navigate payment flows. Includes push notifications for reminders and appointment confirmations. Live on both the Google Play Store and Apple App Store.",
    tech: ["Flutter", "Firebase", "Dart"],
    links: {
      website: "https://expressmedhealthcare.com/#/",
      playstore:
        "https://play.google.com/store/apps/details?id=expressmed.patient&pcampaignid=web_share",
      appstore:
        "https://apps.apple.com/gh/app/expressmed-healthcare/id6744465789",
    },
  },
  {
    id: "expressmed-medic",
    name: "ExpressMed Medic",
    status: "deployed",
    date: "2023 – Present",
    thumbnail: expressmedMedic,
    images: [],
    shortDesc:
      "Doctor-facing mobile app for managing patient appointments and care on the ExpressMed platform.",
    longDesc:
      "The clinician-side companion to the ExpressMed Patient App. Allows healthcare providers to manage appointments, view patient information, and coordinate care. Available on both the Google Play Store and Apple App Store.",
    tech: ["Flutter", "Firebase", "Dart"],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=expressmed.doctor&hl=en",
      appstore: "https://apps.apple.com/in/app/expressmed-medic/id6748003055",
    },
  },
  {
    id: "twente-ambulance-mas",
    name: "Centralized vs Decentralized Ambulance Dispatch (MAS)",
    status: "completed",
    date: "2026",
    thumbnail: twenteDispatch,
    images: [],
    shortDesc:
      "Agent-based simulation comparing centralized and decentralized ambulance dispatch in the Twente region, with a fault-tolerant hybrid.",
    longDesc:
      "A multi-agent simulation for the Agentic and Multi-Agent Systems course (University of Twente) that asks when decentralized ambulance dispatch can match or beat a central control room. Built in Python with Mesa and a live Solara visualization, it models the real Twente EMS region (11 posts, two emergency departments, 13 on-duty ambulances) two ways: a centralized control room sending the nearest unit, and a decentralized Contract Net auction (Smith 1980) where free ambulances bid their arrival time and the fastest wins. The model is calibrated to real Dutch figures (95th-percentile response, population coverage, hospital offload) and validated on held-out days. Six experiments sweep demand, message loss and delay, control-room outage, bidding-window length, and operator staffing, each over 30 paired simulated days with 95% confidence intervals on every difference. Headline finding: central dispatch is faster day-to-day, under heavy demand, and with poor communication; the decentralized auction wins only during a control-room outage of 30 minutes or more. A hybrid that falls back to bidding while the control room is down captures the best of both, provided it switches within about ten minutes. Includes an optional voice-agent call intake that turns a spoken emergency call into a dispatched incident.",
    tech: [
      "Python",
      "Mesa",
      "Solara",
      "Matplotlib",
      "NumPy",
      "Agent-Based Modeling",
      "Contract Net Protocol",
    ],
    links: {

      github: "https://github.com/Morgan11-tech/decentralised-ambulance-and-hospital-coordination",
      // TODO: add once recorded — a screen capture of the Solara app is ideal
      youtubeDemo: null,
    },
  },
    {
    id: "sign-race",
    name: "Sign Race",
    status: "completed",
    date: "2026",
    thumbnail: signRace,
    images: [],
    shortDesc:
      "Real-time webcam multiplayer game where two players race to perform the on-screen sign-language handshape first.",
    longDesc:
      "A real-time, webcam-based multiplayer game built for the Image Processing and Computer Vision course (University of Twente) by a five-person team. Two players race head to head to correctly perform the static sign-language handshape shown on screen, and the first to match it scores the round. Built entirely with classical computer vision in OpenCV — no deep learning — the pipeline reads each player's webcam feed, isolates the hand, and matches the current handshape against the target sign in real time. Morgan led the team and owned the scene-processing and real-time integration layer (Task 5), stitching the four upstream vision tasks into a single live game loop.",
    tech: [
      "Python",
      "OpenCV",
      "NumPy",
      "Computer Vision",
      "Real-Time Processing",
    ],
    links: {
      // TODO: add the repo / demo once available
      github: null,
      youtubeDemo: null,
    },
  },
  {
    id: "knowledge-graph-explorer",
    name: "Knowledge Graph Explorer",
    status: "completed",
    date: "2026",
    thumbnail: OptimusKGVis,
    images: [],
    shortDesc:
      "Interactive browser-based knowledge graph visualization tools built on OptimusKG.",
    longDesc:
      "Two browser-based tools for exploring biomedical knowledge graphs. The first lets you explore a single disease and its connections across the graph. The second places two diseases side by side for direct comparison — useful for identifying shared pathways, comorbidities, and drug targets.",
    tech: ["JavaScript", "HTML", "CSS", "pyvis", "OptimusKG"],
    links: {
      github: "https://github.com/Morgan11-tech/OptimusKGVis",
      htmlDemos: [
        {
          label: "Single Disease Explorer",
          src: `${base}demos/kg-single.html`,
        },
        {
          label: "Disease Comparison Tool",
          src: `${base}demos/kg-compare.html`,
        },
      ],
      youtubeDemo: "https://youtu.be/7Jv0VuI6dGY?si=4-1gbMRjdBtIOw26",
    },
  },
  {
    id: "design-case-studies",
    name: "Design Case Studies",
    status: "completed",
    date: "2023",
    thumbnail: designCaseStudies,
    images: [],
    shortDesc:
      "A collection of UI/UX design case studies covering mobile and web product design.",
    longDesc:
      "A portfolio of design work spanning mobile app interfaces, web product design, and UX research. Covers the full design process from problem framing and user research through wireframing, prototyping, and high-fidelity UI.",
    tech: ["Figma", "UI/UX", "Product Design", "Prototyping"],
    links: {
      demo: "https://morgans-portfolio-4ec557.webflow.io/",
    },
  },
  {
    id: "siren",
    name: "Siren",
    status: "in-progress",
    date: "2025 – Present",
    thumbnail: Siren,
    images: [sirenHome, sirenSections, sirenChooseVoice, sirenDocPlayer],
    shortDesc:
      "Flutter Android app that converts PDF documents into synchronized audio experiences.",
    longDesc:
      "Siren lets users import any PDF — academic papers, books, reports — and listen to it with a karaoke-style read mode where each word highlights in sync with audio playback. Built with Flutter and BLoC, it uses Inworld's TTS API routed through a Cloudflare Worker proxy. Features include word-tap-to-seek, adjustable font size, playback speed control, and Netflix-style auto-advance between sections. Targeted at Ghanaian and African users who want to listen to their own documents on the go.",
    tech: ["Flutter", "Dart", "BLoC", "Inworld TTS", "Cloudflare Workers"],
    links: {
      github: "https://github.com/Morgan11-tech/Siren",
    },
  },
];

export const RESEARCH = [
  {
    id: "nhis-ml",
    name: "Hospital Revisit & Disease Prediction",
    status: "in-progress",
    date: "2023 – 2024",
    thumbnail: hospitalRevisitDiseasePred,
    images: [],
    shortDesc:
      "ML study predicting patient revisits and disease progression using Ghana NHIS claims data.",
    longDesc:
      "Develops ML models to predict whether a patient will return to a health facility within 30, 90, or 180 days, and what disease they are most likely to be diagnosed with at that revisit. Uses longitudinal NHIS claims records from a single Ghanaian facility (~34,000 patients, 10 years). Compares traditional ML (Logistic Regression, Random Forest, XGBoost) against tabular deep learning (MLP, TabM). Patient-level data splitting prevents information leakage. TabM led revisit prediction across all horizons (AUC-ROC: 0.891–0.973); XGBoost led disease prediction. One of the first applications of TabM (ICLR 2025) to clinical prediction in a sub-Saharan African context.",
    tech: [
      "Python",
      "XGBoost",
      "PyTorch",
      "TabM",
      "scikit-learn",
      "pandas",
      "TreeSHAP",
    ],
    links: {
      github:
        "https://github.com/Morgan11-tech/Machine-Learning-for-Predicting-Patient-Revisits-and-Future-Diagnoses-Using-EHR-Data",
      huggingface: "https://huggingface.co/datasets/Mor11/ml-pred-anonymized", // update with real URL
      paper: null, // update when published
    },
  },
];

export const LAB = [
  {
    id: "mastering-tinkering",
    name: "Mastering Tinkering",
    status: "completed",
    date: "2026",
    thumbnail: MT,
    images: [],
    shortDesc:
      "Course portfolio of group projects and individual assignments exploring prototyping and making.",
    longDesc:
      "A collection of work from the Mastering Tinkering course at the University of Twente. Documents the full journey through group projects and individual assignments, covering hands-on prototyping, iterative design, and physical/digital making.",
    tech: ["Prototyping", "Interaction Design", "Physical Computing"],
    links: {
      notion:
        "https://www.notion.so/Mastering-Tinkering-Portfolio-c51982b074434c84954931ef743b8c31?source=copy_link",
    },
  },
];