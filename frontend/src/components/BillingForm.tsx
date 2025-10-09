import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { billingSchema, type BillingFormData } from "../schema/billingSchema";


interface BillingFormProps {
  onBillingSubmit: (data: BillingFormData) => void
}

const BillingForm: React.FC<BillingFormProps> = ({ onBillingSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingFormData>({
    resolver: zodResolver(billingSchema),
  });

  const onSubmit = (data: BillingFormData) => {
    console.log("Form Submitted:", data);
    onBillingSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="text-gray-600">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="companyName" className="text-gray-600">
          Company Name (optional)
        </label>
        <input
          type="text"
          id="companyName"
          {...register("companyName")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Street Address */}
      <div className="flex flex-col gap-2">
        <label htmlFor="streetAddress" className="text-gray-600">
          Street Address<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="streetAddress"
          {...register("streetAddress")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.streetAddress && (
          <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>
        )}
      </div>

      {/* Apartment (Optional) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="apartment" className="text-gray-600">
          Apartment, floor, etc. (optional)
        </label>
        <input
          type="text"
          id="apartment"
          {...register("apartment")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* City */}
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="text-gray-600">
          Town/City<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-gray-600">
          Phone Number<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-600">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-gray-100 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Save Info Checkbox */}
      <div className="flex items-center gap-3 pt-4">
        <input
          type="checkbox"
          id="saveInfo"
          {...register("saveInfo")}
          className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
        />
        <label htmlFor="saveInfo" className="text-gray-700">
          Save this information for faster check-out next time
        </label>
      </div>

      <button
        type="submit"
        className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BillingForm;
