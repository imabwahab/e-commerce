import side_image from '../assets/about-side-image.png'
import { stats, teamMember } from '../assets/assets'
import ProfileCardServices from '../components/ProfileCardServices'
import Services from '../components/Services'

const About = () => {
  return (
    <div className=' max-w-7xl mx-auto mt-32 px-4'>
      <HeadCrumb />
      <Info />
      <Categories />
      <ProfileCards />
      <Services />
    </div>
  )
}

export default About

{/* HeadCrumb Section */ }
const HeadCrumb = () => {
  return (
    <div className='mb-8'>
      <div className='flex items-center gap-3 pl-4 mb-2'>
        <span className='w-4 h-10 bg-red-500 rounded'></span>
        <p className='text-red-500 font-semibold text-base'>About</p>
      </div>
    </div>
  )
}

{/* Info Section */ }
const Info = () => {
  return (
    <div className=' bg-white grid grid-cols-1 md:grid-cols-2 px-4 md:px-0'>
      <div className=' w-full flex flex-col gap-8 px-2 md:px-10 py-10 md:py-30'>
        <h1 className='font-bold text-5xl '>Our Story</h1>
        <p className=''>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

        <p className=''>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <div className=' rounded-lg overflow-hidden w-full'>
        <img src={side_image} alt="" />
      </div>
    </div>
  )
}

{/* Categories Grid */ }
const Categories = () => {
  return (
    < div className='mt-30 bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10' >
      {
        stats.map((ser, index) => (

          <div
            key={index}
            className='group border-2 border-gray-200 rounded-lg p-2 md:p-6 flex flex-col gap-4 items-center justify-center hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[180px] min-w-[180px]'
          >
            <div className='w-12 h-12 md:w-20  md:h-20 flex items-center justify-center overflow-hidden'>
              <img
                src={ser.image}
                className='w-full h-full object-cover  transition-transform duration-300'
                alt={ser.desc}
              />
            </div>
            <h3 className=' font-semibold text-2xl text-gray-900 group-hover:text-red-500 transition-colors duration-300 text-center'>
              {ser.number}K
            </h3>
            <h3 className='text-base font-medium text-gray-900 group-hover:text-red-500 transition-colors duration-300 text-center'>
              {ser.desc}
            </h3>

          </div>
        ))
      }
    </div >

  )
}

{/* Profile Cards */ }
const ProfileCards = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-30 py-10">
      {
        teamMember.map((member) => (
          < ProfileCardServices member={member} />
        ))
      }
    </div>
  )
}