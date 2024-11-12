import refBackend from "~/assets/backend.png";
import refCreator from "~/assets/creator.png";
import refMobile from "~/assets/mobile.png";
import refWeb from "~/assets/web.png";

export const navLinks = [
  {
    id: "about    ",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as const;

export const services = [
  {
    service: "Frontend Developer",
    icon: refWeb,
  },
  {
    service: "Fullstack Developer",
    icon: refMobile,
  },
  {
    service: "Backend Developer",
    icon: refBackend,
  },
  {
    service: "DevOps Engineer",
    icon: refCreator,
  },
] as const;
