"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudioIntro() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Text animation
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-padding bg-[#0a0a0a] border-t border-[#2a2a2a]"
        >
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left - Large Title */}
                    <div>
                        <h2
                            ref={titleRef}
                            className="display-lg text-white"
                        >
                            Studio.
                        </h2>
                    </div>

                    {/* Right - Description */}
                    <div className="lg:pt-4">
                        <p
                            ref={textRef}
                            className="text-xl lg:text-2xl text-[#999] leading-relaxed"
                        >
                            We are a multidisciplinary design studio focused on creating
                            impactful digital experiences. Our team combines strategy,
                            design, and technology to build products that connect brands
                            with their audiences in meaningful ways.
                        </p>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "8", label: "Years" },
                                { number: "25+", label: "Clients" },
                                { number: "15", label: "Awards" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-[#666] uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
