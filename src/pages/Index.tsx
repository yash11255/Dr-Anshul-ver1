import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section: Editorial Asymmetry */}
        <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-12 bg-tertiary-fixed-dim"></span>
              <span className="text-on-tertiary-container font-label uppercase tracking-widest text-xs font-bold">Trusted Orthopedic Surgeon</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-headline text-primary leading-tight mb-8">
              Precision in Motion. <br />
              <span className="italic font-normal">Excellence in Care.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Recognized as the best orthopedic doctor in Delhi, Dr. Anshul Goel combines world-class surgical expertise from Wrightington, UK, with a compassionate, patient-first philosophy.
            </p>
            <div className="flex gap-4">
              <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-medium">M.Ch (UK) Certified</span>
              </div>
              <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <span className="text-sm font-medium">Global Fellow</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Professional portrait of Dr. Anshul Goel in clinical attire"
                src="/herosection.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-xl -z-10"></div>
          </div>
        </section>

        {/* Academic Excellence & Qualifications: Bento Grid */}
        <section className="bg-surface-container-low py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 text-center lg:text-left">
              <h2 className="text-4xl font-headline text-primary mb-4 tracking-tight">Academic Excellence</h2>
              <p className="text-on-surface-variant font-label tracking-wide text-sm opacity-80">A journey of global learning and clinical mastery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-tertiary-fixed-dim text-4xl font-headline mb-4 block">01</span>
                  <h3 className="text-2xl font-headline mb-2">MBBS, MS, DNB</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Foundation of surgical excellence established at India's premier medical institutions, focused on orthopedic trauma and elective care.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
                <h3 className="text-xl font-headline mb-2">MRCS (UK)</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Member of the Royal College of Surgeons, London.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
                <h3 className="text-xl font-headline mb-2">M.Ch (UK)</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Advanced Master of Surgery from Edge Hill University.</p>
              </div>
              <div className="md:col-span-4 bg-primary-container text-on-primary p-10 rounded-xl flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-headline mb-4">Wrightington Hospital Experience</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Honing skills at the birthplace of modern hip replacement. Dr. Goel’s tenure at Wrightington Hospital, UK, allowed him to master advanced joint arthroplasty techniques under the world's leading orthopedic consultants.
                  </p>
                </div>
                <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden grayscale opacity-50">
                  <img
                    className="w-full h-full object-cover"
                    alt="Wrightington Hospital"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2HvwzkCMrR3OOOedH6FnlhdGw_xoSRlEfvR8uf9zZvYjJpfPwA0t8VdBsbN_HowY-fWIYFK46-J0ntj-qitWDvvhLfA3rKaz2758_Yxzzy0VNPp7xtq9JjkIgpGvoMmW8OVDL9HRqNB-FRp2grYHSXrw8-vk6qU5IQPflFH8KmZWr6Mpzg9PgC5bM23NW_PpMP19Me-DnpkQ5Ood0K_ACjrxH_SCDumoT3XYtdZ23mzMfkyPOrvad9ftVSS5bKFYvDcQXiT7GgAE"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations: Architectural Grid */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline text-primary mb-6 italic">Clinical Specializations</h2>
              <p className="text-on-surface-variant leading-relaxed">Expert intervention for complex orthopedic conditions using the latest diagnostic and surgical technologies.</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-8xl font-headline text-surface-container-highest select-none opacity-30 tracking-[0.2em]">FOCUS</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="group">
              <div className="aspect-square bg-surface-container-low rounded-xl mb-6 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Joint Reconstruction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBoQ5LHG1RA0XhnK4y78GWPhm2d-sWxKDqeIAXjbHDV492EV9FsA1FV3UeCGyZwCKO4BERJRAdZdvXmDU2xZXCCRtd9J-ea5tLIy_ipEonVnSRFmmubgO0Wt_XVX1gfV3BsZV5AL5mn41HtXUH4vYhVhUGxwCdN13tdQ_BQICvOLYE0RPk4fhBmrMT7aLilNwPo3n771S6sxbKTIOktH4ogHRHE2HB0GOEljsGmipeQNg2iBvwUAL_V1Xu4XgchGQv0k9mOpaFHQ" />
              </div>
              <h4 className="text-xl font-headline mb-3 flex items-center gap-2 tracking-tight mt-8">
                <span className="w-2 h-8 bg-tertiary-fixed-dim block"></span>
                Joint Reconstruction
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-90">Advanced Hip and Knee replacements using minimally invasive approaches to ensure faster recovery times.</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-surface-container-low rounded-xl mb-6 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sports Medicine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh0sVNi9NPqw0zhhprZ3WuVyiFsys6oDZqV_n9xSBJVTlAGXfIsoXuEbr9mHKqURlDrhw5bAnFhOm7SpJ-VONghCk7Rh_c3HY7YOBayInB0dw3cQbOkymqfDaAZ2VuYW38YkkhdYbGTn8bkx8mfHlKxiDedKcE9xDprO4nhNtejztS6H4EeayZZtW45Pl20frcb2GfxkcSFxN4HU33b5qk0W7bxHYMbS2a-zGEU5jnZSqe2OtxXH6irPeSwgMlgYtHjbgDES0Py3o" />
              </div>
              <h4 className="text-xl font-headline mb-3 flex items-center gap-2 tracking-tight mt-8">
                <span className="w-2 h-8 bg-tertiary-fixed-dim block"></span>
                Sports Medicine
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-90">Arthroscopic surgeries for ACL/PCL tears and meniscus repairs, designed to get athletes back to their peak performance.</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-surface-container-low rounded-xl mb-6 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spine & Trauma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSymNqIzHmP3GokxtotB0uA8ZtESiaiJKpmYsbYTbE6pQdEGpPhuq0O5jjNY4gXN3fh2LOcAgn_qR127COhqlE7C38rF3BVywZbOFhPNoTX3gPxHOnTNn_3aD4qY9oHJxu2rhwMsD7FedmX7PhyCGR6TSFDpm9S-82MtRePc_kS00EpJ2WwS6q94CvuM7TmQS1Tt_8KnadCGWmYLe_kNCTWY0YxJzJCaEPQwFueJlV1AviRlEcvpuI5NtLRMM5ryLpN1V8fe_pK0" />
              </div>
              <h4 className="text-xl font-headline mb-3 flex items-center gap-2 tracking-tight mt-8">
                <span className="w-2 h-8 bg-tertiary-fixed-dim block"></span>
                Spine & Trauma
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-90">Precision surgery for spinal deformities and management of high-impact musculoskeletal trauma.</p>
            </div>
          </div>
        </section>

        {/* Philosophy Section: The Digital Sanctuary */}
        <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/20 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-headline mb-8">The Philosophy of <br />Patient-First Care</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">healing</span>
                  <div>
                    <h5 className="text-xl font-headline mb-2">Minimally Invasive</h5>
                    <p className="text-on-primary-container text-sm leading-relaxed">Prioritizing techniques that reduce pain, minimize scarring, and significantly shorten hospital stays for our patients.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">psychology</span>
                  <div>
                    <h5 className="text-xl font-headline mb-2">Evidence-Based Medicine</h5>
                    <p className="text-on-primary-container text-sm leading-relaxed">Every treatment plan is backed by global clinical standards and personal surgical data for predictable outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">volunteer_activism</span>
                  <div>
                    <h5 className="text-xl font-headline mb-2">Holistic Recovery</h5>
                    <p className="text-on-primary-container text-sm leading-relaxed">Surgery is only one part of the journey. We focus on comprehensive rehabilitation to restore lifestyle quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low/10 backdrop-blur-sm p-12 rounded-xl">
              <blockquote className="text-2xl font-headline italic leading-snug mb-8">
                "I believe orthopedic surgery is the art of restoring structural integrity to the human form. My goal isn't just to heal a bone, but to return a life to its natural rhythm."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-tertiary-fixed-dim"></div>
                <span className="font-label uppercase tracking-widest text-xs font-bold text-tertiary-fixed-dim">Dr. Anshul Goel</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="max-w-7xl mx-auto px-8 py-24 text-center">
          <h2 className="text-3xl font-headline mb-8">Consult with Delhi's Trusted Surgeon</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/appointment">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label font-bold hover:bg-primary-container transition-all">
                Schedule a Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-surface-container-high text-on-surface px-10 py-4 rounded-xl font-label font-bold hover:bg-surface-container-highest transition-all">
                View Treatment Catalog
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
