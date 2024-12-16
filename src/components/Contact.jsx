import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you for reaching out!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section id="contact" className="p-10 bg-gradient-to-t from-gray-900 to-gray-800 text-gray-200">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-5">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 rounded transition duration-300"
        >
          Submit
        </button>
        {message && (
          <p className="text-teal-400 text-center mt-3">{message}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
