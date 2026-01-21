"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
    pages: [
        { label: "Home", href: "/" },
        { label: "Work", href: "#work" },
        { label: "Services", href: "#services" },
        { label: "Pricing", href: "#pricing" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ],
    utility: [
        { label: "Style Guide", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Changelog", href: "#" },
    ],
    socials: [
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Dribbble", href: "https://dribbble.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
            {/* Main Footer */}
            <div className="section-container py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand & CTA */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <span className="text-3xl font-bold tracking-tight text-white">
                                Ovela
                            </span>
                            <span className="text-[#ff4d29] text-2xl">®</span>
                        </Link>

                        <p className="text-[#666] text-lg mb-8 max-w-md">
                            Premium design studio crafting exceptional digital experiences
                            that drive results.
                        </p>

                        <Link
                            href="#contact"
                            className="btn btn-primary inline-flex"
                        >
                            Start a project
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Pages */}
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">
                                    Pages
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.pages.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[#999] hover:text-white transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Utility */}
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">
                                    Utility
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.utility.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[#999] hover:text-white transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Socials */}
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-4">
                                    Socials
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.socials.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#999] hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#2a2a2a]">
                <div className="section-container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-[#666]">
                            © {new Date().getFullYear()} Ovela Studio. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-sm text-[#666] hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-[#666] hover:text-white transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
