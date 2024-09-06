import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      {/* Top Section (D&D-Themed Title and Description) */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-cinzel">
              Dungeons & Dragons Character Generator
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Create your own characters and embark on thrilling D&D adventures with our character generator.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation (Simple Links with D&D Theme) */}
      <header className="text-gray-300 p-4 border-b-4 border-red-800">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo / Title */}
          <div className="text-3xl font-bold text-red-500 font-cinzel">Dungeons & Dragons</div>

          {/* Navigation Links */}
          <div className="space-x-6">
            <Link to="/" className="text-lg font-semibold hover:text-red-400 transition duration-300">
              Home
            </Link>
            <a href="#" className="text-lg font-semibold hover:text-red-400 transition duration-300">
              Link
            </a>
            <Link to="/signup" className="text-lg font-semibold hover:text-red-400 transition duration-300">
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
