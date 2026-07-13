// Centralized site content. Keeping copy here means components stay
// focused on layout/markup, and edits (e.g. new testimonial) live in one place.

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "benefits", label: "Benefits" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { label: "Years of Practice", end: 3, suffix: "+" },
  { label: "Students Guided", end: 500, suffix: "+" },
  { label: "Workshops Conducted", end: 10, suffix: "+" },
  { label: "Daily Practice", end: 100, suffix: "%" },
];

export const SERVICES = [
  {
    title: "Hatha Yoga",
    icon: "GiLotus",
    desc: "Slow, deliberate postures that build strength and steady the breath — ideal for a grounded start.",
  },
  {
    title: "Vinyasa Yoga",
    icon: "GiBodySwapping",
    desc: "Breath-linked, flowing sequences that build heat, stamina, and graceful movement.",
  },
  {
    title: "Pranayama",
    icon: "GiLungs",
    desc: "Traditional breathing techniques to calm the nervous system and sharpen focus.",
  },
  {
    title: "Meditation",
    icon: "GiMeditation",
    desc: "Guided stillness practices for mental clarity, emotional balance, and inner quiet.",
  },
  {
    title: "Stress Management",
    icon: "GiHeartWings",
    desc: "A blend of movement and breathwork designed to ease tension held in body and mind.",
  },
  {
    title: "Weight Loss Yoga",
    icon: "GiFire",
    desc: "Dynamic, metabolism-boosting sequences paired with mindful lifestyle guidance.",
  },
  {
    title: "Flexibility Training",
    icon: "GiMuscleUp",
    desc: "Progressive stretching protocols that safely expand your range of motion over time.",
  },
  {
    title: "Corporate Yoga",
    icon: "GiOfficeChair",
    desc: "On-site or virtual sessions that help teams reduce stress and boost focus at work.",
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "Certified Yogic Science Graduate",
    desc: "A B.Sc. in Yogic Science grounds every session in authentic, well-researched practice.",
    icon: "GiGraduateCap",
  },
  {
    title: "Personalized Training",
    desc: "Every plan is shaped around your body, goals, and pace — never one-size-fits-all.",
    icon: "GiPerson",
  },
  {
    title: "Mind & Body Wellness",
    desc: "A holistic approach that treats physical health and mental peace as one practice.",
    icon: "GiBrain",
  },
  {
    title: "Beginner Friendly",
    desc: "Clear, patient instruction that welcomes you exactly where you are today.",
    icon: "GiPlantSeed",
  },
  {
    title: "Holistic Lifestyle Guidance",
    desc: "Support that extends beyond the mat — breath, nutrition, rest, and routine.",
    icon: "GiCompass",
  },
  {
    title: "Flexible Online & Offline Sessions",
    desc: "Practice in person or from anywhere in the world, on a schedule that fits your life.",
    icon: "GiEarthAmerica",
  },
];

export const BENEFITS = [
  { title: "Better Posture", icon: "GiBackPain" },
  { title: "Reduced Stress", icon: "GiHeartWings" },
  { title: "Improved Flexibility", icon: "GiBodyBalance" },
  { title: "Mental Clarity", icon: "GiBrain" },
  { title: "Better Sleep", icon: "GiMoon" },
  { title: "Weight Management", icon: "GiWeight" },
  { title: "Strong Immunity", icon: "GiShield" },
  { title: "Inner Peace", icon: "GiLotus" },
];



export const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery8,
  gallery9,
];
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    review:
      "Ayush's sessions completely changed how I handle stress. Six months in, I sleep better and feel calmer at work every single day.",
  },
  {
    name: "Rohan Mehta",
    role: "Software Engineer",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    review:
      "I came in with zero flexibility and constant back pain from sitting all day. The personalized plan made a real, visible difference.",
  },
  {
    name: "Anita Desai",
    role: "College Professor",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    review:
      "The meditation and pranayama sessions gave me tools I still use daily. Ayush teaches with patience and genuine care.",
  },
];

export const FAQS = [
  {
    q: "Who can join these sessions?",
    a: "Anyone — from complete beginners to advanced practitioners. Sessions are tailored to age, fitness level, and personal goals.",
  },
  {
    q: "Do beginners need prior experience?",
    a: "None at all. Most new students start with zero yoga background, and every session is paced to build confidence gradually.",
  },
  {
    q: "Are online classes available?",
    a: "Yes. Live one-on-one and small-group sessions are available over video call, alongside in-person classes.",
  },
  {
    q: "How long is each session?",
    a: "Standard sessions run 60 minutes, with 30-minute express options available for busy schedules.",
  },
  {
    q: "What should I bring to a session?",
    a: "A yoga mat, a bottle of water, and comfortable clothing you can move freely in. Mats are also available on-site.",
  },
];
