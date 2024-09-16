import React, { useState } from 'react';
// import bcrypt from 'bcryptjs';

function Signup({ onSignupComplete }) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    const handleSignup = async(e) => {
        e.preventDefault();

        // Basic validation
        if (signupData.password !== signupData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (signupData.password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        // try {
        //     // Hash the password using bcrypt
        //     const salt = await bcrypt.genSalt(10);
        //     const hashedPassword = await bcrypt.hash(signupData.password, salt);

        //     // Move to the next step with the hashed password
            onSignupComplete({
                email: signupData.email,

                password: signupData.password, // Pass the hashed password
            });
        // } catch (error) {
        //     console.error('Error hashing password:', error);
        //     setError('Something went wrong while processing your request.');
        // }
    };

    return (
        // <form onSubmit={handleSignup}>
        //   <h2>Signup</h2>
        //   {error && <p style={{ color: 'red' }}>{error}</p>}
        //   <div>
        //     <input
        //       type="email"
        //       placeholder="Email"
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //       required
        //     />
        //   </div>
        //   <div>
        //     <input
        //       type="password"
        //       placeholder="Password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //       required
        //     />
        //   </div>
        //   <div>
        //     <input
        //       type="password"
        //       placeholder="Confirm Password"
        //       value={confirmPassword}
        //       onChange={(e) => setConfirmPassword(e.target.value)}
        //       required
        //     />
        //   </div>
        //   <button type="submit">Signup</button>
        // </form>

        <section className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-5/12 px-4 mx-auto mt-12 overflow-x-auto" style={{ height: '600px' }}>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                My account
                            </h6>
                            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Settings
                            </button>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form  onSubmit={handleSignup}>
                            <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3 ml-2">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Email address
                                    </label>
                                    <input
                                        name='email'
                                        placeholder="Email"
                                        value={signupData.email}
                                        onChange={handleChange}
                                        required
                                        type="email" 
                                        className="m-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Password
                                    </label>
                                    <input
                                        name='password'
                                        placeholder="Password"
                                        value={signupData.password}
                                        onChange={handleChange}
                                        required
                                        type="password" 
                                        className="m-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Confirm Password
                                    </label>
                                    <input
                                        name='confirmPassword'
                                        placeholder="Confirm Password"
                                        value={signupData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        type="password" 
                                        className="m-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                                <button 
                                className="m-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit">
                                Next
                            </button>
                            </div>
                </form>
            </div>
        </div>
        </div >
        </section >
    );
}

export default Signup;
