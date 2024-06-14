'use client'

import Hero from "./components/Hero";
import SkillsSection from "./components/infobox";
import { FloatingNav } from "./components/ui/floatingNav";
import Footer from "./components/ui/footer";
import Grid from "./components/ui/grid";
import RecentProjects from "./components/ui/projects";

const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

export default function Page() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <SkillsSection />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    )
}