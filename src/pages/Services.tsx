import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Services = () => {
  const faqData = [
    {
      question: "What is the recovery time after joint replacement surgery?",
      answer: "Recovery time varies, but most patients can expect 6-12 weeks for initial recovery. Full recovery may take 3-6 months with physical therapy."
    },
    {
      question: "Am I a candidate for arthroscopic surgery?",
      answer: "Arthroscopic surgery is suitable for many knee, shoulder, and ankle conditions. Dr. Anshul Goyal will evaluate your condition through imaging and physical examination to determine the best approach."
    },
    {
      question: "What are the treatment options for a slipped disc?",
      answer: "Treatment depends on severity and symptoms. Initial management includes rest, physical therapy, and anti-inflammatory medications. If conservative treatment fails, surgery might be necessary."
    },
    {
      question: "Is physical therapy necessary after orthopedic surgery?",
      answer: "Yes, physical therapy is crucial for optimal recovery. It helps restore strength, flexibility, and function, and reduces the risk of complications."
    }
  ];

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-6">Restoring Structural <br /><span className="italic font-normal">Integrity & Motion</span></h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">Advanced orthopedic interventions designed with clinical precision and surgical excellence. We specialize in complex reconstructive procedures to restore your quality of life.</p>
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-outline-variant"></span>
                <span className="text-sm font-semibold tracking-widest text-on-surface uppercase">Surgical Specializations</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                alt="Clinical Environment"
                className="object-cover w-full h-full"
                src="/WhatsApp Image 2026-04-15 at 15.55.37.jpeg"
              />
            </div>
          </div>
        </section>

        {/* Services Grid - Bento Style */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center lg:text-left">
              <h2 className="font-headline text-4xl mb-4">Treatment Catalog</h2>
              <p className="font-body text-on-surface-variant max-w-xl">Each procedure is tailored to individual physiological needs, utilizing the latest in skeletal reconstruction and soft tissue management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Decompression */}
              <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary-fixed text-primary">
                        <span className="material-symbols-outlined">line_weight</span>
                      </div>
                      <h3 className="font-headline text-2xl">Decompression</h3>
                    </div>
                    <p className="text-on-surface-variant mb-6">Relieving pressure on spinal nerves or the spinal cord through surgical removal of bone spurs or ligaments. This procedure is critical for restoring neurological function and alleviating chronic pain.</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-bold block text-primary mb-1">Symptoms</span>
                        <p>Numbness, weakness, radiating limb pain.</p>
                      </div>
                      <div>
                        <span className="font-bold block text-primary mb-1">Recovery</span>
                        <p>4 - 6 weeks for full mobility.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 rounded-lg overflow-hidden h-48 lg:h-auto">
                    <img
                      alt="Decompression Detail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcHmaxcM3MONQtDeHLsFGMXjoLAo2ow7SxX1QojVegaI30n2hYPoK4CVbj4umCyatzh4DEknQfmFx6MMzF6-P6RjhimrQWGeaAMImfsVErCuaUHxZ4QE2IbUWnOESAMiro9VmId1va80u3divkMAZ6g3u8FtFomlXYe5TgzfK5N5k2Lgq86yloaQ5Of2gFVHq7vmNQVbwmm1iErNAbuMIcdrYgJACguNPTvDWnRu-zDgU2sAlOsVAR0lw5ULTY9pA6oDvTWYgKq88"
                    />
                  </div>
                </div>
              </div>

              {/* Tendon Transfer */}
              <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-primary-fixed text-primary w-fit mb-6">
                  <span className="material-symbols-outlined">transfer_within_a_station</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">Tendon Transfer</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Restoring lost function by rerouting a healthy tendon to replace a damaged or paralyzed one.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">check_circle</span>
                    Improved range of motion
                  </li>
                  <li className="flex items-center gap-2 text-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">check_circle</span>
                    Neuromuscular balance
                  </li>
                </ul>
                <div className="pt-4 border-t border-surface-variant">
                  <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Recovery: 8 - 12 Weeks</span>
                </div>
              </div>

              {/* Deformity Correction */}
              <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-primary-fixed text-primary w-fit mb-6">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">Deformity Correction</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Precision realignment of limbs or spine using advanced osteotomy and fixation techniques.</p>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <span className="text-xs font-bold text-primary block mb-2">Benefit</span>
                  <p className="text-xs">Prevents long-term joint degradation and restores natural gait.</p>
                </div>
              </div>

              {/* Ilizarov Technique */}
              <div className="md:col-span-8 bg-midnight-gradient rounded-xl p-8 shadow-xl text-white group overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined">settings_input_component</span>
                      </div>
                      <h3 className="font-headline text-2xl text-white">Ilizarov Technique</h3>
                    </div>
                    <p className="text-slate-300 mb-8 leading-relaxed">A revolutionary external fixation method for bone lengthening, non-union repairs, and complex deformity correction. This circular frame approach allows for weight-bearing during the healing process.</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium">Bone Transport</div>
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium">Complex Fractures</div>
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium">Limb Lengthening</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/3">
                    <img
                      alt="Ilizarov Detail"
                      className="w-full h-full object-cover rounded-lg opacity-40 mix-blend-overlay"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5yHvy5A1OPlZ6ePh5SvgvuObkPWczINwmSLGqvEgcr9AkPCelMhKPlbJWq2ubGWSCTChVSO_7TOYY4wVbPoU5pdaml90qRSuZ5PDSzDBY3ykKWwjstJV8TnD6bYKpVPnPrElj1e7RDabKYjzteP7YeB5uO7dWJQi1afQkyG9WwrRfy8BUDc5e3i1_4QC-crnzLDBtYUYj20eXSwFirHWJGPP1q27tHtdeaPpP5fcTRnXSRu6ISD_C42MoWOKl_JU5SQkzKO2yGnM"
                    />
                  </div>
                </div>
              </div>

              {/* Polytrauma */}
              <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="p-3 rounded-xl bg-error-container text-error h-fit">
                    <span className="material-symbols-outlined">emergency</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl mb-4">Polytrauma Management</h3>
                    <p className="text-on-surface-variant mb-6">Integrated care for patients with multiple traumatic injuries. Focus on stabilization, prioritized surgical intervention, and intensive rehabilitation.</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-on-surface">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">timer</span> 24/7 Response</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> Multidisciplinary Team</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixation */}
              <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="p-3 rounded-xl bg-primary-fixed text-primary h-fit">
                    <span className="material-symbols-outlined">build</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl mb-4">Internal/External Fixation</h3>
                    <p className="text-on-surface-variant mb-6">Utilizing titanium plates, screws, and rods to stabilize broken bones. Essential for ensuring correct anatomical alignment during the ossification process.</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-on-surface">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span> Medical Grade Alloys</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">speed</span> Accelerated Healing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process/Recovery Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-4xl mb-6">The Road to <br /><span className="text-midnight-gradient italic font-normal">Restoration</span></h2>
              <p className="text-on-surface-variant mb-8">Our care philosophy extends beyond the operating room. We provide a structured roadmap for recovery to ensure long-term surgical success.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low border-l-4 border-tertiary-fixed-dim">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">concierge</span>
                  <div>
                    <span className="block font-bold text-sm">Concierge Recovery</span>
                    <p className="text-xs text-on-surface-variant">Personalized rehab protocols for every patient.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border-l border-outline-variant">
                <span className="text-4xl font-headline text-surface-container-highest mb-4 block">01</span>
                <h4 className="font-headline text-xl mb-3">Diagnostic Precision</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Advanced imaging and biomechanical analysis to map the exact surgical requirements for your specific condition.</p>
              </div>
              <div className="p-8 border-l border-outline-variant">
                <span className="text-4xl font-headline text-surface-container-highest mb-4 block">02</span>
                <h4 className="font-headline text-xl mb-3">Surgical Intervention</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Minimally invasive techniques wherever possible to reduce tissue trauma and post-operative pain.</p>
              </div>
              <div className="p-8 border-l border-outline-variant">
                <span className="text-4xl font-headline text-surface-container-highest mb-4 block">03</span>
                <h4 className="font-headline text-xl mb-3">Early Mobilization</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Controlled movement protocols started shortly after surgery to prevent stiffness and promote blood flow.</p>
              </div>
              <div className="p-8 border-l border-outline-variant">
                <span className="text-4xl font-headline text-surface-container-highest mb-4 block">04</span>
                <h4 className="font-headline text-xl mb-3">Functional Mastery</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Extended physical therapy focusing on strength, balance, and returning to your peak physical performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (Retained from original) */}
        <section className="px-8 py-24 bg-surface-container-low border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline mb-4">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant">Common queries about our orthopedic procedures and recovery.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-6 border-none shadow-sm">
                  <AccordionTrigger className="hover:no-underline font-headline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-20 bg-surface-container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-5xl mb-8">Ready to discuss your <br />orthopedic health?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/appointment">
                <button className="bg-midnight-gradient text-on-primary px-10 py-4 rounded-md font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity">Schedule Consultation</button>
              </Link>
              <Link href="/appointment">
                <button className="bg-surface-container-lowest text-on-surface px-10 py-4 rounded-md font-semibold text-lg shadow-sm hover:bg-surface-container-high transition-colors">Patient Portal</button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-on-surface-variant italic">Tele-consultations available for initial diagnostic reviews.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
