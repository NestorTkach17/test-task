"use client";

export const TireProductContent = () => {
  const cardCount = [1, 2, 3, 4];

  return (
    <div className="divide-y divide-gray-200 mb-10">
      {cardCount.map((index) => (
        <div key={index}>
          <TireProductCard />
        </div>
      ))}
    </div>
  );
};

const TireProductCard = () => {
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-medium mb-1 truncate">
            Continental Conti Contact 7
          </h2>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#4DB748] mr-2"></div>
              <span className="whitespace-nowrap">Laos: 2 tk</span>
            </div>
            <span className="whitespace-nowrap">Asukoht: Vesse ladu</span>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-primary-orange text-white px-2 py-1 rounded">
              8.6
            </span>
            <span className="bg-light-blue text-white px-3 py-1 rounded">
              Põhjamaine
            </span>
            <span className="bg-light-gray px-2 py-1 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">68db</span>
            </span>
            <span className="bg-light-gray px-2 py-1 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">D</span>
            </span>
            <span className="bg-light-gray px-2 py-1 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">D</span>
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-md"></div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span>Kasutatud (5-6mm)</span>
        <span>☀️</span>
        <span>225/55/19 H91 DOT25</span>
      </div>

      <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-medium">€1.180,00</span>
            <span className="ml-2">/ tk</span>
          </div>
          <div className="whitespace-nowrap">Kuumakse al. €90</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#E9E9E9] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
