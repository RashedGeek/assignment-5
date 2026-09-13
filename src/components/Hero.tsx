import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-500 text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-medium text-white">
              Explore Technologie
            </button>

            <button className="rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Development technology stack illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;