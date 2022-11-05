import logo from './assets/logo.png'
import vector1 from './assets/vector_1.png'
import vector2 from './assets/vector_2.png'
import Clock from "./components/Clock"
import coin1 from './assets/coin_1.png'
import coin3 from './assets/coin_3.png'

export default function Home(){
  let deadline = "November, 14, 2022";

  return (
    <div className="main relative">
      <div className="main-secondary relative z-10">
        <img className='absolute coin-one' src={coin1}/>
        <img className='absolute coin-two' src={coin1}/>
        <img className='absolute coin-three' src={coin3}/>
        <img className='absolute coin-four' src={coin1}/>

        <div className="grid grid-cols-1 place-items-center container h-auto">
          <img className="w-32" src={logo} />
          <img className='mt-32 ml-16 arch-img' src={vector1} />
          <h1 className="text-3xl lg:text-6xl w-3/4 text-center leading-none font-semibold text-default-blue heading">
            Begin your plan towards financial freedom
          </h1>
          <img className='mr-36 arch-img' src={vector2} />
          <p className='text-xl mt-12 text-default-gray no-show'>Get notified when we launch by dropping your email adress</p>
          <div className="grid mb-12 no-show">
            <div>
              <input className="mt-8 mr-4 email-box" type="text" name="email" placeholder="Enter you email address"/>
            </div>
            <div>
              <button onClick={() => {}} className="mt-8 button-box">
                Get Notified
              </button>
            </div>
          </div>
        </div>
        <div className='linear-container'>
          <div className='grid grid-cols-1 justify-center'>
            
            <div className="mt-12 grid grid-cols-1 place-items-center mb-8">
              <p className='text-xl text-white mb-4 live-in'>We will be live in:</p>

              <Clock deadline={deadline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}