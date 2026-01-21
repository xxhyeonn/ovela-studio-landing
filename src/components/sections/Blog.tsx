"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    featured?: boolean;
}

const posts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Web Design: Trends to Watch in 2025",
        excerpt:
            "Explore the emerging design trends that are shaping the future of digital experiences, from AI-driven personalization to immersive 3D interactions.",
        category: "Design",
        readTime: "5 min read",
        date: "Jan 15, 2025",
        image: "linear-gradient(135deg, #ff4d29 0%, #ff6b4a 100%)",
        featured: true,
    },
    {
        id: 2,
        title: "Building Brands That Resonate",
        excerpt:
            "A deep dive into creating authentic brand identities that connect with audiences on an emotional level.",
        category: "Branding",
        readTime: "4 min read",
        date: "Jan 10, 2025",
        image: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    },
    {
        id: 3,
        title: "Performance Optimization Secrets",
        excerpt:
            "Essential techniques for blazing-fast websites that deliver exceptional user experiences.",
        category: "Development",
        readTime: "6 min read",
        date: "Jan 5, 2025",
        image: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    },
    {
        id: 4,
        title: "The Psychology of Color in UI",
        excerpt:
            "How strategic color choices influence user behavior and create memorable digital products.",
        category: "Design",
        readTime: "3 min read",
        date: "Dec 28, 2024",
        image: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    },
];

export default function Blog() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate section header
            gsap.from(".blog-header", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Animate featured post
            gsap.from(".featured-post", {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".featured-post",
                    start: "top 85%",
                },
            });

            // Animate blog cards
            gsap.from(".blog-card", {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-grid",
                    start: "top 85%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const featuredPost = posts.find((p) => p.featured);
    const regularPosts = posts.filter((p) => !p.featured);

    return (
        <section
            ref={sectionRef}
            className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/10"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="blog-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            Insights
                            <span className="text-[#ff4d29]">.</span>
                        </h2>
                        <p className="text-lg text-white/60 max-w-xl">
                            Thoughts, learnings, and perspectives from our design journey.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-white hover:text-[#ff4d29] transition-colors font-medium"
                    >
                        View All Articles
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <a
                        href="#"
                        className="featured-post group block bg-white/[0.02] rounded-3xl overflow-hidden border border-white/5 hover:border-[#ff4d29]/30 transition-all duration-500 mb-8"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image */}
                            <div
                                className="aspect-[4/3] md:aspect-auto md:min-h-[400px]"
                                style={{ background: featuredPost.image }}
                            />

                            {/* Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-[#ff4d29]/10 text-[#ff4d29] text-xs font-semibold rounded-full">
                                        Featured
                                    </span>
                                    <span className="text-white/40 text-sm">
                                        {featuredPost.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#ff4d29] transition-colors">
                                    {featuredPost.title}
                                </h3>

                                <p className="text-white/60 mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white/40 text-sm">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </div>
                                    <span className="text-white/40 text-sm">
                                        {featuredPost.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                )}

                {/* Blog Grid */}
                <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                        <a
                            key={post.id}
                            href="#"
                            className="blog-card group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-[#ff4d29]/30 transition-all duration-500"
                        >
                            {/* Image */}
                            <div
                                className="aspect-video"
                                style={{ background: post.image }}
                            />

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[#ff4d29] text-xs font-semibold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/40 text-sm">{post.readTime}</span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ff4d29] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-white/40 text-sm">{post.date}</span>
                                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ff4d29] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
