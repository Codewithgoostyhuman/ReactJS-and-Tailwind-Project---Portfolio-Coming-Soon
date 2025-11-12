import React from "react";
import { useState } from "react";
const NotifyMe = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data.email && data.message) {
      setSubmitted(true);
    }
  }

  if (!submitted) {
    return (
      <div className=" bg-transparent w-dvw h-fit justify-center items-center flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 justify-center items-center p-8  h-fit w-fit  rounded-4xl transition-all duration-500"
        >
          <span className="text-3xl font-bold animate-pulse text-fuchsia-100">Reach Me</span>
          <input
            type="email"
            className="bg-white font-gray-800 lg:p-4 md:p-4 sm:p-3 lg:w-80 md:w-70 sm:w-60 h-fit border-2 border-b-blue-300 border-l-fuchsia-300 border-r-blue-300 border-t-fuchsia-300 rounded-3xl"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <input
            name="message"
            placeholder="Leave a message..."
            rows="4"
            className="bg-white font-gray-800 lg:p-4 md:p-4 sm:p-3 lg:w-80 md:w-70 sm:w-60 h-fit border-2 border-b-blue-300 border-l-fuchsia-300 border-r-blue-300 border-t-fuchsia-300 rounded-3xl"
            value={data.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-transparent text-white font-bold border-2 border-b-blue-300 border-l-fuchsia-300 border-r-blue-300 border-t-fuchsia-300 pl-4 pr-4 p-2 rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all duration-1000">
            Notify Me
          </button>
        </form>
      </div>
    );
  }
  if (submitted) {
    return(
    <div className=" bg-transparent w-dvw h-fit text- flex flex-col wrap-break-word items-center p-6 ">
      <p className="lg:text-3xl md:text-2xl sm:text-xl text-white animate-bounce">Thanks! I’ll be in touch soon.</p>
    </div>
    )
  }
};

export default NotifyMe;
