"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".newsletter-content",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-padding bg-[#141414]"
        >
            <div className="section-container">
                <div className="newsletter-content max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="display-md text-white mb-6">
                        Let's work<br />together.
                    </h2>
                    <p className="text-[#666] text-xl mb-12 max-w-xl mx-auto">
                        Ready to bring your vision to life? Get in touch and let's
                        create something extraordinary.
                    </p>

                    {/* Email CTA */}
                    <a
                        href="mailto:hello@ovela.studio"
                        className="inline-flex items-center gap-4 group"
                    >
                        <span className="text-3xl lg:text-5xl font-bold text-[#ff4d29] group-hover:text-white transition-colors">
                            hello@ovela.studio
                        </span>
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#ff4d29] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                    </a>

                    {/* Newsletter Form */}
                    <div className="mt-16 pt-16 border-t border-[#2a2a2a]">
                        <p className="text-sm text-[#666] mb-6 uppercase tracking-wider">
                            Subscribe to our newsletter
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full text-white placeholder:text-[#666] focus:outline-none focus:border-[#ff4d29] transition-colors"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
