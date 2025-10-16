import { services } from '../assets/assets'

const Services = () => {
  return (
    <div className='mt-30 px-6 lg:px-20 w-full  justify-items-center grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 lg:gap-10'>
      {services.map((ser, index) => (
        <div
          key={index}
          className='group p-6 flex flex-col gap-4 items-center justify-center   transition-all duration-300 cursor-pointer min-h-[180px] min-w-[180px]'
        >
          <div className='w-20 h-20 flex items-center justify-center overflow-hidden'>
            <img
              src={ser.image}
              className='w-full h-full object-cover  transition-transform duration-300'
              alt={ser.desc}
            />
          </div>

          <h3 className='font-medium text-2xl text-gray-900 group-hover:text-red-500 transition-colors duration-300 text-center'>
            {ser.heading}
          </h3>
          <h3 className='text-base font-medium text-gray-900 group-hover:text-red-500 transition-colors duration-300 text-center'>
            {ser.desc}
          </h3>

        </div>
      ))}
    </div>
  )
}

export default Services