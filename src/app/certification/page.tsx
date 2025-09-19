// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* pt-32 to account for header space */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center sm:text-left">
        About Us
      </h1>

      <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
        Welcome to our company! We are dedicated to providing the best services
        to our clients. Our team is passionate, skilled, and committed to
        excellence.
      </p>

      <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
        Our mission is to deliver high-quality solutions that help businesses
        grow and succeed.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We believe in innovation, collaboration, and continuous improvement.
        Every project we undertake is handled with utmost professionalism and
        care to ensure client satisfaction.
      </p>
    </div>
  );
}
