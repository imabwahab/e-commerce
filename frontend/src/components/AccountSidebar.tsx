import { useNavigate } from "react-router-dom"

const AccountSidebar = () => {
  const navigate = useNavigate()

  const accountSideBarLinks = [
    {
      heading: "Manage my Account",
      links: [
        { title: "My Profile", path: '/account' },
        { title: "Address Book", path: '/account/address-book' },
        { title: "My Profile", path: '/account/payment-options' }
      ]
    },
    {
      heading: "My Order",
      links: [
        { title: "My Returns", path: '/account/my-returns' },
        { title: "My Cancellation", path: '/account/my-cancellation' },
      ]
    }, {
      heading: "Wishlist",
      links: [
        { title: 'go to wishlist', path: '/wishlist' }
      ]

    }
  ]
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
      {
        accountSideBarLinks.map((account) => (
          <div>
            <h2 className="font-semibold text-base sm:text-lg mb-2">
              {account.heading}
            </h2>
            {account.links?.map((link) => (
              <p
                onClick={() => navigate(`${link.path}`)}
                className="pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors">
                {link.title}
              </p>
            ))}
          </div>
        ))
      }
    </div>
  )
}

export default AccountSidebar