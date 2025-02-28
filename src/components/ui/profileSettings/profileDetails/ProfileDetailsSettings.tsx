"use client";

import { profileSettingsFormFields } from "@/src/utils/constants";
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

  const RadioButton = ({ value, label }: { value: string; label: string }) => (
    <label className="flex items-center">
      <input
        type="radio"
        name="accountType"
        value={value}
        checked={formData.accountType === value}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, accountType: e.target.value }))
        }
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border
        ${
          formData.accountType === value
            ? "bg-primary-orange border-primary-orange"
            : "bg-[#F5F5F5] border-[#E7E7E7]"
        }`}
      >
        {formData.accountType === value && (
          <span className="w-2 h-2 rounded-full bg-white" />
        )}
      </span>
      <span className="ml-2">{label}</span>
    </label>
  );

  const FormField = ({
    field,
  }: {
    field: (typeof profileSettingsFormFields)[0];
  }) => (
    <div>
      <label
        htmlFor={field.id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {field.label}
      </label>
      <div className="relative">
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          value={formData[field.id as keyof typeof formData]}
          onChange={handleInputChange}
          className="block w-full rounded-md border-[#E7E7E7] shadow-sm focus:border-primary-orange focus:ring-primary-orange py-2 px-3 appearance-none border bg-[#FCFCFC]"
          readOnly={field.readOnly}
        />
        {field.hasChevron && (
          <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-black" />
        )}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[calc(100vh-64px)]">
      <div className="px-5 pt-7 pb-24">
        <form id="settings-form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex mb-6 space-x-4">
            <RadioButton value="private" label="Eraklient" />
            <RadioButton value="business" label="Äriklient" />
          </div>

          <div className="space-y-4">
            {profileSettingsFormFields.map((field) => (
              <FormField key={field.id} field={field} />
            ))}
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
