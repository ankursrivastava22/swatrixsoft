"use client";

import { usePathname } from "next/navigation";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
import Instagram from "@/components/Instagram/Instagram";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";

export default function SinglePostFormatStandard({ getAllblog }) {
  const pathname = usePathname();

  const extractNumberFromPathname = (pathname) => {
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];
    const match = lastPart.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  const blogId = extractNumberFromPathname(pathname);

  const matchedBlog = getAllblog.find((post) => post.id === blogId);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <div className="rbt-overlay-page-wrapper">
            <BlogBreadCrumb matchedBlog={matchedBlog} />
            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
                  matchedBlog={matchedBlog !== undefined ? matchedBlog : ""}
                />
                <div className="related-post pt--60">
                  <div className="section-title text-start mb--40">
                    <span className="subtitle bg-primary-opacity">
                      Related Post
                    </span>
                    <h4 className="title">Similar Post</h4>
                  </div>
                  <BlogListItems selectedBlog={getAllblog} start={1} end={4} />
                </div>
              </div>
            </div>

            <Instagram />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
}
