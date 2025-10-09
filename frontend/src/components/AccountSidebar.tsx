

const AccountSidebar = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
      <div>
        <h2 className="font-semibold text-base sm:text-lg mb-2">
          Manage My Account
        </h2>
        <p className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
          My Profile
        </p>
        <p className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
          Address Book
        </p>
        <p className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
          My Payment Options
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-base sm:text-lg mb-2">
          My Orders
        </h2>
        <p className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
          My Returns
        </p>
        <p className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
          My Cancellations
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-base sm:text-lg hover:text-gray-700 cursor-pointer transition-colors">
          WishList
        </h2>
      </div>
    </div>
  )
}

export default AccountSidebar