import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema, type AccountFormData } from "../schema/accountSchema";
import InputField from "../components/InputField";

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: "Md",
      lastName: "Rimel",
      email: "rimel1111@gmail.com",
      address: "Kingstone, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = (data: AccountFormData) => {
    console.log("✅ Form Submitted:", data);
    alert("Changes saved successfully!");
    reset({
      ...data,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const handleCancel = () => reset();

  // Dynamic field configuration
  const accountFields = [
    { label: "First Name", name: "firstName", placeholder: "Md" },
    { label: "Last Name", name: "lastName", placeholder: "Rimel" },
    { label: "Email", name: "email", placeholder: "rimel1111@gmail.com" },
    { label: "Address", name: "address", placeholder: "Kingstone, 5236, United State" },
  ];

  const passwordFields = [
    { name: "currentPassword", placeholder: "Current Password", type: "password" },
    { name: "newPassword", placeholder: "New Password", type: "password" },
    { name: "confirmNewPassword", placeholder: "Confirm New Password", type: "password" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 sm:gap-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 rounded-lg"
    >
      <h3 className="font-semibold text-lg sm:text-xl">Edit Your Profile</h3>

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-2 px-2 md:px-4 rounded-lg">
        {accountFields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            register={register}
            error={errors[field.name as keyof AccountFormData]}
          />
        ))}
      </div>

      {/* Password Section */}
      <div className="flex flex-col gap-3 py-2 md:px-4 rounded-lg">
        <h3 className="py-2 font-semibold text-base sm:text-lg">Password Changes</h3>
        {passwordFields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            register={register}
            error={errors[field.name as keyof AccountFormData]}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-2">
        <button
          type="button"
          onClick={handleCancel}
          className="w-full sm:w-auto px-6 py-2 text-gray-700 hover:text-black font-medium border border-gray-400 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-medium"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
