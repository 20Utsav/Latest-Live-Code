import React, { useState } from "react";
import axios from "axios";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/email/store-email", { email });
      setMessage(response.data.message); // Show success message
      setEmail(""); // Clear input after submission
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to store email");
    }
  };

  return (
    <div className="container mx-auto sm:p-8">
      <div className="bg-[#d0dfea] p-6 rounded-[20px] shadow-md text-black text-center">
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4">
          Enter your email to stay connected!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full md:w-1/3 border rounded-md p-3 bg-[#5794f9] text-black placeholder:text-black"
            required
          />
          <button type="submit" className="bg-[#5794f9] text-black font-bold py-3 px-6 rounded">
            Submit
          </button>
        </form>
        {/* {message && <p className="mt-4 text-green-600">{message}</p>} */}
      </div>
    </div>
  );
};

export default EmailForm;