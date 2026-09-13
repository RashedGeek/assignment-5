function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
                DS
              </div>
              <span className="text-lg font-bold">Dev Stack</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-[#0F172A]">PRODUCT</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Technologies
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">COMPANY</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                About
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">LEGAL</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-pink-500"
              >
                License
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-pink-500">
              Privacy
            </a>
            <a href="#" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;