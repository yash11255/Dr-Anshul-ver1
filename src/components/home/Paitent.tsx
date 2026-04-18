"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    heading: "Expert in Complex Joint Surgeries",
    description:
      "Dr. Anshul Goel specializes in knee, hip, and shoulder replacement surgeries with years of successful outcomes. His minimally invasive approach helps reduce recovery time and enhances mobility.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
    heading: "Patient-Centered Orthopedic Care",
    description:
      "With a focus on personalized care, Dr. Goel ensures every patient receives a custom treatment plan designed for fast, long-term recovery and comfort.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    heading: "Trusted by Thousands of Patients",
    description:
      "Over the years, Dr. Goel has treated thousands of patients from across the country and abroad. His commitment to care and healing has earned him national recognition.",
  },
];

const features = [
  "Qualified Medical Specialists",
  "24/7 Emergency Services",
  "Modern Medical Technology",
  "Affordable Prices & Packages",
];

const Paitent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative w-full h-full">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src={content[currentSlide].imageUrl}
                alt={content[currentSlide].heading}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrev}
                className="rounded-full"
              >
                ⬅️ Previous
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNext}
                className="rounded-full"
              >
                Next ➡️
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
              About Dr. Anshul Goel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {content[currentSlide].heading}
            </h2>
            <p className="text-gray-600 mb-6">{content[currentSlide].description}</p>
            <p className="text-gray-600 mb-6">
              Over the years, Dr. Anshul Goel has successfully treated thousands of
              patients suffering from orthopedic conditions ranging from joint
              replacements, sports injuries, fractures, to spine disorders. His
              compassionate care, accurate diagnosis, and modern treatment methods
              have earned him deep trust and respect in the medical community.
              Patients from across the country and abroad seek his expertise for
              complex orthopedic cases. He believes in providing personalized care
              that focuses on long-term recovery and well-being.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paitent;