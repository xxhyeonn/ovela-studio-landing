"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CEO",
        company: "TechVentures",
        quote:
            "Working with Ovela Studio was transformative. They didn't just design a website—they crafted an experience that perfectly captures our brand's essence. The attention to detail and strategic thinking exceeded all expectations.",
        avatar: "SC",
    },
    {
        id: 2,
        name: "Marcus Rivera",
        role: "Founder",
        company: "Apex Dynamics",
        quote:
            "The team at Ovela understands that great design is about solving problems. They delivered a stunning visual identity that has significantly improved our customer engagement and conversion rates.",
        avatar: "MR",
    },
    {
        id: 3,
        name: "Elena Volkov",
        role: "Creative Director",
        company: "Stellar Labs",
        quote:
            "Exceptional work from start to finish. Ovela brought a fresh perspective to our rebrand, combining beautiful aesthetics with user-centric functionality. They're now our go-to design partners.",
        avatar: "EV",
    },
    {
        id: 4,
        name: "James Wong",
        role: "Marketing Head",
        company: "Nova Systems",
        quote:
            "Ovela Studio doesn't just meet expectations—they redefine them. Their innovative approach and seamless execution made our product launch a resounding success. Truly world-class work.",
        avatar: "JW",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate section title
            gsap.from(".testimonials-title", {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Animate tabs
            gsap.from(".testimonial-tab", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-tabs",
                    start: "top 85%",
                },
            });

            // Animate content area
            gsap.from(".testimonial-content", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-content",
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Animate content change
    useEffect(() => {
        if (!contentRef.current) return;

        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    }, [activeIndex]);

    return (
        <section
            ref={sectionRef}
            className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/10"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="testimonials-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Client Stories
                        <span className="text-[#ff4d29]">.</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="testimonial-tabs flex flex-wrap gap-3 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => setActiveIndex(index)}
                            className={`testimonial-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeIndex === index
                                    ? "bg-[#ff4d29] text-white"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {testimonial.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className="testimonial-content bg-white/[0.02] rounded-2xl p-8 md:p-12 lg:p-16 border border-white/5"
                >
                    <Quote className="w-12 h-12 text-[#ff4d29] mb-8 opacity-60" />

                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 mb-12 max-w-4xl">
                        "{testimonials[activeIndex].quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff4d29] to-[#ff6b4a] flex items-center justify-center text-white font-bold text-lg">
                            {testimonials[activeIndex].avatar}
                        </div>

                        {/* Info */}
                        <div>
                            <p className="text-white font-semibold text-lg">
                                {testimonials[activeIndex].name}
                            </p>
                            <p className="text-white/50 text-sm">
                                {testimonials[activeIndex].role},{" "}
                                {testimonials[activeIndex].company}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "bg-[#ff4d29] w-8"
                                    : "bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
