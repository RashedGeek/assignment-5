import hamburger from "../assets/hamburger.png";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
  type="button"
  className="md:hidden"
>
  <img
    src={hamburger}
    alt="Menu"
    className="h-6 w-6"
  />
</button>

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
            DS
          </div>

          <span className="font-bold text-lg">
            Dev Stack
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-pink-500">
            Home
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            About
          </a>

          <a href="#" className="text-gray-600 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 cursor-pointer">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar