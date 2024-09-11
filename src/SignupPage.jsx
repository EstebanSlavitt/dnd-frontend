import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Dragon Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/04/08/04/41/the-chinese-dragon-712149_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>

      {/* First Foreground Image (AI Art) */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 z-10">
        <img
          src="https://cdn.pixabay.com/photo/2023/04/02/00/49/ai-generated-7893313_1280.jpg"
          alt="AI Generated Art"
          className="w-full h-full object-cover opacity-80 transform rotate-6 scale-90 transition duration-500 hover:scale-100 hover:rotate-0"
        />
      </div>

      {/* Second Foreground Image (Fantasy Art) */}
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 z-10">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_1280.jpg"
          alt="Fantasy Art"
          className="w-full h-full object-cover opacity-80 transform -rotate-6 scale-90 transition duration-500 hover:scale-105 hover:rotate-0"
        />
      </div>

      {/* Signup Form */}
      <div className="relative z-20 max-w-md w-full bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white font-cinzel mb-8 text-center">Signup</h1>
        <ul className="mb-4">
          {errors.map((error) => (
            <li key={error} className="text-red-500 text-sm">
              {error}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-300">
              Password Confirmation
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
