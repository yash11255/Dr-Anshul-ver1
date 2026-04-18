
import React from "react";
import { Check, Award, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { icon: <Award className="h-8 w-8 text-secondary" />, count: "20+", label: "Years of Experience" },
    { icon: <Users className="h-8 w-8 text-secondary" />, count: "50+", label: "Expert Doctors" },
    { icon: <Calendar className="h-8 w-8 text-secondary" />, count: "15k+", label: "Patients Per Year" },
  ];

  const features = [
    "Qualified Medical Specialists",
    "24/7 Emergency Services",
    "Modern Medical Technology",
    "Affordable Prices & Packages",
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/Gemini_Generated_Image_t0g100t0g100t0g1.jpg"
              alt="About Dr. Anshul Goel - Orthopedic Expertise"
              width={500}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
            {/* Stats Card - Desktop positioned absolutely, Mobile displays below */}
            <div className="mt-6 md:absolute md:-bottom-8 md:-right-8 bg-white p-6 rounded-lg shadow-lg md:max-w-[240px]">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900">{stat.count}</h4>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
              About Dr. Anshul Goel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Help You Live a Healthy Longer Life
            </h2>
            <p className="text-gray-600 mb-6">
              Dr. Anshul Goel has done his MBBS, MS, DNB, MRCS (UK), M.Ch (UK) Consultant Orthopedics from Government Medical College, Chandigarh & has completed his Senior Residency from Maulana Azad Medical College and associated Lok Nayak Hospital, New Delhi. He has worked as a fellow at Wrightington Hospital from Wrightington, Wigan, and Leigh NHS Foundation Trust and Teaching Hospitals, England. He completed MCH Trauma and Orthopaedics and Sports Injuries from Wrightington Hospital and Edgehill University, Lancashire, UK. He has also trained at the ALPS Institute, in France, and the AO Centre in Davos, Switzerland. Dr. Goel has a wide interest in research and teaching activities and has presented many research papers in national and international conferences and journals and written chapters for books. He is a Life Member of the Indian Orthopedic Association, Delhi Orthopedic Association, Indian Arthroscopy Society, Association of spine surgeons of India, and ISKSAA.
            </p>
            <p className="text-gray-600 mb-8">
              Dr. Anshul Goel is an alumnus of the government medical college and hospital, sector 32, Chandigarh. he has completed his MBBS and MS orthopedic from the same institute. He has successfully completed a registrarship from Maulana Azad Medical College and Lok Nayak Hospital, New Delhi. Afterward, he completed his MCh orthopedic and traumatology and sports medicine in the United Kingdom at Wrightington Hospital and Edgehill University, Lancashire. He has completed an additional DNB degree in orthopedics and is MNANS, MRCS Edinburgh (UK)
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

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
