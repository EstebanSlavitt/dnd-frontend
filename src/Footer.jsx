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
            <div className="text-3xl font-bold text-white font-cinzel">Dungeons & Dragons</div>
            <p className="text-sm leading-6 text-gray-300">
              Explore the mystical world of Dungeons & Dragons. Forge your own path with custom characters and adventure
              into unknown lands.
            </p>
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
