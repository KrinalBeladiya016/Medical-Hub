import React, { useState, useEffect } from 'react';
// const getCSRFToken = () => {
//   const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
//   return csrfToken;
// };

// const getCSRFTokenFromServer = async () => {
//   try {
//       const response = await fetch('http://127.0.0.1:8000/api/csrf_token/');
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       document.cookie = `csrftoken=${data.csrfToken}; path=/`;  // Store CSRF token in cookies
//   } catch (error) {
//       console.error('Failed to fetch CSRF token:', error);
//   }
// };


function UserForm({ userData }) {
  
  const [formData, setFormData] = useState({
    name: '',
    contact:'',
    dob:'',
    aadhar_no:'',
    gender:'',
    blood_group:'',
    chronic_conditions:'',
    profile:null,
    report:null,
    address: '',
    city:'',
    state:'',
    pincode:'',
    email: userData.email,
    password: userData.password,
    // Add more fields as necessary
  });

  // useEffect(() => {
  //   getCSRFTokenFromServer(); // Fetch CSRF token when the component mounts
  // }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
      if (files) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, e.g., send data to the Django backend
  //   console.log('Form submitted:', { ...userData, ...formData });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const csrfToken = getCSRFTokenFromServer();
    // if (!csrfToken) {
    //     alert("CSRF token missing. Please refresh the page.");
    //     return;
    // }
    const combinedData = new FormData();
    for (const key in formData) {
      combinedData.append(key, formData[key]);
    }
    for (const pair of combinedData.entries()) {
      console.log(`${pair[0]}: ${pair[1] instanceof File ? pair[1].name : pair[1]}`);
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/getid/', {
        method: 'POST',
        // headers:{
        //   'X-CSRFToken': csrfToken,
        // },
        body: combinedData,
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);  // Profile submitted successfully
      } else {
        const errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
        alert(`Error: ${errorMessage}`);   // Display the error message returned from the server
      }

    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Complete Your Profile</h2>
    //   <div>
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="text"
    //       name="address"
    //       placeholder="Address"
    //       value={formData.address}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>

    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 overflow-x-auto" style={{ height: '600px' }}>
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
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit} method='post'>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Profile Picture
                    </label>
                    <input
                      name="profile"
                      placeholder="Upload Image"
                      onChange={handleChange}
                      required
                      type="file" 
                      accept="image/png" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Username
                    </label>
                    <input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Email address
                    </label>
                    <input 
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                      type="email" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    contact
                    </label>
                    <input
                      name="contact"
                      placeholder="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      type="number" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    aadhar_no
                    </label>
                    <input
                      name="aadhar_no"
                      placeholder="aadhar_no"
                      value={formData.aadhar_no}
                      onChange={handleChange}
                      required
                      type="number" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      DOB
                    </label>
                    <input
                      name="dob"
                      placeholder="DOB"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      type="date" 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Gender
                    </label>
                    <input
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      type="radio" 
                      checked={formData.gender === 'Male'}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />Male
                    <input
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      type="radio" 
                      checked={formData.gender === 'Female'}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />Female
                  </div>
                </div>
                {/* <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      First Name
                    </label>
                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Last Name
                    </label>
                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
                  </div>
              </div> */}
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Address
                    </label>
                    <input 
                    name="address"
                    placeholder="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    type="text" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      City
                    </label>
                    <input 
                    type="text" 
                    required
                    name='city'
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formData.city}
                    onChange={handleChange}
                     />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      state
                    </label>
                    <input 
                    type="text" 
                    name="state"
                    placeholder="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Postal Code
                    </label>
                    <input 
                    name="pincode"
                    placeholder="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    type="text" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Medical Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      chronic_conditions
                    </label>
                    <textarea 
                    type="text" 
                    name="chronic_conditions"
                    placeholder="chronic_conditions"
                    value={formData.chronic_conditions}
                    onChange={handleChange}
                    required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.
                    </textarea>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      blood_group
                    </label>
                      <select id="blood_group" 
                      name='blood_group'
                      value={formData.blood_group} 
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="">Select Blood Group</option>
                      <option value="O">O</option>
                      <option value="O+">O+</option>
                      <option value="A">A</option>
                      <option value="A+">A+</option>
                      <option value="B">B</option>
                      <option value="B+">B+</option>
                      <option value="AB">AB</option>
                      <option value="AB+">AB+</option>
                      </select>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    report
                    </label>
                    <input
                      name="report"
                      placeholder="report "
                      onChange={handleChange}
                      required
                      type="file" 
                      accept='.pdf'
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
              </div>
              <button 
                  className="m-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit">
                  Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
