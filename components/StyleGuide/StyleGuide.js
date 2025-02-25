"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import ColorPalette from "./Sections/ColorPalette";
import Gradient from "./Sections/Gradient";
import Typography from "./Sections/Typography";
import FormElements from "./Sections/FormElements";
import Pagination from "./Sections/Pagination";
import Tooltips from "./Sections/Tooltips";
import Avatars from "./Sections/Avatars";
import AnimatedHeading from "./Sections/AnimatedHeading";
import BorderRadius from "./Sections/BorderRadius";
import ColorPaletteDark from "./Sections/ColorPaletteDark";

const StyleGuide = () => {
  const [currentSection, setCurrentSection] = useState("colorpalette");

  const sections = [
    { id: "colorPalette", label: "Color Palette" },
    { id: "colordarkPalette", label: "Color Dark Palette" },
    { id: "gradient", label: "Color Gradient" },
    { id: "typography", label: "Typography" },
    { id: "formElements", label: "Form Elements" },
    { id: "pagination", label: "Pagination" },
    { id: "tooltips", label: "Tooltips" },
    { id: "avatars", label: "Avatars" },
    { id: "animatedHeading", label: "Animated Heading" },
    { id: "rbtBorderRadius", label: "Border Radius" },
  ];

  useEffect(() => {
    const sectionIds = [
      "colorPalette",
      "colordarkPalette",
      "gradient",
      "typography",
      "formElements",
      "pagination",
      "tooltips",
      "avatars",
      "animatedHeading",
      "rbtBorderRadius",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3">
          <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
            <div className="inner">
              <div className="content-item-content">
                <div className="rbt-widget-details">
                  <div className="onepagenav">
                    <ul className="mainmenu rbt-course-details-list-wrapper">
                      {sections.map((sec, i) => (
                        <li
                          className={currentSection === sec.id ? "current" : ""}
                          key={i}
                        >
                          <ScrollLink
                            to={sec.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={{ cursor: "pointer" }}
                          >
                            {i + 1}. {sec.label}
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <ColorPalette />
          <ColorPaletteDark />
          <Gradient />
          <Typography />
          <FormElements />
          <Pagination />
          <Tooltips />
          <Avatars />
          <AnimatedHeading />
          <BorderRadius />
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
