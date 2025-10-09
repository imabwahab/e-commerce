import SignupHero from "../components/SignupHero";
import LoginForm from "../components/LoginForm";

const Login = () => {

  return (
    <div className="max-w-7xl mt-32 px-4 mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
      {/* Left Side */}
      <SignupHero />

      {/* Right Side */}
      <LoginForm />
    </div>
  );
};

export default Login;
