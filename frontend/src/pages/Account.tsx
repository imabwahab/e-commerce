import React, { useState } from 'react'

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingstone, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    // Validate passwords if user is trying to change password
    if (formData.newPassword || formData.confirmNewPassword) {
      if (!formData.currentPassword) {
        alert('Please enter your current password')
        return
      }
      if (formData.newPassword !== formData.confirmNewPassword) {
        alert('New passwords do not match')
        return
      }
      if (formData.newPassword.length < 6) {
        alert('New password must be at least 6 characters')
        return
      }
    }

    // Log all form values
    console.log('Form submitted with values:', formData)

    // Show success message
    alert('Changes saved successfully!')

    // Clear password fields after successful submission
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }))
  }

  const handleCancel = () => {
    // Reset form to initial values
    setFormData({
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel1111@gmail.com',
      address: 'Kingstone, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    })
  }

  return (
    <div className='w-full mt-32 sm:mt-16 lg:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='py-4 sm:py-6 lg:py-8 flex flex-row justify-between items-center  gap-4  px-4 sm:px-6 lg:px-8 '>
        <div className='flex items-center gap-3'>
          <span className='w-3 sm:w-4 h-8 sm:h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-lg sm:text-xl'>Accounts</p>
        </div>

        <p className='text-sm sm:text-base'>Welcome! <span className='text-red-500 font-medium'>Md Rime!</span></p>
      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 rounded-b-lg'>
        {/* Left Side - Navigation */}
        <div className=' flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 '>
          <div>
            <h2 className='font-semibold text-base sm:text-lg mb-2'>Manage My Account</h2>
            <p className='pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors'>My Profile</p>
            <p className='pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors'>Address Book</p>
            <p className='pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors'>My Payment Options</p>
          </div>

          <div>
            <h2 className='font-semibold text-base sm:text-lg mb-2'>My Orders</h2>
            <p className='pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors'>My Returns</p>
            <p className='pl-6 sm:pl-8 text-gray-400 text-sm sm:text-base py-1 hover:text-gray-600 cursor-pointer transition-colors'>My Cancellations</p>
          </div>

          <div>
            <h2 className='font-semibold text-base sm:text-lg hover:text-gray-700 cursor-pointer transition-colors'>WishList</h2>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=' flex flex-col gap-4 sm:gap-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 rounded-lg'>
          <h3 className=' font-semibold text-lg sm:text-xl'>Edit Your Profile</h3>

          {/* Name Fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-2 px-4 rounded-lg'>
            <div className='flex flex-col'>
              <label className='py-2 font-medium text-sm sm:text-base' htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Md'
                className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              />
            </div>

            <div className='flex flex-col'>
              <label className='py-2 font-medium text-sm sm:text-base' htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Rimel'
                className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              />
            </div>
          </div>

          {/* Email and Address Fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8  py-2 px-4  rounded-lg'>
            <div className='flex flex-col'>
              <label className='py-2 font-medium text-sm sm:text-base' htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='rimel1111@gmail.com'
                className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              />
            </div>

            <div className='flex flex-col'>
              <label className='py-2 font-medium text-sm sm:text-base' htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder='Kingstone, 5236, United State'
                className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className='flex flex-col gap-3 sm:gap-4 py-2 px-4  rounded-lg'>
            <h3 className='py-2 font-semibold text-base sm:text-lg'>Password Changes</h3>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              placeholder='Current Password'
            />
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              placeholder='New Password'
            />
            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className='px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base'
              placeholder='Confirm New Password'
            />
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-2'>
            <button
              type="button"
              onClick={handleCancel}
              className='w-full sm:w-auto px-6 py-2 sm:py-3 text-gray-700 hover:text-black font-medium border border-gray-400 rounded hover:bg-gray-100 transition-colors text-sm sm:text-base'
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className='w-full sm:w-auto px-6 py-2 sm:py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-medium text-sm sm:text-base'
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account