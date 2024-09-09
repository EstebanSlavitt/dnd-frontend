import axios from "axios";
import { useState } from "react";

// Retrieve JWT token if present
const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Redirect or handle the next step after login
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start">
      {/* Large Image Section */}
      <div className="relative w-full h-64 sm:h-96 overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/07/13/28/dice-7307194_1280.jpg"
          alt="D&D Dice"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-2 text-center">
            Welcome Back to Your Adventure!
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Log in to continue your epic quest in the world of Dungeons & Dragons!
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 mt-8 w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white font-cinzel mb-8 text-center">Login</h2>
        <ul className="mb-4">
          {errors.map((error) => (
            <li key={error} className="text-red-500 text-sm">
              {error}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
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
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
