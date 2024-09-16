import React, { useState, useEffect } from 'react';

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
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <section className="py-1 bg-light-gray">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 overflow-x-auto" style={{ height: '600px' }}>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-teal-500 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-white text-xl font-bold">
                My account
              </h6>
              <button className="bg-gold text-white active:bg-gold-dark font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Settings
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit} method='post'>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="profile">
                      Profile Picture
                    </label>
                    <input
                      name="profile"
                      placeholder="Upload Image"
                      onChange={handleChange}
                      required
                      type="file" 
                      accept="image/png" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="name">
                      Username
                    </label>
                    <input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="email">
                      Email address
                    </label>
                    <input 
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                      type="email" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      name="contact"
                      placeholder="Contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      type="number" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="aadhar_no">
                      Aadhar No
                    </label>
                    <input
                      name="aadhar_no"
                      placeholder="Aadhar No"
                      value={formData.aadhar_no}
                      onChange={handleChange}
                      required
                      type="number" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="dob">
                      DOB
                    </label>
                    <input
                      name="dob"
                      placeholder="DOB"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      type="date" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="gender">
                      Gender
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          name="gender"
                          value="Male"
                          onChange={handleChange}
                          type="radio" 
                          checked={formData.gender === 'Male'}
                          className="form-radio text-teal-500"
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                          type="radio" 
                          checked={formData.gender === 'Female'}
                          className="form-radio text-teal-500"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="address">
                      Address
                    </label>
                    <input
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="city">
                      City
                    </label>
                    <input
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="state">
                      State
                    </label>
                    <input
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="pincode">
                      Pincode
                    </label>
                    <input
                      name="pincode"
                      placeholder="Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      type="number" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Additional Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="blood_group">
                      Blood Group
                    </label>
                    <input
                      name="blood_group"
                      placeholder="Blood Group"
                      value={formData.blood_group}
                      onChange={handleChange}
                      required
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="chronic_conditions">
                      Chronic Conditions
                    </label>
                    <input
                      name="chronic_conditions"
                      placeholder="Chronic Conditions"
                      value={formData.chronic_conditions}
                      onChange={handleChange}
                      type="text" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Upload Documents
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="report">
                      Medical Report
                    </label>
                    <input
                      name="report"
                      placeholder="Upload Report"
                      onChange={handleChange}
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-teal-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
