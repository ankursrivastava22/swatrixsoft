import BackToTop from "../backToTop";
import MarketplacePage from "./(marketplace)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Marketplace - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const MarketplaceLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <MarketplacePage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default MarketplaceLayout;
