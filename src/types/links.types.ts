import { JSX } from "react";

type filterTabTittle = "miffy" | "boris" | "mordred";

interface ITabLink {
  to: string;
  linkText: string;
  icon: JSX.Element;
}

export type { ITabLink, filterTabTittle };
