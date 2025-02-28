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

const profileSettingsFormFields = [
  { id: "name", label: "Nimi", type: "text", readOnly: true, hasChevron: true },
  {
    id: "email",
    label: "Email",
    type: "email",
    readOnly: true,
    hasChevron: true,
  },
  {
    id: "phone",
    label: "Telefon",
    type: "tel",
    readOnly: true,
    hasChevron: true,
  },
  {
    id: "country",
    label: "Riik",
    type: "text",
    readOnly: true,
    hasChevron: true,
  },
  {
    id: "carPlate",
    label: "Minu auto",
    type: "text",
    readOnly: false,
    hasChevron: false,
  },
];

export { allTabLinks, allDataFilters, profileSettingsFormFields };
