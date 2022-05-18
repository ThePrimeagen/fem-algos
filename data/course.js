import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "ThePrimeagen",
    company: "Netflix",
  },
  title: "Polygot Programming - TS, Go, Rust",
  subtitle: "The course that teaches you new languages with languages you know.",
  frontendMastersLink: "",
  description: "This course is designed for those that want to expand their knowledge to other languages by building a tool within the new language, and not reading yet another language tutorial.  This will be a fast paced, high octain learning experience.",
  keywords: ["ThePrimeagen", "Live Coding", "TypeScript", "JavaScript", "Golang", "RustLang", "Go", "Rust", "TS", "JS"],
  social: {
    twitter: "ThePrimeagen",
    twitch: "ThePrimeagen",
    youtube: "ThePrimeagen",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
