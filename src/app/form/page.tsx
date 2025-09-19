"use client";

import Image from "next/image";

export default function ContactFormPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-[#023784] mb-3 text-center">
            Book a Free Hearing Test Appointment
          </h1>
          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="flex flex-col gap-4"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input
              type="hidden"
              name="zf_redirect_url"
              value="https://prices.insonohearing.com/landing/apt-thank-you"
            />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />

            {/* Form Fields */}
            <input
              type="text"
              name="SingleLine"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email ID"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <textarea
              name="MultiLine"
              placeholder="Tell us about your hearing problem"
              className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />

            <p className="text-xs text-gray-500">
              Your information is secure. Our team will contact you to confirm
              your preferred time & method.
            </p>

            <button
              type="submit"
              className="w-full bg-[#184a99] text-white text-base font-medium py-3 rounded-md hover:bg-[#cc0000] transition"
            >
              📅 Book My Appointment
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
          <Image
            src="/image/dha-price.png"
            alt="Hearing Test"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
