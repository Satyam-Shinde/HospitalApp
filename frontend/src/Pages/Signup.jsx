import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets';



const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
 
  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //     const user = auth.currentUser;
  //     console.log("Sign-up");
  //     console.log(user)
  //     if(user){
  //       await setDoc(doc(db, "Users", user.uid),{
  //         email: user.email,
  //         name: fname,
  //         img: assets.profile_pic,
  //         phone: '0000000000',
  //         address:{
  //           line1: "XYZ",
  //           line2: "Pune",
  //         },
  //         gencer: "",
  //         dob: ""
  //       })
  //     }

  //     // redirect to login page
  //     window.location.href = '/login'

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div>
      <form className='min-h-[80vh] flex  items-center ' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>Create Account</p>
          <p>Please sign up to book an Appointment</p>

          {/* {error && <p className="text-red-500">{error}</p>} */}
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-400 rounded w-full p-2 mt-1'
              type="text"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              required
            />
          </div>

          <div className='w-full'>
            <p>Email</p>
            <input
              className='border border-zinc-400 rounded w-full p-2 mt-1'
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input
              className='border border-zinc-400 rounded w-full p-2 mt-1'
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button className='bg-primary text-white w-full py-2 rounded-md text-base' type="submit">
            Sign Up
          </button>
          <p>Already have an account? <span onClick={() => navigate('/login')} className='text-primary underline cursor-pointer'>Login Here</span> </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
