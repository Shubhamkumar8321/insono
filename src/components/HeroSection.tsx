"use client";
import Image from "next/image";

export default function HeroSection() {
  const logos = [
    "/brands/signia.svg",
    "/brands/widex.svg",
    "/brands/phonaklogo.svg",
    "/brands/oticon.svg",
    "/brands/resound.svg",
  ];

  return (
    <section className="overflow-x-hidden max-w-6xl mx-auto py-30 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-left space-y-4 min-w-0">
          {/* Doctor image on mobile */}
          

          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-snug">
            Restore Clear Hearing
          </h1>

          <div className="block justify-start lg:hidden my-4">
  

          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-xl font-light">
            Affordable Digital Hearing Aids with <br />
            <span
              className="px-2 py-1 rounded-md font-medium"
              style={{ backgroundColor: "#E6EEF8", color: "#023784" }}
            >
              Free Consultation for everyone
            </span>
          </p>
          <Image
    src="/hero.png"
    alt="Doctor"
    width={280}
    height={240}
    className="object-contain mx-0"
    priority
  />
</div>

          {/* Stats */}
          <div className="flex flex-wrap justify-start gap-6 sm:gap-10 mt-4">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#023784]">5000+</p>
              <p className="text-xs sm:text-sm text-gray-500">Experts</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#023784]">22</p>
              <p className="text-xs sm:text-sm text-gray-500">Clinics</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#023784]">30+</p>
              <p className="text-xs sm:text-sm text-gray-500">Specialties</p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="tel:+916206372640"
              className="mt-6 inline-block bg-[#023784] text-white text-base sm:text-sm font-medium px-6 py-3 rounded-md hover:bg-[#012d66] transition text-center cursor-pointer"
            >
              📞 Consult an Audiologist
            </a>
          </div>

           {/* ---- START: Logos Section (responsive, will not overflow) ---- */}
          <div className="mt-8">
            <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3">
              We are an{" "}
              <span className="text-[#023784] font-semibold">
                Officially Authorized Partner
              </span>{" "}
              of world-leading hearing aid brands
            </p>

            {/* overflow-hidden wrapper: keeps marquee from affecting layout */}
            <div className="relative overflow-hidden w-full h-[48px] sm:h-[56px] lg:h-[64px]">
              {/* Absolute marquee row — duplicates logos for seamless loop */}
              <div
                className="absolute top-0 left-0 flex items-center gap-2 sm:gap-2 lg:gap-2 animate-marquee"
                style={{ minWidth: "200%" }} // ensures row is at least double so duplicated logos line up
              >
                {logos.concat(logos).map((logo, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center justify-center px-2">
                    <img
                      src={logo}
                      alt={`Brand logo ${i}`}
                      className="h-4 sm:h-4 lg:h-4 w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Image (desktop only) */}
        <div className="hidden lg:flex lg:flex-1 justify-center min-w-0">
          <div className="relative w-full h-full max-w-[320px]">
            <Image
              src="/hero.png"
              alt="Doctor"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full lg:max-w-sm bg-white p-4 sm:p-6 rounded-lg shadow-md min-w-0">
          <h2 className="text-base sm:text-lg font-bold mb-3 text-gray-700">
            Request a Call Back
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            />
            <textarea
              placeholder="Query"
              rows={3}
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            />
            <button className="w-full bg-black text-white text-sm font-medium px-4 py-3 rounded-md hover:bg-gray-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
    