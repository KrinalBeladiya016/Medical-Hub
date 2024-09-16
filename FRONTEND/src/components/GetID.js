// import React from 'react';

// function GetID() {
//     return (
//         // <div class="max-w-2xl mx-auto shadow-xl p-5 mt-4">

//         //     <form>
//         //         <div class="relative z-0 mb-6 w-full group">
//         //             <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //             <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//         //         </div>
//         //         <div class="relative z-0 mb-6 w-full group">
//         //             <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //             <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//         //         </div>
//         //         <div class="relative z-0 mb-6 w-full group">
//         //             <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //             <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//         //         </div>
//         //         <div class="grid xl:grid-cols-2 xl:gap-6">
//         //             <div class="relative z-0 mb-6 w-full group">
//         //                 <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //                 <label for="floating_first_name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//         //             </div>
//         //             <div class="relative z-0 mb-6 w-full group">
//         //                 <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //                 <label for="floating_last_name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//         //             </div>
//         //         </div>
//         //         <div class="grid xl:grid-cols-2 xl:gap-6">
//         //             <div class="relative z-0 mb-6 w-full group">
//         //                 <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //                 <label for="floating_phone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//         //             </div>
//         //             <div class="relative z-0 mb-6 w-full group">
//         //                 <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         //                 <label for="floating_company" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//         //             </div>
//         //         </div>
//         //         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//         //     </form>

//         //     <p class="mt-5">Check out the original floating label form elements on <a class="text-blue-600 hover:underline"
//         //             href="#" target="_blank">Flowbite</a> and browse other similar components built with Tailwind CSS.
//         //     </p>
//         // </div>
//                 <section class=" py-1 bg-blueGray-50">
//                     <div class="w-full lg:w-8/12 px-4 mx-auto mt-6 overflow-x-auto" style={{height:'600px'}}>
//                         <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//                             <div class="rounded-t bg-white mb-0 px-6 py-6">
//                                 <div class="text-center flex justify-between">
//                                     <h6 class="text-blueGray-700 text-xl font-bold">
//                                         My account
//                                     </h6>
//                                     <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
//                                         Settings
//                                     </button>
//                                 </div>
//                             </div>
//                             <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
//                                 <form>
//                                     <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//                                         User Information
//                                     </h6>
//                                     <div class="flex flex-wrap">
//                                         <div class="w-full lg:w-6/12 px-4">
//                                             <div class="relative w-full mb-3">
//                                                 <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                     Username
//                                                 </label>
//                                                 <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" />
//                                             </div>
//                                         </div>
//                                         <div class="w-full lg:w-6/12 px-4">
//                                             <div class="relative w-full mb-3">
//                                                 <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                     Email address
//                                                 </label>
//                                                 <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
//                                             </div>
//                                         </div>
//                                         <div class="w-full lg:w-6/12 px-4">
//                                             <div class="relative w-full mb-3">
//                                                 <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                     First Name
//                                                 </label>
//                                                 <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
//                                             </div>
//                                         </div>
//                                         <div class="w-full lg:w-6/12 px-4">
//                                             <div class="relative w-full mb-3">
//                                                 <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                     Last Name
//                                                 </label>
//                                                 <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
//                                             </div>
//                                         </div>
//                                     </div>

//                                         <hr class="mt-6 border-b-1 border-blueGray-300" />

//                                         <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//                                             Contact Information
//                                         </h6>
//                                         <div class="flex flex-wrap">
//                                             <div class="w-full lg:w-12/12 px-4">
//                                                 <div class="relative w-full mb-3">
//                                                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                         Address
//                                                     </label>
//                                                     <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
//                                                 </div>
//                                             </div>
//                                             <div class="w-full lg:w-4/12 px-4">
//                                                 <div class="relative w-full mb-3">
//                                                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                         City
//                                                     </label>
//                                                     <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
//                                                 </div>
//                                             </div>
//                                             <div class="w-full lg:w-4/12 px-4">
//                                                 <div class="relative w-full mb-3">
//                                                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                         Country
//                                                     </label>
//                                                     <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
//                                                 </div>
//                                             </div>
//                                             <div class="w-full lg:w-4/12 px-4">
//                                                 <div class="relative w-full mb-3">
//                                                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                         Postal Code
//                                                     </label>
//                                                     <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <hr class="mt-6 border-b-1 border-blueGray-300" />

//                                             <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//                                                 About Me
//                                             </h6>
//                                             <div class="flex flex-wrap">
//                                                 <div class="w-full lg:w-12/12 px-4">
//                                                     <div class="relative w-full mb-3">
//                                                         <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
//                                                             About me
//                                                         </label>
//                                                         <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                             </div>
//                         </div>
//                 </section>
//                 )
// }

// export default GetID;
import React, { useState } from 'react';
import Signup from './Signup';
import UserForm from './UserForm';

function GetID() {
  const [step, setStep] = useState(1); // 1 for signup, 2 for full form
  const [userData, setUserData] = useState({});

  const handleSignupSuccess = (data) => {
    setUserData(data);
    setStep(2); // Move to the full form
  };

  return (
    <div>
      {step === 1 && <Signup onSignupComplete={handleSignupSuccess} />}
      {step === 2 && <UserForm userData={userData} />}
    </div>
  );
}

export default GetID;
