
import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { Check, Award, Heart, Stethoscope, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const About = () => {
  const faqData = [
    {
      question: "What are Dr. Anshul Goel's qualifications?",
      answer: "Dr. Anshul Goel is a highly qualified consultant orthopedic surgeon with MBBS, MS, DNB, MRCS (UK), and M.Ch (UK) degrees. He completed training at Government Medical College, Chandigarh, and senior residency at Maulana Azad Medical College, New Delhi, followed by fellowships at renowned institutions including Wrightington Hospital (UK), Edgehill University (UK), ALPS Institute (France), and AO Centre (Switzerland)."
    },
    {
      question: "What is Dr. Goel's experience in orthopedic surgery?",
      answer: "Dr. Anshul Goel has over 20 years of experience in orthopedic surgery with expertise in joint replacement, arthroscopy, spine surgery, trauma management, and sports medicine. He is a Life Member of professional bodies including IOA (Indian Orthopaedic Association), DOA (Delhi Orthopaedic Association), IAS, ASSI, and ISKSAA."
    },
    {
      question: "Is Dr. Goel involved in research and teaching?",
      answer: "Yes, Dr. Goel is actively involved in both research and teaching. He has numerous national and international presentations and publications in peer-reviewed journals, and regularly mentors younger surgeons and medical students in orthopedic surgery."
    },
    {
      question: "What areas of orthopedics does Dr. Goel specialize in?",
      answer: "Dr. Goel specializes in multiple areas of orthopedics including joint replacement surgery, arthroscopy, sports medicine, spine surgery, trauma management, limb reconstruction, and pediatric orthopedics. He uses both traditional and minimally invasive surgical techniques."
    },
    {
      question: "What sets Dr. Goel's practice apart?",
      answer: "Dr. Goel combines evidence-based medicine with patient-focused care. He offers comprehensive consultation, personalized treatment plans, advanced surgical techniques, and dedicated post-operative rehabilitation support to ensure optimal patient outcomes."
    },
    {
      question: "Does the clinic use advanced surgical techniques?",
      answer: "Yes, the clinic utilizes modern surgical techniques including minimally invasive procedures, arthroscopic surgery, and advanced fixation methods. This approach often results in smaller incisions, reduced pain, faster recovery, and better functional outcomes for patients."
    },
    {
      question: "Do you offer both surgical and non-surgical treatment options?",
      answer: "Yes, Dr. Goel's approach is comprehensive. Many conditions are managed with conservative treatment including physical therapy, medications, and injections. Surgery is recommended only when conservative methods are insufficient or when the condition requires surgical intervention."
    },
    {
      question: "How do I book an appointment with Dr. Goel?",
      answer: "You can call us at +91 8527419626 or email dranshulgoel@gmail.com to schedule a consultation. Clinic hours are Monday-Saturday 6pm-8pm at the clinic, and Monday-Thursday 9am-3pm sessions are also available. Sunday is closed."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const milestones = [
    {
      year: "2003",
      title: "Foundation",
      description: "Doctio Medical Center was established with a mission to provide exceptional healthcare services."
    },
    {
      year: "2008",
      title: "Expansion",
      description: "Added new departments and advanced medical equipment to meet growing community needs."
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Opened a state-of-the-art research facility focused on medical innovation and clinical trials."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced digital health solutions to enhance patient care and experience."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Compassionate Care",
      description: "We approach every patient with empathy, understanding, and genuine concern for their wellbeing."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We strive for the highest standards in medical care, professional development, and patient outcomes."
    },
    {
      icon: <Check className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "We maintain honesty, transparency, and ethical standards in all our practices and decisions."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We continually seek new methods and technologies to improve healthcare delivery and patient experiences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Header />
      <main className="flex-grow">
        <PageHeader title="Orthopedic Specialist in Delhi" breadcrumb="About" />

        {/* Main About Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Orthopedic Specialist in Delhi
                </h2>
                <p className="text-gray-600 mb-6">
                  Dr. Anshul Goel is a highly qualified consultant orthopaedic surgeon with MBBS, MS, DNB, MRCS (UK), and M.Ch (UK) degrees. If you are searching for an orthopedic specialist in Delhi, his practice combines evidence-based diagnosis with patient-focused care. He completed training at Government Medical College, Chandigarh, and senior residency at Maulana Azad Medical College, New Delhi, followed by fellowships at Wrightington Hospital (UK), Edgehill University (UK), ALPS Institute (France), and AO Centre (Switzerland).
                </p>
                <p className="text-gray-600 mb-6">
                  Recognized as one of the best orthopedic surgeon choices in Delhi by many patients, Dr. Goel is also a trusted orthopedic doctor in Delhi for evidence-based treatment. He is active in research and teaching with national and international presentations and publications, and is a Life Member of professional bodies including IOA, DOA, IAS, ASSI, and ISKSAA.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">20+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">50+</h3>
                    <p className="text-gray-600">Specialist Doctors</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">15k+</h3>
                    <p className="text-gray-600">Satisfied Patients</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
              <div className="relative">
                <img
                  src="/Gemini_Generated_Image_t0g100t0g100t0g1.jpg"
                  alt="Dr. Anshul Goel - Orthopedic Surgeon"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg md:max-w-[120px]">
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-accent p-8 rounded-lg shadow-sm">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To enhance the health and wellbeing of the communities we serve through compassionate care,
                  innovative treatments, and a commitment to excellence. We strive to make quality healthcare
                  accessible to all and to improve health outcomes through education, prevention, and personalized care.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg shadow-sm">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the premier healthcare provider known for clinical excellence, patient-centered care,
                  and innovative medical practices. We aim to lead the transformation of healthcare delivery
                  by setting new standards in patient experience, treatment outcomes, and community health improvement.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                  Core Values
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Principles That Guide Us
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our values form the foundation of everything we do at Doctio Medical Center,
                  guiding our decisions, actions, and interactions with patients and the community.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all">
                    <div className="bg-accent p-3 rounded-lg inline-block mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones Timeline */}
            <div>
              <div className="text-center mb-12">
                <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Key Milestones
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A look at the significant moments that have shaped Doctio Medical Center's growth and evolution.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20 max-w-3xl mx-auto">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-12 relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-primary"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <span className="text-primary font-bold text-xl mb-2 block">{milestone.year}</span>
                      <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn More About Dr. Goel and Our Practice
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about Dr. Anshul Goel's qualifications, experience, and approach to patient care.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 bg-white">
                    <AccordionTrigger className="py-4 hover:no-underline hover:text-primary">
                      <span className="text-left font-semibold text-gray-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
