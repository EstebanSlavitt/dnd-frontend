export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo / About Section */}
          <div className="space-y-8">
            <div className="text-3xl font-bold text-red-500 font-cinzel">Dungeons & Dragons</div>
            <p className="text-sm leading-6 text-gray-300">
              Explore the mystical world of Dungeons & Dragons. Forge your own path with custom characters and adventure
              into unknown lands.
            </p>
            <div className="flex space-x-6">
              {/* Social Icons (You can add social links here) */}
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                {/* Replace with any icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 19h8v-2H8v2zm0-5h8v-2H8v2zm0-5h8V7H8v2zm-4 8h2v-2H4v2zm0-5h2v-2H4v2zm0-5h2V7H4v2zm0-6v24h20V0H4zm18 22H6V2h16v20z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                {/* Replace with any icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 19h8v-2H8v2zm0-5h8v-2H8v2zm0-5h8V7H8v2zm-4 8h2v-2H4v2zm0-5h2v-2H4v2zm0-5h2V7H4v2zm0-6v24h20V0H4zm18 22H6V2h16v20z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white"></a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 Dungeons & Dragons, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
