"use client";

import { JSX, useState } from "react";
import { allDataFilters } from "@/src/utils/constants";
import HeaderTitle from "../HeaderTitle";

interface IFilterTabs {
  initialTab?: string;
}

export default function FilterTabs({
  initialTab = "all",
}: IFilterTabs): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const handleTabClick = (id: string) => {
    console.log("Tab clicked:", id); // Add logging to debug
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="border-b">
        <HeaderTitle title="Minu lemmikud" />
        <div className="overflow-x-auto scrollbar-hide px-5 pb-5 pt-2">
          <div className="flex gap-2 min-w-min">
            {allDataFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleTabClick(filter.id)}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 rounded-full border-2 ${
                  activeTab === filter.id
                    ? "border-primary-orange bg-primary-orange/5 text-primary-orange"
                    : "border-transparent hover:bg-gray-100"
                }`}
              >
                {filter.optionDescription}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
