import SignupForm from '../components/SignupForm';
import SignupHero from '../components/SignupHero';

const Signup = () => {

  return (
    <div className='max-w-7xl mx-auto mt-32 w-full '>
      {/* Section Header */}
      <div className=''>
        <div className='flex items-center px-8 gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Signup</p>
        </div>
      </div>

      <div className='grid px-8 grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center'>

        {/* Left Side : Hero Section for Login / Signup form */}
        <SignupHero />

        {/* Right Side :  Form for signup  */}
        <SignupForm />

      </div>

    </div>

  )
}

export default Signup