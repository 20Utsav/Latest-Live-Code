import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import EmailForm from '../pages/EmailForm';
import aboutBg from "../../img/about_bg.jpg";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    enquiry: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    let valid = true;
    let newErrors = { firstName: "", lastName: "", email: "", telephone: "", enquiry: "" };

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters";
      valid = false;
    }
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters";
      valid = false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!/^\d{10}$/.test(formData.telephone)) {
      newErrors.telephone = "Telephone must be a 10-digit number";
      valid = false;
    }
    if (formData.enquiry.trim().length < 10) {
      newErrors.enquiry = "Enquiry must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setMessage(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        enquiry: "",
      });
      setErrors({ firstName: "", lastName: "", email: "", telephone: "", enquiry: "" });
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="py-8">
      {/* Header Section */}
      <div
        className="relative w-full h-[250px] bg-cover bg-center opacity-80 flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-6 md:px-12">
          <h1 className="text-4xl font-bold">ConvergeSol Overview</h1>
          <p className="mt-2 text-lg"><span className="font-medium">Home</span> / Contact</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto pt-10 pb-6 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 p-6 bg-[#5794f9] text-white rounded-tl-[40px] md:rounded-bl-[40px] shadow-md">
            <h2 className="text-[28px] md:text-[34px] font-bold">Quick Contact</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-2xl" />
                <h3 className="text-lg font-bold">Email Here</h3>
              </div>
              <p className="ml-8 text-base">sujanbutani30@gmail.com</p>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-2xl" />
                <h3 className="text-lg font-bold">Call Here</h3>
              </div>
              <p className="ml-8 text-base">+91 9021734357</p>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-2xl" />
                <h3 className="text-lg font-bold">Office Hours</h3>
              </div>
              <p className="ml-8 text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl" />
                <h3 className="text-lg font-bold">Location</h3>
              </div>
              <p className="ml-8 text-base">123, Business Street, Tech City, Country 456789</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-br-[40px] rounded-tr-[40px]">
            <h2 className="text-[28px] md:text-[34px] font-bold mb-4">Get In Touch!</h2>

            {message && <p className="text-green-600 font-medium">{message}</p>}
            {error && <p className="text-red-600 font-medium">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleChange}
                    placeholder="First Name" className="w-full border rounded-md p-3" required />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className="w-full">
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleChange}
                    placeholder="Last Name" className="w-full border rounded-md p-3" required />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <input type="email" id="email" value={formData.email} onChange={handleChange}
                  placeholder="Email" className="w-full border rounded-md p-3" required />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <input type="tel" id="telephone" value={formData.telephone} onChange={handleChange}
                  placeholder="Telephone" className="w-full border rounded-md p-3" required />
                {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}
              </div>
              <div>
                <textarea id="enquiry" value={formData.enquiry} onChange={handleChange}
                  placeholder="Describe your Enquiry" className="w-full border rounded-md p-3 h-28" required />
                {errors.enquiry && <p className="text-red-500 text-sm">{errors.enquiry}</p>}
              </div>
              <button type="submit" className="bg-[#5794f9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <EmailForm />
    </div>
  );
};

export default Contact;
