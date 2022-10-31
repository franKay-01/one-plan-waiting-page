import logo from './assets/logo.png'
import vector1 from './assets/vector_1.svg'
import vector2 from './assets/vector_2.svg'
import vector3 from './assets/vector_3.svg'
import vector4 from './assets/vector_4.svg'
import Clock from "./components/Clock"
import coin1 from './assets/coin_1.svg'
import coin3 from './assets/coin_3.svg'
import useAxios from "./hooks/hook"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let deadline = "November, 1, 2022";
  const [email, setEmail] = useState("");

  const { executeReq } = useAxios();

  const changeEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };
  
  const submitEmail = async () => {
    if (email === "") {
      toast("Please fill all mandatory fields");
    } else {
      const res = await executeReq(email);
      toast('Email successfully added');
      
      setEmail("");
    }
  };
  return (
    
    <div className="main">
      <ToastContainer />

      <div>
        <img className='hidden md:hidden xl:block absolute coin-one' src={coin1}/>
        <img className='hidden md:hidden xl:block absolute coin-two' src={coin1}/>
        <img className='hidden md:hidden xl:block absolute coin-three' src={coin3}/>
        <img className='hidden md:hidden xl:block absolute coin-four' src={coin1}/>
      </div>
      <div className="bg-default-banner main-secondary">
        <div class="grid grid-cols-1 place-items-center container">
          <img className="w-32" src={logo} />
          <img className='mt-32 ml-16' src={vector1} />
          <h1 className="text-3xl lg:text-6xl w-3/4 text-center leading-none font-semibold text-default-blue">
            Begin your plan towards financial freedom
          </h1>
          <img className='mr-36' src={vector2} />
          <p className='text-xl mt-12 text-default-gray'>Get notified when we launch by dropping your email adress</p>
          <div className="grid mb-12 lg:flex">
            <div>
              <input className="mt-8 mr-4 email-box" type="text" name="email" onChange={changeEmail} placeholder="Enter you email address"/>
            </div>
            <div>
              <button onClick={() => submitEmail()} className="mt-8 button-box">
                Get Notified
              </button>
            </div>
          </div>
        </div>
        <div className='linear-container'>
          <div className='grid grid-cols-3'>
            <div className="ml-4">
              <img className='hidden md:hidden xl:block opacity-10 live-img' src={vector4}/>
            </div>
            <div className="mt-12 grid grid-cols-1 place-items-center mb-8">
              <p className='text-xl text-default-banner mb-4'>We will be live in:</p>

              <Clock deadline={deadline} />
            </div>
            <div>
              <img className='hidden md:hidden xl:block opacity-30 live-img' src={vector3}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
