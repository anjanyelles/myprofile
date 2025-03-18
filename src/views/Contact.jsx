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
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Your message has been sent successfully!");
        console.log(data);
        formEle.reset();
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center">Contact</h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you just want to say hello, send me a message!
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form className="form" onSubmit={(e) => Submit(e)}>
              <div className="my-6">
                <label className="block mb-2 text-lg font-medium">Name</label>
                <input
                  type="text"
                  name="Name"
                  className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">Email</label>
                <input
                  type="email"
                  name="Email"
                  className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">Message</label>
                <textarea
                  name="Message"
                  className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full h-28"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Email</h1>
            <a className="mb-12 mt-4 font-semibold text-blue-700 uppercase">
              anjanyelles@gmail.com
              <br></br>
              8790439333
            </a>
            <h1 className="text-3xl font-bold">Address</h1>
            <p className="mt-4 mb-12 font-semibold text-blue-700 uppercase">
              KPHP 7 Phase, HYD<br /> India
            </p>
            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a
                  key={index}
                  href={el.link}
                  className="ml-6 cursor-pointer mt-4 hover:scale-125 flex flex-col items-center"
                >
                  <img alt={el.name} src={el.url} className="w-8 h-8" />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
        }
      >
        Made with <div className="text-red-500 px-2 text-2xl">&#10084;</div> by Anjan Yelle
      </div>
    </div>
  );
};

export default Contact;
