"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Palette, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface MethodStep {
    number: string;
    title: string;
    description: string;
    Icon: React.ElementType;
}

const steps: MethodStep[] = [
    {
        number: "01",
        title: "Discover",
        description:
            "We dive deep into understanding your business, audience, and goals. Through strategic research and discovery sessions, we uncover insights that shape the foundation of your project.",
        Icon: Search,
    },
    {
        number: "02",
        title: "Design",
        description:
            "Our creative team crafts stunning visual concepts that align with your brand identity. We iterate based on your feedback until every pixel is perfect.",
        Icon: Palette,
    },
    {
        number: "03",
        title: "Build",
        description:
            "We bring designs to life with clean, scalable code. Our development process ensures your website is fast, responsive, and built to modern standards.",
        Icon: Code,
    },
    {
        number: "04",
        title: "Launch & Support",
        description:
            "We handle the launch with precision and provide ongoing support to ensure your digital presence continues to thrive and evolve with your business.",
        Icon: Rocket,
    },
];

export default function StudioMethod() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate section title
            gsap.from(".method-title", {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Animate subtitle
            gsap.from(".method-subtitle", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Animate step cards
            gsap.from(".method-step", {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".method-grid",
                    start: "top 85%",
                },
            });

            // Animate connecting line
            gsap.from(".method-line", {
                scaleX: 0,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".method-grid",
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/10 overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="method-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Our Method
                        <span className="text-[#ff4d29]">.</span>
                    </h2>
                    <p className="method-subtitle text-lg md:text-xl text-white/60 leading-relaxed">
                        We follow a proven process that transforms ideas into exceptional
                        digital experiences. Every project is a journey of collaboration and
                        creativity.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="method-grid relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="method-line hidden lg:block absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff4d29]/0 via-[#ff4d29] to-[#ff4d29]/0 origin-left" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="method-step group relative bg-white/[0.02] rounded-2xl p-8 border border-white/5 hover:border-[#ff4d29]/30 transition-all duration-500"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-4 left-8 bg-[#ff4d29] text-white text-sm font-bold px-4 py-1 rounded-full">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#ff4d29]/10 transition-colors duration-300">
                                    <step.Icon className="w-7 h-7 text-[#ff4d29]" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff4d29] transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ff4d29]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
