"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated testimonial data
const testi = [
  {
    name: "Bhagirathi Mistry",
    description:
      "I can't express how grateful I am for Insono hearing aids. My son's improved hearing has made a significant difference in his confidence and social interactions.",
    image: "/images/testi/bhagirathi-mistry.jpg",
  },
  {
    name: "Rajeev Varadarajan",
    description:
      "I purchased hearing Aids for my friend, and the outcomes are incredible. The enhanced clarity and comfort have made a significant positive impact on her daily life.",
    image: "/images/testi/rajeev-varadarajan.jpg",
  },
  {
    name: "Jagdish Arya",
    description:
      "Insono has truly exceeded our expectations. The hearing aids I purchased for my wife have not only improved her hearing but also seamlessly integrated into her daily routine.",
    image: "/images/testi/jagdish-arya.jpg",
  },
  {
    name: "Bhagirathi Mistry",
    description:
      "I can't express how grateful I am for Insono hearing aids. My son's improved hearing has made a significant difference in his confidence and social interactions.",
    image: "/images/testi/bhagirathi-mistry.jpg",
  },
  {
    name: "Rajeev Varadarajan",
    description:
      "I purchased hearing Aids for my friend, and the outcomes are incredible. The enhanced clarity and comfort have made a significant positive impact on her daily life.",
    image: "/images/testi/rajeev-varadarajan.jpg",
  },
  {
    name: "Jagdish Arya",
    description:
      "Insono has truly exceeded our expectations. The hearing aids I purchased for my wife have not only improved her hearing but also seamlessly integrated into her daily routine.",
    image: "/images/testi/jagdish-arya.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  centerMode: false, // set true if you want central alignment
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const testimonials = [
  { name: "Mrs Manju Singh", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  {
    name: "Happy Customer - Phonak Kit Audeo",
    url: "https://www.youtube.com/embed/2VJ0KxRWmJ4",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
  { name: "Mrs Manju Singh", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  {
    name: "Happy Customer - Phonak Kit Audeo",
    url: "https://www.youtube.com/embed/2VJ0KxRWmJ4",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
  { name: "Mrs Manju Singh", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  {
    name: "Happy Customer - Phonak Kit Audeo",
    url: "https://www.youtube.com/embed/2VJ0KxRWmJ4",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
  {
    name: "Happy Customer - Signia Kit Styletto",
    url: "https://www.youtube.com/embed/3t2RqwYbM8E",
  },
];

const banners = { url: "https://www.youtube.com/embed/Gn3dkFJtCg8" };

export default function TestimonialsPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="bg-white text-gray-900 pt-24 ">
      {/* Testimonial Carousel */}
      <section className="py-16  max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hear from Our Satisfied Clients
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">
              Real Experiences from People Who Trust Us, Sharing Their Journeys
              to Better Hearing with Our Expert Care and Support.
            </p>
          </div>

          <Slider
            dots={true}
            infinite={true}
            speed={800}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={true}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {testi.map((t, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-white shadow-lg p-6 flex flex-col items-center h-full w-full rounded-xl">
                  <Image
                    src={t.image}
                    width={120}
                    height={120}
                    alt={t.name}
                    className="rounded-full mb-4"
                  />
                  <h5 className="text-xl font-semibold">{t.name}</h5>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/assets_b/img/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                      />
                    ))}
                  </div>
                  <p className="text-center text-gray-700">{t.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Video Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Real Stories from Real People
          </h2>
          <div className="relative w-full md:w-3/4 mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={banners.url}
              title="Banner Video"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Client Story Grid */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-md h-full"
            >
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={t.url}
                  allowFullScreen
                />
              </div>
              <h4 className="mt-4 font-semibold text-center">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gradient-to-r from-[#4b72b5] to-[#023784] text-white ">
        <div className="container mx-auto px-4 text-center max-w-7xl ">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Begin Your Hearing Test Now!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="tel:+91-6204260510">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image
                  src="/assets/img/icon-talk.svg"
                  width={60}
                  height={60}
                  alt="call"
                />
                <h3 className="font-semibold mt-4 text-center">
                  Connect With Insono Hearing
                </h3>
                <p className="mt-2">Chat now or call us at</p>
                <p className="font-bold text-lg">+91-6204260510</p>
              </div>
            </Link>

            <Link href="https://insonohearing.com/appointment">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image
                  src="/assets/img/icon-schedule.svg"
                  width={60}
                  height={60}
                  alt="appointment"
                />
                <h3 className="font-semibold mt-4 text-center">
                  Schedule An Appointment
                </h3>
                <p className="mt-2 text-center">
                  The Customer Care Executive will schedule your appointment.
                </p>
              </div>
            </Link>

            <Link href="https://insonohearing.com/our-clinic">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image
                  src="/assets/img/icon-where.svg"
                  width={60}
                  height={60}
                  alt="appointment"
                />
                <h3 className="font-semibold mt-4 text-center">
                  Meet An Expert
                </h3>
                <p className="mt-2 text-center">
                  Visit our clinic and meet an expert audiologist.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
