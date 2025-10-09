import call_icon from '../assets/icons-phone.png'
import mail_icon from '../assets/icons-mail.png'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactFormData } from '../schema/contactSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("✅ Valid form data:", data);
  }

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

        {/* Left Side Info */}
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

        {/* Right Side Form to get info */}
        <div className=" rounded shadow p-8 flex flex-col gap-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <input

                  type="text"
                  placeholder='Your Name *'
                  {...register("name")}
                  className='bg-gray-100 py-2 px-4 rounded focus:outline-none w-full'
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>

                <input
                  type="email"
                  placeholder='Your Email *'
                  {...register('email')}
                  className='bg-gray-100 py-2 px-4 rounded focus:outline-none' />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder='Your Phone *'
                  {...register("phone")}
                  className='bg-gray-100 py-2 px-4 rounded focus:outline-none'
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                placeholder='your message'
                cols={30} rows={10}
                {...register("message")}
                className='bg-gray-100 py-2 px-4 rounded focus:outline-none w-full'></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <div className='flex justify-end'>
              <button className='bg-red-500 text-white py-4 px-4 rounded'>Send Message</button>
            </div>
          </form>
        </div>
      </div>



    </div>
  )
}

export default Contact