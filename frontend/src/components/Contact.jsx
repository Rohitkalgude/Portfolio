import React from "react";
import contactImage from "../assets/contact.png";

function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-gray-300 mt-2 text-lg">I'd love to hear from you!</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email:</label>
            <input
              type="email"
              placeholder="Your Email ID"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message:</label>
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition font-semibold"
          >
            SUBMIT
          </button>
        </form>

        <div className="hidden md:block justify-center">
          <img src={contactImage} alt="Contact" className="min-w-96" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
