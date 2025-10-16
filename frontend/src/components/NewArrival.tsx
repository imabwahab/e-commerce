import { useContext } from "react"
import { newArrivals } from "../assets/assets"
import { AppContext } from "../context/AppContext"
import Services from "./Services";

const NewArrival = () => {

  const { navigate } = useContext(AppContext);
  return (

    <div className='w-full mt-16 mb-20 px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Featured</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          New Arrival
        </h2>
      </div>

      {/* featured products */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="bg-black relative">
          <img src={newArrivals[0].image} alt={newArrivals[0].productName} className="hover:scale-105 overflow-hidden transition duration-300" />
          <div className="absolute text-white left-4 bottom-4 space-y-1 z-10">
            <h2 className="text-lg md:text-xl font-bold tracking-tight">{newArrivals[0].productName}</h2>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{newArrivals[0].description}</p>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-1 text-sm text-white font-semibold border-b-2 border-white pb-0.5 hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer mt-1">
              Shop Now
            </button>
          </div>
        </div>

        <div className=" grid grid-rows-2 gap-4 ">
          <div className="bg-black relative overflow-hidden 0">
            <img src={newArrivals[1].image} alt={newArrivals[1].productName} className="hover:scale-105 overflow-hidden transition duration-300" />
            <div className="absolute text-white left-4 bottom-4 space-y-1 z-10">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">{newArrivals[1].productName}</h2>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{newArrivals[1].description}</p>
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-1 text-sm text-white font-semibold border-b-2 border-white pb-0.5 hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer mt-1">
                Shop Now
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-4 ">
            <div className="bg-black relative">
              <img src={newArrivals[2].image} alt={newArrivals[2].productName} className="hover:scale-105 overflow-hidden transition duration-300" />
              <div className="absolute text-white left-4 bottom-4 space-y-1 z-10">
                <h2 className="text-lg md:text-xl font-bold tracking-tight">{newArrivals[2].productName}</h2>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{newArrivals[2].description}</p>
                <button
                  onClick={() => navigate('/products')}
                  className="inline-flex items-center gap-1 text-sm text-white font-semibold border-b-2 border-white pb-0.5 hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer mt-1">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="bg-black relative">
              <img src={newArrivals[3].image} alt={newArrivals[3].productName} className="hover:scale-105 overflow-hidden transition duration-300" />
              <div className="absolute text-white left-4 bottom-4 space-y-1 z-10">
                <h2 className="text-lg md:text-xl font-bold tracking-tight">{newArrivals[3].productName}</h2>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{newArrivals[3].description}</p>
                <button
                  onClick={() => navigate('/products')}
                  className="inline-flex items-center gap-1 text-sm text-white font-semibold border-b-2 border-white pb-0.5 hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer mt-1">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </div >
  )
}

export default NewArrival