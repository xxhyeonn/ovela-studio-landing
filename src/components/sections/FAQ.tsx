"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "What is your design process?",
        answer: "Our process starts with a discovery phase where we understand your goals and needs. Then we move into design, creating concepts and iterating based on feedback. Finally, we deliver production-ready files or develop the final product.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Timeline varies by project scope. A website design typically takes 4-6 weeks, while branding projects can take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
        question: "Do you offer development services?",
        answer: "Yes! We offer full-stack development services for web applications, including Webflow, React, Next.js, and custom solutions. We can also hand off designs to your development team with detailed documentation.",
    },
    {
        question: "What if I'm not happy with the design?",
        answer: "Your satisfaction is our priority. We include revision rounds in every project and work collaboratively throughout the process. For subscription plans, we offer unlimited revisions until you're completely satisfied.",
    },
    {
        question: "How do payments work?",
        answer: "For project work, we typically require a 50% deposit to begin, with the remaining balance due upon completion. Subscription plans are billed monthly and can be paused or cancelled anytime.",
    },
];

export default function FAQ() {
    const sectionRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".faq-item",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
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

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="section-padding bg-[#0a0a0a] border-t border-[#2a2a2a]"
        >
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left - Title */}
                    <div>
                        <span className="badge mb-4">FAQ</span>
                        <h2 className="display-md text-white mb-6">
                            Need<br />Answers?
                        </h2>
                        <p className="text-[#666] text-lg max-w-md">
                            Have questions? We've got answers. If you don't find what
                            you're looking for, feel free to reach out.
                        </p>
                    </div>

                    {/* Right - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-item border border-[#2a2a2a] rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#141414] transition-colors"
                                >
                                    <span className="text-lg font-medium text-white pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#666] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${openIndex === index ? "max-h-96" : "max-h-0"}
                  `}
                                >
                                    <div className="px-6 pb-6 text-[#999] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
