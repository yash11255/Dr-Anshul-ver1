
"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sandeep Dhaka",
      role: "Orthopaedic Patient",
      initials: "SD",
      color: "bg-blue-500",
      rating: 5,
      text: "Best orthopaedic surgeon in Venkateshwar Hospital. Good behaviour 🙏🇮🇳",
    },
    {
      id: 2,
      name: "Kshitij Agarwal",
      role: "Regular Patient",
      initials: "KA",
      color: "bg-green-500",
      rating: 5,
      text: "Strongly recommend Dr. Anshul Goel on any orthopaedics consultation and surgery. Highly experienced in all kind of orthopaedic treatment and injuries.",
    },
    {
      id: 3,
      name: "Rajesh Vats",
      role: "Surgery Patient",
      initials: "RV",
      color: "bg-red-500",
      rating: 4,
      text: "Dr. Anshul is the best surgeon in entire Delhi NCR. He is so simple and good natured that he does not let the patient feel that he is unhappy.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-accent relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-white text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Read about the experiences of our patients and how our medical services
            have positively impacted their lives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <div
                          className={`w-20 h-20 rounded-full ${testimonial.color} flex items-center justify-center border-4 border-white shadow`}
                        >
                          <span className="text-white text-2xl font-bold">
                            {testimonial.initials}
                          </span>
                        </div>
                      </div>
                      {/* Name & stars */}
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-primary w-8" : "bg-gray-300 w-3"
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
