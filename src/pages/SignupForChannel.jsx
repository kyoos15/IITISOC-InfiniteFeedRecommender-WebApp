import React, { useState } from 'react';
import { UserAddIcon } from '@heroicons/react/solid';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:4000';

const ChannelSignup = () => {
    const [officialName, setOfficialName] = useState('');
    const [parentCompany, setParentCompany] = useState('');
    const [ceoEmail, setCeoEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const creatorId = null; // Replace this with actual CEO User ID from context

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${BASE_URL}/api/channel/signup`,
                {
                    details: {
                        ceo: creatorId,
                        officialName,
                        parentCompanyIfAny: parentCompany,
                    },
                    detailsAboutInsiders: {
                        ceo: ceoEmail,
                    },
                    passwordOfChannel: password,
                    bio,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            if (res.ok === false) {
                console.log("Some problem occurred while logging in: ", res);
                return;
            }

            toast.success('Channel signup successful!');
            navigate('/channel/login');
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
                    <h2 className="text-2xl font-bold mt-3 text-gray-800">Create Channel</h2>
                    <p className="text-gray-500 text-sm">Register your company or media channel</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Official Name</label>
                        <input
                            type="text"
                            value={officialName}
                            onChange={(e) => setOfficialName(e.target.value)}
                            required
                            placeholder="Registered Company Name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Parent Company (Optional)</label>
                        <input
                            type="text"
                            value={parentCompany}
                            onChange={(e) => setParentCompany(e.target.value)}
                            placeholder="Parent Company Name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CEO Email</label>
                        <input
                            type="email"
                            value={ceoEmail}
                            onChange={(e) => setCeoEmail(e.target.value)}
                            required
                            placeholder="ceo@company.com"
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about the channel"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                            rows={3}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold transition duration-200 cursor-pointer"
                    >
                        Register Channel
                    </button>


                    <div className="text-center text-sm mt-4 space-y-1">
                        <p>
                            Already registered as a <strong>channel</strong>?{' '}
                            <a href="/loginchannel" className="text-green-600 hover:underline">
                                Log in as Channel
                            </a>
                        </p>
                        <p>
                            Want to log in as a <strong>user</strong>?{' '}
                            <a href="/login" className="text-green-600 hover:underline">
                                Log in as User
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChannelSignup;
