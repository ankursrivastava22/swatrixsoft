"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import TeamOne from "@/components/Team/TeamOne";
import TeamHead from "@/components/Team/TeamHead";
import TeamTwo from "@/components/Team/TeamTwo";
import TeamThree from "@/components/Team/TeamThree";
import TeamFour from "@/components/Team/TeamFour";
import TeamFive from "@/components/Team/TeamFive";
import TeamSix from "@/components/Team/TeamSix";
import TeamSeven from "@/components/Team/TeamSeven";
import TeamEight from "@/components/Team/TeamEight";
import TeamNine from "@/components/Team/TeamNine";
import TeamTen from "@/components/Team/TeamTen";

const InstructorPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Instructor" text="Instructor" />

          <div className="rbt-team-area bg-color-white rbt-section-gap">
            <TeamOne />
          </div>
          <div className="rbt-team-area bg-color-white rbt-section-gapBottom">
            <div className="container">
              <TeamHead
                title="Team (Carousel Style)."
                desc="Awesome Carousel Style."
              />
              <TeamTwo />
            </div>
          </div>
          <div className="rbt-team-area bg-color-white rbt-section-gapBottom">
            <TeamThree />
          </div>
          <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
            <TeamFour isHead={true} />
          </div>
          <div className="rbt-team-area bg-color-white rbt-section-gap">
            <TeamFive />
          </div>
          <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
            <TeamSix />
          </div>
          <div className="rbt-team-area bg-color-white rbt-section-gap">
            <TeamSeven />
          </div>
          <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
            <TeamEight />
          </div>
          <div className="rbt-team-area bg-color-white rbt-section-gap">
            <TeamNine />
          </div>
          <div className="rbt-team-area bg-gradient-8 rbt-section-gap">
            <TeamTen />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default InstructorPage;
