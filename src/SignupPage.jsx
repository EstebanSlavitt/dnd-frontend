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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white font-cinzel mb-8 text-center">Signup</h1>
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
