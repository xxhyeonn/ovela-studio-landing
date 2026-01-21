import SmoothScrollLayout from "@/components/layout/SmoothScrollLayout";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StudioIntro from "@/components/sections/StudioIntro";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import StudioMethod from "@/components/sections/StudioMethod";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Studio Introduction */}
          <StudioIntro />

          {/* Featured Projects */}
          <Projects />

          {/* Services */}
          <Services />

          {/* Pricing */}
          <Pricing />

          {/* Client Testimonials */}
          <Testimonials />

          {/* Our Method - Process Steps */}
          <StudioMethod />

          {/* FAQ */}
          <FAQ />

          {/* Blog / Insights */}
          <Blog />

          {/* Newsletter / Contact */}
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollLayout>
  );
}
