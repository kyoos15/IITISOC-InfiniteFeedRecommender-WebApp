import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axiosInstance } from '../context/NewsContext'; // reuse the same axios instance

const ChannelLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/channel/login', {
                email,
                password,
            });

            if (res.ok === false) {
                console.log("Some problem occurred while logging in: ", res);
                return;
            }

            toast.success('Channel login successful!');
            navigate('/channel/dashboard'); // change route accordingly
        } catch (err) {
            console.error(err);
            toast.error(err?.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-300 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                        <LockClosedIcon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mt-3 text-gray-800">Channel Sign In</h2>
                    <p className="text-gray-500 text-sm">Please sign in to your channel account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Channel Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="channel@example.com"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <div className="text-right text-sm mt-1">
                            <a href="#" className="text-indigo-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-200 cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have a channel account?{' '}
                    <Link to="/channel/signup" className="text-indigo-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ChannelLogin;
