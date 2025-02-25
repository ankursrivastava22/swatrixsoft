"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Separator from "@/components/Common/Separator";
import FooterTwo from "@/components/Footer/Footer-Two";
import CreateCourse from "@/components/create-course/CreateCourse";

const CreateCoursePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <div className="rbt-create-course-area bg-color-white rbt-section-gap">
            <div className="container">
              <CreateCourse />
            </div>
          </div>

          <Separator />
          <FooterTwo />
        </Context>
      </Provider>
    </>
  );
};

export default CreateCoursePage;
