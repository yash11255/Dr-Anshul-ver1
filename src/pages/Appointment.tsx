"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Calendar as CalendarIcon,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Appointment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Modern Appointment Hero */}
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-12 bg-outline-variant"></span>
                <span className="text-xs font-bold tracking-widest text-on-surface uppercase font-label">Consultation Booking</span>
              </div>
              <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-8">
                Take the First Step to <br/><span className="italic font-normal text-midnight-gradient text-fill-transparent bg-clip-text">Painless Motion.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Experience world-class orthopedic care. Fill out the form below to request an appointment with Dr. Anshul Goel. Our team will contact you within 24 hours to confirm your slot.
              </p>
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-slate-100">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <span className="block font-bold text-sm">Call Directly</span>
                    <p className="text-xs text-on-surface-variant">+91 8527419626</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-slate-100">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <span className="block font-bold text-sm">Clinic Hours</span>
                    <p className="text-xs text-on-surface-variant">Mon-Sat: 6 PM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="font-headline text-2xl mb-8 relative z-10">Request a Consultation</h3>
                
                <form action="https://formsubmit.co/dranshulgoel@gmail.com" method="POST" className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</Label>
                       <Input name="name" placeholder="John Doe" className="bg-surface border-none h-12 focus:ring-2 focus:ring-primary" required />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</Label>
                       <Input name="phone" placeholder="+91-0000000000" className="bg-surface border-none h-12 focus:ring-2 focus:ring-primary" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Specialty Required</Label>
                     <Select name="department">
                       <SelectTrigger className="bg-surface border-none h-12">
                         <SelectValue placeholder="Select Service" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="spine">Spine Surgery</SelectItem>
                         <SelectItem value="joint">Joint Replacement</SelectItem>
                         <SelectItem value="trauma">Trauma Care</SelectItem>
                         <SelectItem value="limb">Limb Reconstruction</SelectItem>
                         <SelectItem value="pediatric">Pediatric Orthopedics</SelectItem>
                       </SelectContent>
                     </Select>
                  </div>

                  <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Preferred Date</Label>
                     <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-surface border-none h-12",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                     </Popover>
                     <input type="hidden" name="date" value={date ? format(date, "PPP") : ""} />
                  </div>

                  <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message (Optional)</Label>
                     <textarea 
                        name="message"
                        rows={3}
                        className="w-full p-4 rounded-xl bg-surface border-none focus:ring-2 focus:ring-primary outline-none text-sm" 
                        placeholder="Briefly describe your symptoms"
                     ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-midnight-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
                    Confirm Appointment Request
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="px-8 py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                    <h2 className="font-headline text-4xl mb-6">Our Clinic Location</h2>
                    <p className="text-on-surface-variant mb-10 leading-relaxed">
                        Centrally located in Rajouri Garden, Delhi, with easy access and dedicated patient facilities.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                            <div>
                                <h5 className="text-xl font-headline mb-2">Rajouri Garden Clinic</h5>
                                <p className="text-on-surface-variant text-sm leading-relaxed">D 23 Flat No. 7, Block D, Rajouri Garden, Delhi, 110027</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                            <div>
                                <h5 className="text-xl font-headline mb-2">Emergency Help</h5>
                                <p className="text-on-surface-variant text-sm leading-relaxed">Available for urgent trauma cases 24/7 at hospital.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-8 rounded-2xl overflow-hidden h-[500px] shadow-lg border border-slate-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4262.960862115214!2d77.12398007610288!3d28.64309268359999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035fbab208e7%3A0xf1d37fdbdf5ccbe0!2sDr%20Anshul%20Goel!5e1!3m2!1sen!2sin!4v1744166107065!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dr. Anshul Goel Clinic Location"
                    ></iframe>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
