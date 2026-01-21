"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: number;
    title: string;
    category: string;
    tags: string[];
    image: string;
    year: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Horizon Audio",
        category: "Branding / Web Design",
        tags: ["Branding", "Web Design"],
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop",
        year: "2024",
    },
    {
        id: 2,
        title: "Velocity Motors",
        category: "Product Design / Motion",
        tags: ["Product", "Motion"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
        year: "2024",
    },
    {
        id: 3,
        title: "Apex Fitness",
        category: "Web Design / Development",
        tags: ["Web Design", "Development"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
        year: "2023",
    },
    {
        id: 4,
        title: "Nova Tech",
        category: "Branding / UI Design",
        tags: ["Branding", "UI Design"],
        image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=1200&h=800&fit=crop",
        year: "2023",
    },
    {
        id: 5,
        title: "Stellar App",
        category: "Development / UI Design",
        tags: ["Development", "UI Design"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
        year: "2023",
    },
    {
        id: 6,
        title: "Eclipse Studio",
        category: "Branding / Motion",
        tags: ["Branding", "Motion"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
        year: "2024",
    },
];

const categories = ["All", "Branding", "Web Design", "Development", "UI Design", "Motion", "Product"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    // Filter projects when active filter changes
    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
                projects.filter((project) => project.tags.includes(activeFilter))
            );
        }
    }, [activeFilter]);

    // Animate filtered projects
    useEffect(() => {
        if (!projectsRef.current) return;

        const projectCards = projectsRef.current.querySelectorAll(".project-card");
        gsap.fromTo(
            projectCards,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );
    }, [filteredProjects]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Filter buttons animation
            gsap.fromTo(
                ".filter-btn",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".filter-container",
                        start: "top 85%",
                    },
                }
            );

            // Projects stagger
            const projectCards = projectsRef.current?.querySelectorAll(".project-card");
            if (projectCards) {
                gsap.fromTo(
                    projectCards,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsRef.current,
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
            id="work"
            ref={sectionRef}
            className="section-padding bg-[#0a0a0a]"
        >
            <div className="section-container">
                {/* Section Header */}
                <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span className="badge mb-4">Featured Work</span>
                        <h2 className="display-md text-white">
                            Selected<br />Projects.
                        </h2>
                    </div>
                    <p className="text-[#666] max-w-md text-lg">
                        A curated collection of our finest work, showcasing our
                        expertise across various industries and disciplines.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="filter-container flex flex-wrap gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-[#ff4d29] text-white"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {filteredProjects.map((project) => (
                        <a
                            key={project.id}
                            href="#"
                            className="project-card group block relative overflow-hidden rounded-2xl bg-[#141414] hover-lift"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-sm text-[#999] mb-2">{project.category}</p>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-[#666]">{project.year}</span>
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#ff4d29] transition-colors duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-white/40 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <a href="#" className="btn btn-outline">
                        View all projects
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
