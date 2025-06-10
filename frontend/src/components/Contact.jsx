import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-purple-400 mt-2 text-lg">Get in Touch</p>
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Let's Discuss Your Project
          </h3>
          <p className="text-gray-300 mb-6">
            I'd love to hear about your project and how I can help. Feel free to
            reach out through any of the following contact methods or by using
            the form.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 mt-10">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-purple-600 transition">
              <FaEnvelope
                className="text-white bg-purple-600 p-2 rounded-md shadow-md mt-1"
                size={32}
              />
              <div>
                <h4 className="text-white font-semibold text-base">Email</h4>
                <p className="text-white text-sm">rohitkalgude860@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-purple-600 transition">
              <FaPhoneAlt
                className="text-white bg-purple-600 p-2 rounded-md shadow-md mt-1"
                size={32}
              />
              <div>
                <h4 className="text-white font-semibold text-base">Phone</h4>
                <p className="text-white text-sm">+91 8154896807</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-purple-600 transition">
              <FaLinkedin
                className="text-white bg-purple-600 p-2 rounded-md shadow-md mt-1"
                size={32}
              />
              <div>
                <h4 className="text-white font-semibold text-base">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white text-sm"
                >
                  linkedin.com/in/rohitkalgude
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-purple-600 transition">
              <FaGithub
                className="text-white bg-purple-600 p-2 rounded-md shadow-md mt-1"
                size={32}
              />
              <div>
                <h4 className="text-white font-semibold text-base">GitHub</h4>
                <a
                  href="https://github.com/Rohitkalgude/Rohit-Kalgude.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white text-sm"
                >
                  github.com/rohitkalgude007
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10 bg-transparent border-2 border-white/10 rounded-2xl shadow-inner">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-white text-sm font-medium tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-white text-sm font-medium tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-white text-sm font-medium tracking-wide">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 border border-white/10 text-white font-semibold hover:bg-white/5 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
