'use client'

import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Page = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
//  Form id 
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "There was a problem sending your message",
        icon: "error"
      });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 bg-[url('/img/p4.jpeg')] bg-cover bg-center">
      <form onSubmit={onSubmit} className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg m-6 text-white">
        <input type="hidden" name="access_key" value="af32f2ff-7c93-49ac-8eef-dfc026a294ff" />
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center  text-white-700 font-bold"
        >
          Contact Us
        </motion.h2>
        <div className="mt-5">
          
          <label className="block  text-white-700 font-bold">Full Name</label>
          <input
            type="text"
            className="field w-full h-12 bg-transparent border-2 border-gray-300 rounded-md p-3 text-black   mt-2"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block  text-white-700 font-bold">Email Address</label>
          <input
            type="email"
            className="field w-full h-12 bg-transparent border-2 border-gray-300 rounded-md p-3 text-gray-800 mt-2"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block  text-white-700 font-bold">Enter your Number</label>
          <input
            type="number"
            className="field w-full h-12 bg-transparent border-2 border-gray-300 rounded-md p-3 text-gray-800 mt-2"
            placeholder="Enter your number"
            name="number"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block text-white-700 font-bold">Enter your Message</label>
          <textarea
            name="message"
            className="field w-full h-52 bg-transparent border-2 border-gray-300 rounded-md p-3 text-gray-800 mt-2 resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-orange-500 text-white rounded-md shadow-lg mt-6 text-lg font-medium transition duration-500 hover:bg-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Page;
