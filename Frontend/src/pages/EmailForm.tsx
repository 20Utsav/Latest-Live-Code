import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(`${BASE_URL}/email/store-email`, { email });
      setMessage(response.data.message); // Show success message
      setEmail(""); // Clear input after submission
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to store email");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 bg-[#121212]">
      <div className="bg-[#202020] p-8 rounded-[20px] shadow-md text-white text-center w-full mx-auto">
        {/* Title */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold mb-4">
          Enter your email to stay connected!
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border rounded-md p-3 bg-[#D0DFEA] text-black placeholder:text-black"
            required
          />
          <button type="submit" className="bg-[#D0DFEA] text-black font-bold py-3 px-6 rounded">
            Submit
          </button>
        </form>

        {/* Success/Error Message */}
        {message && <p className="mt-4 text-green-600 text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
