"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";

const AppointmentSection = () => {
  const [date, setDate] = useState<Date>();
  const [state, handleSubmit] = useForm("mzzeowow"); // replace with your Formspree ID

  if (state.succeeded) {
    toast.success("Appointment request submitted", {
      description: "We will contact you shortly to confirm your appointment.",
    });
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <span className="bg-accent text-primary rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Book an Appointment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Visit With <br></br>Dr Anshul
            </h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards better health by scheduling an appointment with
              our experienced medical professionals. We offer convenient scheduling and
              minimal wait times.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-3">1</span>
                Choose Your Department
              </h3>
              <p className="text-gray-600 mb-6 pl-12">
                Select from our team of specialists based on your healthcare needs.
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-3">2</span>
                Select Date & Time
              </h3>
              <p className="text-gray-600 mb-6 pl-12">
                Pick a convenient date and time that works for your schedule.
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-3">3</span>
                Confirm Your Appointment
              </h3>
              <p className="text-gray-600 pl-12">
                Complete your booking and receive confirmation immediately.
              </p>
            </div>
          </div>

          {/* Right Section - Appointment Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">Request an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="johndoe@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                        variant={"outline"}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select name="department">
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Paediatric Orthopaedics</SelectItem>
                      <SelectItem value="neurology">Spine</SelectItem>
                      <SelectItem value="orthopedics">Joint Replacement</SelectItem>
                      <SelectItem value="pediatrics">Trauma</SelectItem>
                      <SelectItem value="dental">Limb Reconstruction & Limb Lengthening</SelectItem>
                      <SelectItem value="ophthalmology">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="space-y-2">
                  <Label>Doctor</Label>
                  <Select name="doctor">
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
                      <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                      <SelectItem value="dr-rodriguez">Dr. Emily Rodriguez</SelectItem>
                      <SelectItem value="dr-wilson">Dr. James Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
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
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
