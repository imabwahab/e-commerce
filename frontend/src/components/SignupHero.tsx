
import login_hero from '../assets/login_hero.png'

const SignupHero = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-2xl animate-fade-in'>
        <img
          src={login_hero}
          alt="login hero"
          className='w-full h-auto object-cover drop-shadow-2xl'
        />
      </div>
    </div>
  )
}

export default SignupHero