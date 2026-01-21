"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            // Title animation
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1.2,
                    ease: "power4.out"
                }
            );

            // Subtitle
            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            );

            // CTA
            tl.fromTo(
                ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
        >
            {/* Background Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(255, 77, 41, 0.08) 0%, transparent 50%)"
                }}
            />

            {/* Content */}
            <div className="relative z-10 section-container text-center py-32">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#2a2a2a] bg-[#141414]">
                    <span className="w-2 h-2 rounded-full bg-[#ff4d29] animate-pulse" />
                    <span className="text-xs font-medium text-[#999] uppercase tracking-wider">
                        Available for projects
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    className="display-xl text-white mb-8"
                >
                    Ovela Studio
                    <span className="text-[#ff4d29]">®</span>
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-[#666] max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Premium design studio crafting exceptional digital experiences
                    that drive results and inspire action.
                </p>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#work" className="btn btn-primary">
                        View our work
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#services" className="btn btn-outline">
                        Our services
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-[#666] uppercase tracking-wider">
                    Scroll
                </span>
                <ArrowDown className="w-4 h-4 text-[#666] animate-bounce" />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 text-xs text-[#666] hidden lg:block">
                <span className="uppercase tracking-widest">Est. 2024</span>
            </div>
            <div className="absolute top-8 right-8 text-xs text-[#666] hidden lg:block">
                <span className="uppercase tracking-widest">Design Studio</span>
            </div>
        </section>
    );
}
