"use client";

import { cn } from "@/util/utils";
import React from "react";

export default function SnapScrollContainer({
  children,
}: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const sections = Array.isArray(children) ? children : [children];

  const handleWheel = (e: React.WheelEvent<HTMLDivElement> | undefined) => {
    if (isScrolling) return;
    if (e === undefined) return;

    setIsScrolling(true);

    if (e.deltaY > 0 && activeSection < sections.length - 1) {
      // Scroll down
      setActiveSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeSection > 0) {
      // Scroll up
      setActiveSection((prev) => prev - 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  React.useEffect(() => {
    document.getElementById(`section-${activeSection}`)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeSection]);

  return (
    <div
      className="flex flex-col snap-y h-[100dvh] w-[100dvw] overflow-y-auto scrollbar-thin scrollbar-track-bg scrollbar-thumb-text"
      onWheel={handleWheel}
    >
      <div className="absolute group top-1/2 -translate-y-1/2 left-6 h-fit w-fit p-2 rounded-full bg-bg space-y-2">
        {sections.map((_, index) => (
          <SectionTooltip
            key={index}
            section={index}
            activeSection={activeSection === index}
            setActiveSection={setActiveSection}
          />
        ))}
      </div>
      {sections.map((section, index) => (
        <div
          id={`section-${index}`}
          key={index}
          className="snap-center w-[100dvw] h-[100dvh]"
        >
          {section}
        </div>
      ))}
    </div>
  );
}

const SectionTooltip = ({
  section,
  activeSection,
  setActiveSection,
}: {
  section: number;
  activeSection: boolean;
  setActiveSection: (section: number) => void;
}) => {
  const stylesMap: Record<number, string> = {
    0: cn(
      "group-hover:border-mauve",
      activeSection
        ? "bg-mauve grayscale-0 border-mauve"
        : "bg-crust border-subtext",
    ),
    1: cn(
      "group-hover:border-blue",
      activeSection
        ? "bg-blue grayscale-0 border-blue"
        : "bg-crust border-subtext",
    ),
    2: cn(
      "group-hover:border-teal",
      activeSection
        ? "bg-teal grayscale-0 border-teal"
        : "bg-crust border-subtext",
    ),
    3: cn(
      "group-hover:border-green",
      activeSection
        ? "bg-green grayscale-0 border-green"
        : "bg-crust border-subtext",
    ),
    4: cn(
      "group-hover:border-yellow",
      activeSection
        ? "bg-yellow grayscale-0 border-yellow"
        : "bg-crust border-subtext",
    ),
  };

  const styles = stylesMap[section % 5];

  return (
    <div
      onClick={() => setActiveSection(section)}
      className={cn(
        "w-5 h-8 rounded-full border-2 duration-500 cursor-pointer",
        styles,
      )}
    />
  );
};
