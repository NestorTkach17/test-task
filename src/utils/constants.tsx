import {
  EsindusedIcon,
  HeartIcon,
  HumanIcon,
  LoopIcon,
} from "../components/svg";
import { ITabLink } from "../types/links.types";

const allTabLinks: ITabLink[] = [
  { to: "/search", linkText: "Otsing", icon: <LoopIcon /> },
  { to: "/favorites", linkText: "Lemmikud", icon: <HeartIcon /> },
  { to: "/offices", linkText: "Esindused", icon: <EsindusedIcon /> },
  { to: "/profile", linkText: "Profiil", icon: <HumanIcon /> },
];

const allDataFilters = [
  { optionDescription: "Kõik", id: "all" },
  { optionDescription: "Tallinn", id: "tallinn" },
  { optionDescription: "Harjumaa", id: "harjumaa" },
  { optionDescription: "Narva", id: "narva" },
];

export { allTabLinks, allDataFilters };
