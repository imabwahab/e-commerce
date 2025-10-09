import { accountSchema, type AccountFormData } from '../schema/accountSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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

  const handleCancel = () => {
    reset(); // Reset to default values
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 sm:gap-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 rounded-lg"
    >
      <h3 className="font-semibold text-lg sm:text-xl">Edit Your Profile</h3>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-2 px-4 rounded-lg">
        <div className="flex flex-col">
          <label className="py-2 font-medium" htmlFor="firstName">
            First Name
          </label>
          <input
            {...register("firstName")}
            placeholder="Md"
            className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="py-2 font-medium" htmlFor="lastName">
            Last Name
          </label>
          <input
            {...register("lastName")}
            placeholder="Rimel"
            className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email & Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-2 px-4 rounded-lg">
        <div className="flex flex-col">
          <label className="py-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="rimel1111@gmail.com"
            className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="py-2 font-medium" htmlFor="address">
            Address
          </label>
          <input
            {...register("address")}
            placeholder="Kingstone, 5236, United State"
            className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
      </div>

      {/* Password Fields */}
      <div className="flex flex-col gap-3 py-2 px-4 rounded-lg">
        <h3 className="py-2 font-semibold text-base sm:text-lg">
          Password Changes
        </h3>
        <input
          type="password"
          placeholder="Current Password"
          {...register("currentPassword")}
          className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="New Password"
          {...register("newPassword")}
          className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          {...register("confirmNewPassword")}
          className="px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.confirmNewPassword && (
          <p className="text-red-500 text-sm">{errors.confirmNewPassword.message}</p>
        )}
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
  )
}

export default AccountForm