import BackToTop from "@/app/backToTop";
import SingleBlog from "../index";
import BlogLayout from "../page";

import { getPostBySlug, getAllPostsMeta } from "@/mdx";

const getPageContent = async (slug) => {
  try {
    const { meta, content } = await getPostBySlug(slug);
    return { meta, content };
  } catch (error) {
    <BlogLayout />;
  }
};

export async function generateMetadata({ params }) {
  try {
    const { meta } = await getPageContent(params.slug);
    return { title: meta.title };
  } catch (error) {
    <BlogLayout />;
  }
}

const PostFormatQuotelayout = async ({ params }) => {
  try {
    const { content } = await getPageContent(params.slug);

    const blog = await getAllPostsMeta();

    return (
      <>
        <SingleBlog getParams={content} getAllblog={blog} />
        <BackToTop />
      </>
    );
  } catch (error) {
    <BlogLayout />;
  }

  const extractNumberFromPathname = (pathname) => {
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];
    const match = lastPart.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  const blogId = extractNumberFromPathname(params.slug);

  if (blogId > 14) {
    return <BlogLayout />;
  }
};

export default PostFormatQuotelayout;
