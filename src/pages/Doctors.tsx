import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

const Doctors = [
  {
    title: "Paediatric Orthopaedics",
    description:
      "Specialized care for children's musculoskeletal conditions, offering corrective procedures to ensure healthy growth and development.",
    treatments: [
      "Cubitus Varus Correction",
      "Genu Varum / Valgus Correction",
      "Polydactyly Correction",
      "CDH (Congenital Dislocation Hip)",
      "CTEV (Club Foot)",
    ],
    image: "/pedia.jpg",
  },
  {
    title: "Spine",
    description:
      "Advanced spine care with state-of-the-art procedures for pain relief and spinal stability.",
    treatments: [
      "Decompression",
      "Correction of Spondylolisthesis",
      "Kyphoplasty",
      "Lumbar Canal Stenosis",
      "Spinal Fixation",
    ],
    image: "/spine.jpeg",
  },
  {
    title: "Joint Replacement",
    description:
      "Comprehensive joint replacement services to restore mobility and improve quality of life.",
    treatments: [
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "Total Hip Replacement",
      "Revision Hip & Knee Replacement",
      "Total Elbow Replacement",
    ],
    image: "/JC.jpeg",
  },
  {
    title: "Trauma",
    description:
      "Expert trauma care using minimally invasive techniques and a multidisciplinary approach.",
    treatments: [
      "Minimally Invasive Technique for Plating",
      "Multidisciplinary Treatment for Polytrauma",
    ],
    image: "/trauma.jpeg",
  },
  {
    title: "Limb Reconstruction & Limb Lengthening",
    description:
      "Cutting-edge procedures for deformity correction, limb lengthening, and function restoration.",
    treatments: [
      "Tendon Transfer",
      "Ilizarov",
      "Fixation",
      "Deformity Correction",
    ],
    image: "/lacd.jpeg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHeader title="Patient Services" breadcrumb="Services" />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Orthopaedic Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our specialized patient services designed to offer the highest quality orthopaedic care, from pediatric solutions to complex trauma and joint replacements.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Doctors.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 p-6"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} - Orthopedic Service`}
                    width={300}
                    height={160}
                    className="w-full h-40 object-contain mb-4 scale-110"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                    {service.treatments.map((treatment, i) => (
                      <li key={i}>{treatment}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
