import { JSX } from "react";
type filterTabTittle = "miffy" | "boris" | "mordred";
interface IFilterTabs {
  filterTabTittle: filterTabTittle;
}
export default function FilterTabs({
  filterTabTittle,
}: IFilterTabs): JSX.Element {
  const allDataFilters = [
    { optionDescription: "Kõik" },
    { optionDescription: "Tallinn" },
    { optionDescription: "Harjumaa" },
    { optionDescription: "Narva" },
  ];
  return (
    <div className="bg-white flex flex-col gap-[8px]">
      <h1>{filterTabTittle}</h1>
      {allDataFilters.map(({}) => (
        <></>
      ))}
    </div>
  );
}
