import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 font-sans text-sm antialiased">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-xl font-headline font-bold text-slate-900 mb-6">Dr. Anshul Goyal</div>
          <p className="text-slate-500 max-w-xs leading-relaxed">
            Providing world-class orthopedic care and surgical excellence in the heart of Delhi.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Navigation</h4>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="/about">About</Link>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="/services">Services</Link>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="/services">Treatments</Link>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Patient Links</h4>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="#">Clinic Hours</Link>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="#">Patient Portal</Link>
            <Link className="text-slate-500 hover:text-slate-900 block transition-all" href="#">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Newsletter</h4>
          <p className="text-slate-500 mb-4">Stay updated with the latest in orthopedic health.</p>
          <div className="flex">
            <input
              className="bg-white border-slate-200 rounded-l-lg focus:ring-primary focus:border-primary w-full text-sm px-4 py-2"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-primary text-white px-4 rounded-r-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Patient Success / Testimonial */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
          <div className="flex gap-1 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <p className="text-slate-600 italic mb-4 leading-relaxed">
            "Dr. Anshul Goyal is truly life-changing. His expertise in limb reconstruction helped me get back on my feet after a complex fracture. Highly recommended!"
          </p>
          <div className="font-bold text-slate-900 text-sm">— Rajesh Kumar, Patient Testimony</div>
        </div>

        {/* GMB / Google Reviews */}
        <div className="flex flex-col justify-center">
          <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Patient Trust</h4>
          <div className="flex items-center gap-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-6 opacity-80"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1 font-bold text-slate-900">
                4.8 <span className="material-symbols-outlined text-amber-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <Link href="https://www.google.com/maps/place/Dr+Anshul+Goel/@28.6430927,77.1239801,17z" className="text-xs text-slate-500 hover:text-primary transition-colors">
                View 150+ Google Reviews
              </Link>
            </div>
          </div>
          <Link 
            href="https://www.google.com/maps/dir/?api=1&destination=Dr+Anshul+Goel" 
            className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            Get Directions <span className="material-symbols-outlined text-[16px]">map</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-slate-500 text-xs">© {new Date().getFullYear()} Dr. Anshul Goyal. All rights reserved.</span>
        <div className="flex gap-6">
          <Link className="text-slate-400 hover:text-slate-900 transition-colors" href="#">Terms of Service</Link>
          <Link className="text-slate-400 hover:text-slate-900 transition-colors" href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
