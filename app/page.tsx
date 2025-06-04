import React from "react";
import GithubSection from "@/components/sections/github-section";
import InfoSection from "@/components/info-section";
import ContactSection from "@/components/sections/contact-section";
import BlogSection from "@/components/sections/blog-section";
import SnapScrollContainer from "@/components/snap-scroll-container";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh]">
      <SnapScrollContainer>
        <InfoSection />
        <GithubSection />
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </SnapScrollContainer>
    </div>
  );
}
