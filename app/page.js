export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <section className="z-50 pt-6 md:pt-10 flex-grow flex items-start justify-center">
        <div className="mt-20 py-6 px-4 mx-auto max-w-screen-xl text-center w-full md:py-8 lg:py-12 lg:px-12">
          {/* Responsive Heading */}
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 xs:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Interactive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-md dark:drop-shadow-lg">
              Cybersecurity
            </span>
            <br className="hidden sm:block" /> Learning Platform
          </h1>

          {/* Responsive Paragraph */}
          <p className="mb-6 text-base text-gray-500 xs:text-lg sm:px-8 md:mb-8 md:text-lg lg:text-xl xl:px-48 dark:text-gray-400">
            A Smarter Way to Train Employees in Cybersecurity
          </p>

          {/* Responsive Button */}
          <div className="flex flex-col mb-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 md:mb-8 lg:mb-12">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 transition-all duration-200 xs:py-3 xs:px-5 xs:text-base"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-4 h-4 xs:w-5 xs:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="text-xs xs:text-sm text-gray-500 absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
        Originalus darbas. R. Rybako baigiamojo darbo projektas
      </div>
    </div>
  );
}