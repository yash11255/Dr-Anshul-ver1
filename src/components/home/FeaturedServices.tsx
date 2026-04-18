import React from "react";

const FeaturedServices = () => {
  const services = [
    {
      icon: "/backbone.png", // Replace with actual filenames
      title: "Decompression",
      description: "Advanced spinal care with cutting-edge techniques for pain relief and stability.",
      color: "bg-red-50",
      hoverBg: "group-hover:bg-red-500"
    },
    {
      icon: "/tendon.png",
      title: "Tendon Transfer",
      description: "Expert orthopaedic care for restoring muscle function and limb movement.",
      color: "bg-blue-50",
      hoverBg: "group-hover:bg-blue-500"
    },
    {
      icon: "/deformaty.png",
      title: "Deformity Correction",
      description: "Precision correction of bone deformities to restore natural alignment and function.",
      color: "bg-green-50",
      hoverBg: "group-hover:bg-green-500"
    },
    {
      icon: "/multi.png",
      title: "Multidisciplinary Treatment for Polytrauma",
      description: "Comprehensive care using a team-based approach for multiple traumatic injuries.",
      color: "bg-yellow-50",
      hoverBg: "group-hover:bg-yellow-500"
    },
    {
      icon: "/knee-brace.png",
      title: "Fixation",
      description: "Stable fixation techniques to ensure proper healing of fractured bones.",
      color: "bg-purple-50",
      hoverBg: "group-hover:bg-purple-500"
    },
    {
      icon: "/fracture.png",
      title: "Ilizarov",
      description: "Advanced limb lengthening and deformity correction using Ilizarov technique.",
      color: "bg-indigo-50",
      hoverBg: "group-hover:bg-indigo-500"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
            Our Medical Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services We Provide
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive orthopaedic care to meet all your medical needs,
            delivered by experienced specialists using advanced technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${service.color} p-5 rounded-lg inline-block mb-4 transition-colors duration-300 ${service.hoverBg}`}>
                <img src={service.icon} alt={service.title} width={40} height={40} className="w-10 h-10 mx-auto group-hover:brightness-0 group-hover:invert transition" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="/services" className="inline-block mt-4 text-primary font-medium hover:text-primary/80 transition-colors">
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
