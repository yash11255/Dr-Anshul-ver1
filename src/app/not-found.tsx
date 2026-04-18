"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Home, PhoneCall, Mail, ArrowRight } from "lucide-react";

export default function NotFound() {
    const pathname = usePathname();

    const quickLinks = [
        { label: "Home", href: "/", icon: Home },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-3xl">
                    {/* 404 Content */}
                    <div className="text-center mb-16">
                        <div className="mb-8">
                            <h1 className="text-9xl md:text-[150px] font-bold text-primary/20 mb-4 leading-none">404</h1>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Page Not Found</h2>
                            <p className="text-lg text-gray-600 mb-2">
                                Sorry, the page you're looking for doesn't exist.
                            </p>
                            <p className="text-base text-gray-500 font-mono break-all">
                                {pathname}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg mb-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">What would you like to do?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                        {link.label}
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Need Help?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <a
                                href="tel:+918527419626"
                                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors"
                            >
                                <PhoneCall className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Call Us</p>
                                    <p className="text-gray-600">+91 8527419626</p>
                                </div>
                            </a>
                            <a
                                href="mailto:dranshulgoel@gmail.com"
                                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors"
                            >
                                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Email Us</p>
                                    <p className="text-gray-600 break-all">dranshulgoel@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
