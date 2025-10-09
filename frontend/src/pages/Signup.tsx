import SignupForm from '../components/SignupForm';
import SignupHero from '../components/SignupHero';

const Signup = () => {

  return (
    <div className='max-w-7xl mx-auto grid px-4 mt-32 grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center'>
      {/* Left Side : Hero Section for Login / Signup form */}
      <SignupHero />

      {/* Right Side :  Form for signup  */}
      <SignupForm />

    </div>

  )
}

export default Signup