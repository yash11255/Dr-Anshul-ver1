"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, Star } from "lucide-react";
import AppointmentSection from "@/components/home/AppointmentSection";

const HeroSection = () => {
  useEffect(() => {
    // Animation for doctor image on load
    const doctorImage = document.getElementById("doctor-image");
    if (doctorImage) {
      doctorImage.classList.add("scale-100", "opacity-100");
    }
  }, []);

  // Scroll handler function
  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-[#f0f7ff] to-[#dceeff] overflow-x-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Text Section */}
          <div className="text-center md:text-left animate-fade-in">
            <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
              Welcome To Dr. Anshul Goel
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Orthopedic Surgeon in Delhi<br />
              for Joint, Sports Injury,<br />
              and Spine Care.
            </h1>
            <p className="text-gray-700 mb-8 text-lg">
              Consult Dr. Anshul Goel, a trusted orthopedic doctor in Delhi and Rajouri Garden,
              for personalized treatment plans, pain relief, and advanced surgical care to restore mobility.
              Many patients searching for the best orthopedic surgeon in Delhi and the best orthopedic surgeon in Rajouri Garden Delhi choose his comprehensive care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                onClick={scrollToAppointment}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Button
                onClick={scrollToAppointment}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center">
            {/* Background circles */}
            <div className="absolute -top-10 right-0 w-72 h-72 bg-[#e3f3ff] rounded-full blur-3xl opacity-40 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-60 z-0"></div>

            {/* Floating circles */}
            <div className="absolute top-10 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse z-10"></div>
            <div className="absolute bottom-20 right-4 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-bounce z-10"></div>

            {/* Doctor Image Container */}
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-2xl mx-4 md:mx-0 max-w-md w-full">
              <img
                id="doctor-image"
                src="/WhatsApp_Image_2025-05-02_at_19.02.30-removebg-preview (1).png"
                alt="Dr. Anshul Goel - Orthopedic Surgeon"
                width={400}
                height={500}
                className="relative z-10 w-full h-auto rounded-xl shadow-lg transition-all duration-700 transform scale-110 hover:scale-115 object-cover object-center"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-30">
                <Star className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg z-30">
                <span className="text-sm font-medium text-blue-800">Trusted by 1000+ patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;