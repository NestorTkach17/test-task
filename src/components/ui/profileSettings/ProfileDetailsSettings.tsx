"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const ProfileDetailsSettings = () => {
  const [formData, setFormData] = useState({
    accountType: "private",
    name: "Dmitry Cherny",
    email: "dmitry@cherny.ee",
    phone: "+372 503 8466",
    country: "Eesti",
    carPlate: "955THZ",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAccountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, accountType: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)]">
      <div className="px-5 pt-7 pb-24">
        <form id="settings-form" onSubmit={handleSubmit}>
          <div className="flex mb-6 space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="accountType"
                value="private"
                checked={formData.accountType === "private"}
                onChange={handleAccountTypeChange}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border ${
                  formData.accountType === "private"
                    ? "bg-primary-orange border-primary-orange"
                    : "bg-[#F5F5F5] border-[#E7E7E7]"
                }`}
              >
                {formData.accountType === "private" && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </span>
              <span className="ml-2">Eraklient</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="accountType"
                value="business"
                checked={formData.accountType === "business"}
                onChange={handleAccountTypeChange}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border ${
                  formData.accountType === "business"
                    ? "bg-primary-orange border-primary-orange"
                    : "bg-[#F5F5F5] border-[#E7E7E7]"
                }`}
              >
                {formData.accountType === "business" && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </span>
              <span className="ml-2">Äriklient</span>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nimi
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
                  readOnly
                />
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-black" />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
                  readOnly
                />
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-black" />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefon
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
                  readOnly
                />
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-black" />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Riik
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
                  readOnly
                />
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-black" />
              </div>
            </div>

            <div>
              <label
                htmlFor="carPlate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Minu auto
              </label>
              <input
                type="text"
                id="carPlate"
                name="carPlate"
                value={formData.carPlate}
                onChange={handleInputChange}
                className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
              />
            </div>

            <div>
              <p className="text-primary-orange font-medium">
                Kustuta minu konto
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-5 py-4 bg-white">
        <button
          type="submit"
          form="settings-form"
          className="w-full bg-primary-orange hover:bg-primary-orange/90 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange"
        >
          Salvesta
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsSettings;
