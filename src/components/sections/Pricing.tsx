"use client";

import { useEffect, useRef } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
    {
        id: 1,
        name: "Monthly",
        description: "Perfect for ongoing design support",
        price: "$4,995",
        period: "/month",
        features: [
            "Unlimited design requests",
            "Unlimited revisions",
            "One request at a time",
            "Average 48h delivery",
            "Pause or cancel anytime",
        ],
        popular: false,
        cta: "Get started",
    },
    {
        id: 2,
        name: "Project",
        description: "Ideal for one-time projects",
        price: "$12,000",
        period: "starting",
        features: [
            "Complete website design",
            "Brand identity package",
            "Motion design included",
            "Development handoff",
            "2 revision rounds",
        ],
        popular: true,
        cta: "Start a project",
    },
    {
        id: 3,
        name: "Enterprise",
        description: "For large-scale design needs",
        price: "Custom",
        period: "pricing",
        features: [
            "Dedicated design team",
            "Priority support",
            "Custom workflows",
            "Onboarding session",
            "NDA & contracts",
        ],
        popular: false,
        cta: "Contact us",
    },
];

export default function Pricing() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current?.querySelectorAll(".pricing-card");
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 70%",
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
            id="pricing"
            ref={sectionRef}
            className="section-padding bg-[#0a0a0a]"
        >
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="badge mb-4">Pricing</span>
                    <h2 className="display-md text-white mb-6">
                        Our Pricing.
                    </h2>
                    <p className="text-[#666] text-lg max-w-2xl mx-auto">
                        Transparent pricing with no hidden fees. Choose the plan
                        that best fits your needs and budget.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`
                pricing-card relative rounded-2xl p-8 lg:p-10
                transition-all duration-300 hover-lift
                ${plan.popular
                                    ? "bg-[#ff4d29]"
                                    : "bg-[#141414] border border-[#2a2a2a]"
                                }
              `}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white rounded-full">
                                    <span className="text-xs font-semibold text-[#0a0a0a] uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.popular ? "text-white/70" : "text-[#666]"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-4xl lg:text-5xl font-bold ${plan.popular ? "text-white" : "text-white"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm ${plan.popular ? "text-white/60" : "text-[#666]"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className={`
                      w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                      ${plan.popular ? "bg-white/20" : "bg-[#2a2a2a]"}
                    `}>
                                            <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-[#ff4d29]"}`} />
                                        </div>
                                        <span className={`text-sm ${plan.popular ? "text-white/80" : "text-[#999]"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href="#contact"
                                className={`
                  w-full btn justify-center
                  ${plan.popular
                                        ? "bg-white text-[#0a0a0a] hover:bg-[#f5f5f5]"
                                        : "btn-outline"
                                    }
                `}
                            >
                                {plan.cta}
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
