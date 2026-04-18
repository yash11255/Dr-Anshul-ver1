
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/JC.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "/pedia.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      image: "/lacd.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      image: "/spine.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Experienced Doctors
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified medical professionals is dedicated to providing
            exceptional care with expertise in various specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty}`}
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex space-x-3 p-4">
                    <a href={doctor.social.facebook} className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Facebook size={16} />
                    </a>
                    <a href={doctor.social.twitter} className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href={doctor.social.instagram} className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Instagram size={16} />
                    </a>
                    <a href={doctor.social.linkedin} className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                <p className="text-secondary font-medium">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/doctors"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Doctors
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
