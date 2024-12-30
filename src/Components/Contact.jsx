"use client";
// @flow strict
// import React from "react";
// import { isValidEmail } from "../assets/checkemail";
// import axios from "axios";
// import { useState } from "react";
// import { TbMailForward } from "react-icons/tb";
// import { toast } from "react-toastify";


 

// function Contact() {
//   const [error, setError] = useState({ email: false, required: false });
//   const [isLoading, setIsLoading] = useState(false);
//   const [userInput, setUserInput] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const checkRequired = () => {
//     if (userInput.email && userInput.message && userInput.name) {
//       setError({ ...error, required: false });
//     }
//   };

//   const handleSendMail = async (e) => {
//     e.preventDefault();

//     if (!userInput.email || !userInput.message || !userInput.name) {
//       setError({ ...error, required: true });
//       return;
//     } else if (error.email) {
//       return;
//     } else {
//       setError({ ...error, required: false });
//     };

//     try {
//       setIsLoading(true);
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_APP_URL}/api/sendmail`,
//         userInput
//       );

//       toast.success("Message sent successfully!");
//       setUserInput({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     } finally {
//       setIsLoading(false);
//     };
//   };

//   return (
//     <div className="w-full min-h-screen  text-center bg-gradient-to-b from-black to-gray-800 text-white">
       
      
//       <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">Connect with me</p>
//       <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5 justify-center space-around mx-auto mt-8">
//         <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
//         <div className="mt-6 flex flex-col gap-4">
//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Name: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="text"
//               maxLength="100"
//               required={true}
//               onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
//               onBlur={checkRequired}
//               value={userInput.name}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Email: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="email"
//               maxLength="100"
//               required={true}
//               value={userInput.email}
//               onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
//               onBlur={() => {
//                 checkRequired();
//                 setError({ ...error, email: !isValidEmail(userInput.email) });
//               }}
//             />
//             {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Message: </label>
//             <textarea
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               maxLength="500"
//               name="message"
//               required={true}
//               onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
//               onBlur={checkRequired}
//               rows="4"
//               value={userInput.message}
//             />
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             {error.required && <p className="text-sm text-red-400">
//               All fiels are required!
//             </p>}
//             <button
//               className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#164e63] to-[#0e7490] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
//               role="button"                                               
//               onClick={handleSendMail}
//               disabled={isLoading}
//             >
//               {
//                 isLoading ?
//                 <span>Sending Message...</span>:
//                 <span className="flex items-center gap-1">
//                   Send Message
//                   <TbMailForward size={20} />
//                 </span>
//               }
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// //

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen  text-center bg-gradient-to-b from-black to-gray-800 text-white p-4"
      
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            
            Connect with me
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bpjjepnb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent  text-white focus:outline-none bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-[#164e63] to-[#0e7490]   px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;