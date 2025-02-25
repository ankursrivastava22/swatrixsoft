"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BlogList from "@/components/Blogs/BlogList";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Banner from "@/components/Common/Banner";

const BlogListPage = ({ getAllBlogs }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner
            col="col-lg-10 offset-lg-1"
            text="All Blog"
            blogdata={getAllBlogs}
          />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogList isPagination={true} blogdata={getAllBlogs} />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogListPage;
