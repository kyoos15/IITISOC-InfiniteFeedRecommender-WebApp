import React, { useState } from 'react';
import { UserAddIcon } from '@heroicons/react/solid';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:4000';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/api/user/signup`,
        {
          fullName,
          userName,
          occupation,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      toast.success('Signup successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-500 p-3 rounded-full shadow-lg">
            <UserAddIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mt-3 text-gray-800">Create Account</h2>
          <p className="text-gray-500 text-sm">Join us by filling the form below</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Unique username"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              placeholder="What do you do?"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>

          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 hover:underline">
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;







// ------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { UserAddIcon } from '@heroicons/react/solid';
// import { useAuthStore } from '../context/AuthContext'; 
// // useAuthStore ko replace kar dena harsh 

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const {signup} = useAuthStore();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     const data = {
//         name, email, password
//     }

//     signup(data);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-200 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-green-500 p-3 rounded-full shadow-lg">
//             <UserAddIcon className="h-6 w-6 text-white" />
//           </div>
//           <h2 className="text-2xl font-bold mt-3 text-gray-800">Create Account</h2>
//           <p className="text-gray-500 text-sm">Join us by filling the form below</p>
//         </div>

//         <form onSubmit={handleSignup} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="••••••••"
//               className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold transition duration-200 cursor-pointer"
//           >
//             Sign Up
//           </button>

//           <div className="text-center text-sm mt-4">
//             Already have an account?{' '}
//             <a href="/login" className="text-green-600 hover:underline">
//               Log in
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;