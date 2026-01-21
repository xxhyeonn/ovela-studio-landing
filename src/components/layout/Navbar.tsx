"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${isScrolled
                    ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]"
                    : "bg-transparent"
                }
      `}
        >
            <div className="section-container">
                <nav className="flex items-center justify-between h-20 lg:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                            Ovela
                        </span>
                        <span className="text-[#ff4d29]">®</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="
                  text-sm text-[#999] hover:text-white
                  font-medium transition-colors duration-300
                  link-underline
                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="btn btn-primary text-xs"
                        >
                            Start a project
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`
            md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}
          `}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-[#999] hover:text-white transition-colors py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="btn btn-primary mt-4 w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Start a project
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
