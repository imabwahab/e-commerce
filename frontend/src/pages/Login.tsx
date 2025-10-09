import SignupHero from "../components/SignupHero";
import LoginForm from "../components/LoginForm";

const Login = () => {

  return (
    <div className="max-w-7xl mx-auto mt-32">

      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center px-8 gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>Login</p>
        </div>
      </div>

        <div className='grid px-8  grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center'>
        {/* Left Side */}
        <SignupHero />

        {/* Right Side */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
