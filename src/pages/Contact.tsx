"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Calendar as CalendarIcon,
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

const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const contactInfo = [
    {
      icon: <PhoneCall className="w-10 h-10 text-primary" />,
      title: "Phone Number",
      info: ["+91 8527419626"],
      color: "bg-blue-50",
    },
    {
      icon: <Mail className="w-10 h-10 text-primary" />,
      title: "Email Address",
      info: ["dranshulgoel@gmail.com"],
      color: "bg-green-50",
    },
    {
      icon: <MapPin className="w-10 h-10 text-primary" />,
      title: "Office Address",
      info: ["D 23 Flat No. 7, Block D, Rajouri Garden, Delhi, 110027, India"],
      color: "bg-red-50",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Working Hours",
      info: [
        "Monday-Saturday: 6pm-8pm at Clinic",
        "Monday-Thursday: 9am-3pm, Sunday: Closed",
      ],
      color: "bg-yellow-50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHeader title="Orthopedic Consultation in Delhi" breadcrumb="Contact" />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We're Here to Help
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Book an orthopedic consultation in Delhi with Dr. Anshul Goel. Our orthopedic clinic in Rajouri Garden helps patients connect with an experienced orthopedic doctor in Delhi for pain evaluation, injury assessment, and treatment planning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`${item.color} p-4 rounded-lg inline-block mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  {item.info.map((line, idx) => (
                    <p key={idx} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-center">Request an Appointment</h3>
                <form
                  action="https://formsubmit.co/dranshulgoel@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="johndoe@example.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="+91-9911334466" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <input type="hidden" name="date" value={date ? format(date, "PPP") : ""} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select name="department">
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paediatric-orthopaedics">Paediatric Orthopaedics</SelectItem>
                        <SelectItem value="spine">Spine</SelectItem>
                        <SelectItem value="joint-replacement">Joint Replacement</SelectItem>
                        <SelectItem value="trauma">Trauma</SelectItem>
                        <SelectItem value="limb">Limb Reconstruction & Lengthening</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      placeholder="Briefly describe your symptoms or reason for visit"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Book Appointment
                  </Button>
                </form>
              </div>

              <div className="h-full">
                <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] border border-gray-200">
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

                <div className="mt-6 bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Visit Our Medical Center</h4>
                  <p className="text-gray-600">
                    Our orthopedic clinic in Rajouri Garden is centrally located with easy access, public transit connectivity, and wheelchair-friendly facilities designed for patient comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;