import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" min-h-screen bg-black">
      <div className="container mx-auto px-6 md:px-10 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fuchsia-800 dark:text-white mb-4">
            Hi, I am Aiman,
            <br />
            Software Engineer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            "I'm a software engineer transitioning into AI cloud engineering,
            with a focus on mastering Next.js and agentic AI. Passionate about
            advancing in artificial intelligence, I’m eager to build innovative
            solutions in the cloud."
          </p>
          <Link href="/About">
            <button className="bg-fuchsia-900 text-white px-8 py-3 rounded-full font-medium hover:bg-fuchsia-900 transition-colors duration-300">
              View My Work
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ">
            <Image
              src="/cube.jpg"
              alt="John's portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
