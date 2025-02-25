"use client";

import { useEffect } from "react";
import sal from "sal.js";
import { Provider } from "react-redux";

import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BlogGrid from "@/components/Blogs/BlogGrid";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const BlogGridPage = ({ getAllBlogs }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner col="col-lg-12" text="All Blog" blogdata={getAllBlogs} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGrid
                isPagination={true}
                blogdata={getAllBlogs}
                top={true}
                start={1}
                end={6}
              />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogGridPage;
