import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in");

      // Get the logged-in user's UID
      const userId = userCredential.user.uid;

      // Fetch the user data from Firestore
      const docRef = doc(db, "Users", userId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        
        // Check if the user has the 'admin' role
        if (userData.role === 'admin') {
          console.log("Admin logged in");
          navigate('/admin'); // Redirect to the admin panel
        } else {
          console.log("User is not an admin");
          navigate('/my-profile'); // Redirect to regular user profile
        }
      } else {
        setError("User data not found");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form className='min-h-[80vh] flex items-center ' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>Login</p>
          <p>Please log in to book an Appointment</p>

          {error && <p className="text-red-500">{error}</p>}
          
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
            Login
          </button>

          <p>Don't have an account? <span onClick={() => navigate('/signup')} className='text-primary underline cursor-pointer'>Sign up Here</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
