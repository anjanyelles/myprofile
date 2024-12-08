import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwkS4MNFd_l-q2ARHJeQ-UyIiYRHKn0HgplvOuTJ0lpsQYl8KCLAVCp_qazWTWv-TSc/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("")
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
          <form className="form" onSubmit={(e) => Submit(e)}>
  <div class="my-6">
    <label for="name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Name</label>
    <input
      type="text"
      // id="name"
      name="Name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Enter your name"

      required
    />
  </div>
  <div class="mb-4">
    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
    <input
      type="email"
      name="Email" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Enter your email"
      
      required
    />
  </div>
  <div class="mb-4">
    <label for="message" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Message</label>
    <textarea
     name="Message" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Enter your message"

      required
    ></textarea>
  </div>
  <button type="submit" class="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
    Submit
  </button>
</form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              anjanyelles@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
             KPHP 7 phase, HYD
              <br />
              India
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Anjan Yelle
      </div>
    </div>
  );
};

export default Contact;
