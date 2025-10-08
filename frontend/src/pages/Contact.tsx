import call_icon from '../assets/icons-phone.png'
import mail_icon from '../assets/icons-mail.png'

const Contact = () => {
  return (
    <div className='w-full mt-32  max-w-7xl mx-auto'>
      {/* Section Header */}
      <div className='py-8 '>
        <div className='flex items-center px-8 gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Contact</p>
        </div>
      </div>

      <div className=" grid gap-8 p-8 grid-cols-1 md:grid-cols-[1fr_2fr]" >

        <div className=" rounded shadow flex flex-col p-6">
          <div className='py-6' >
            <div className='flex flex-row items-center gap-8'>
              <img src={call_icon} alt="call-icon" />
              <span className='text-xl'>Call To Us</span>
            </div>
            <p className='py-2'>We are available 24/7, 7 days a week.</p>
            <p className='py-2'>Phone: +89 932 6454212</p>
          </div>
          <hr className='w-full h-4  border-t-2' />
          <div className='py-6' >
            <div className='flex flex-row items-center gap-8'>
              <img src={mail_icon} alt="mail-icon" />
              <span className='text-xl'>Write to US</span>
            </div>
            <p className='py-2'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='py-2'>Emails: customer@exclusive.com</p>
            <p className='py-2'>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className=" rounded shadow p-8 flex flex-col gap-8">
          <div className='grid grid-cols-3 gap-4'>
            <input className='bg-gray-100 py-2 px-4 rounded focus:outline-none' type="text" placeholder='Your Name *' />
            <input className='bg-gray-100 py-2 px-4 rounded focus:outline-none' type="email" placeholder='Your Email *' />
            <input className='bg-gray-100 py-2 px-4 rounded focus:outline-none' type="text" placeholder='Your Phone *' />
          </div>
          <div>
          <textarea className='bg-gray-100 py-2 px-4 rounded focus:outline-none w-full' placeholder='your message' cols={30} rows={10} ></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='bg-red-500 text-white py-4 px-4 rounded'>Send Message</button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Contact