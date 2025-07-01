"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuData from "../../data/MegaMenu.json";
import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";
import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const pathname = usePathname();
  const isActive = (href) => pathname.startsWith(href);
  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {/* 1) HOME */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* 2) ABOUT US - Direct link to /about-us-01 */}
        <li>
          <Link href="/about-us-01">AboutUs</Link>
        </li>

        {/* 3) SERVICES */}
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={activeMenuItem === "dashboard" ? "open" : ""}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Services
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  return data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map((submenuItem, submenuItemIndex) => (
                          <li key={submenuItemIndex}>
                            <Link
                              className={isActive(submenuItem.link) ? "active" : ""}
                              href={submenuItem.link}
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ));
                }
                return null;
              })}
          </ul>
        </li>

        {/* 4) PORTFOLIO - Now directly links to /service */}
        <li>
          <Link href="/service">Portfolio</Link>
        </li>

        {/* 5) BLOG/INSIGHTS - Direct link to /blog-list */}
        <li>
          <Link href="/blog-list">Blog/Insights</Link>
        </li>

        {/* 6) CONTACT - Direct link to /contact */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
