import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function PatientEntry() {
  const [formData, setFormData] = useState({
    patient_id: '',
    tests_ordered: '', // Add this field
    doctor_name: '',
    symptoms: '',
    diagnosis: '',
    tests_ordered: '',
    test_results: '',
    doctor_notes: '',
  });
  
  const navigate = useNavigate(); // Hook for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patient_history/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/dashboard");  // Redirect on success
      } else {
        const errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
        alert(`Error: ${errorMessage}`);   // Display error message
      }

    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-1 bg-light-gray">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 overflow-x-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-teal-500 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-white text-xl font-bold">Patient History</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Patient Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="patient_id">
                      Patient ID
                    </label>
                    <input
                      name="patient_id"
                      placeholder="Patient ID"
                      value={formData.patient_id}
                      onChange={handleChange}
                      required
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                {/* <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="visit_date">
                    tests_ordered
                    </label>
                    <input
                      name="tests_ordered"
                      placeholder="tests_ordered"
                      value={formData.tests_ordered}
                      onChange={handleChange}
                      required
                      type="text" // Change to date input type
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div> */}
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="doctor_name">
                      Doctor Name
                    </label>
                    <input
                      name="doctor_name"
                      placeholder="Doctor Name"
                      value={formData.doctor_name}
                      onChange={handleChange}
                      required
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="symptoms">
                      Symptoms
                    </label>
                    <input
                      name="symptoms"
                      placeholder="Symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      required
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="diagnosis">
                      Diagnosis
                    </label>
                    <input
                      name="diagnosis"
                      placeholder="Diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      required
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="tests_ordered">
                      Tests Ordered
                    </label>
                    <input
                      name="tests_ordered"
                      placeholder="Tests Ordered"
                      value={formData.tests_ordered}
                      onChange={handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="test_results">
                      Test Results
                    </label>
                    <input
                      name="test_results"
                      placeholder="Test Results"
                      value={formData.test_results}
                      onChange={handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="doctor_notes">
                      Doctor Notes
                    </label>
                    <textarea
                      name="doctor_notes"
                      placeholder="Additional Notes"
                      value={formData.doctor_notes}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientEntry;
