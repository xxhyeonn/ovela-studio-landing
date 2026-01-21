"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        number: "01",
        title: "Web Design",
        description: "Crafting beautiful, responsive websites that convert visitors into customers.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    },
    {
        id: 2,
        number: "02",
        title: "Branding",
        description: "Building memorable brand identities that stand out in crowded markets.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    },
    {
        id: 3,
        number: "03",
        title: "Product Design",
        description: "Designing intuitive digital products that users love to interact with.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    },
    {
        id: 4,
        number: "04",
        title: "Motion Design",
        description: "Creating dynamic animations that bring your brand to life.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = sectionRef.current?.querySelectorAll(".service-item");
            if (items) {
                gsap.fromTo(
                    items,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative bg-[#ff4d29] py-24 lg:py-32 overflow-hidden"
        >
            <div className="section-container">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold uppercase tracking-widest text-white/60 border border-white/20 rounded-full">
                            What we do
                        </span>
                        <h2 className="display-md text-white">
                            Our<br />Services.
                        </h2>
                    </div>
                    <p className="text-white/70 max-w-md text-lg">
                        We offer a full range of design services to help your
                        business succeed in the digital landscape.
                    </p>
                </div>

                {/* Services List */}
                <div className="relative">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-item relative border-t border-white/20 last:border-b"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <a
                                href="#"
                                className="group flex items-center justify-between py-8 lg:py-12 transition-all duration-300"
                            >
                                {/* Left Side */}
                                <div className="flex items-center gap-6 lg:gap-12">
                                    <span className="text-sm text-white/40 font-medium">
                                        {service.number}
                                    </span>
                                    <h3 className="text-2xl lg:text-4xl font-bold text-white group-hover:translate-x-4 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Right Side */}
                                <div className="flex items-center gap-6">
                                    <p className="hidden lg:block text-white/60 max-w-xs text-sm">
                                        {service.description}
                                    </p>
                                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#ff4d29] transition-colors" />
                                    </div>
                                </div>
                            </a>

                            {/* Hover Image */}
                            <div
                                className={`
                  absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden
                  pointer-events-none z-10 hidden lg:block
                  transition-all duration-500 ease-out
                  ${activeIndex === index
                                        ? "opacity-100 scale-100 translate-x-0"
                                        : "opacity-0 scale-95 translate-x-4"
                                    }
                `}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
