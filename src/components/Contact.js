import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh_-_152px)] flex flex-col justify-start items-center gap-14">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="flex flex-col items-center">
        <input
          className="text-sm p-3 rounded-md block mb-4 w-64 outline-none border border-orange-400"
          type="text"
          placeholder="email"
        />
        <input
          type="text"
          className="text-sm p-3 rounded-md block mb-4 w-64 outline-none border border-orange-400"
          placeholder="message"
        />
        <button className=" bg-orange-400 text-white w-24 px-6 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
