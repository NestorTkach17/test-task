const ProfileDetailsSettingsFormFields = () => {
    return (
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
    );
};

export default ProfileDetailsSettingsFormFields;