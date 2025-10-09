import AccountForm from "../components/AccountForm";
import AccountSidebar from "../components/AccountSidebar";

const Account = () => {


  return (
    <div className="w-full mt-32  max-w-7xl mx-auto ">
      {/* Header */}
      <div className="flex flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="w-3 sm:w-4 h-8 sm:h-10 bg-red-500 rounded"></span>
          <p className="text-red-500 font-semibold text-lg sm:text-xl">
            Accounts
          </p>
        </div>
        <p className="text-sm sm:text-base">
          Welcome! <span className="text-red-500 font-medium">Md Rime!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 rounded-b-lg">
        {/* Left Navigation */}
        <AccountSidebar />

        {/* Right Side - Form */}
        <AccountForm />
      </div>
    </div>
  );
};

export default Account;
