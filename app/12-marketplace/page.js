import BackToTop from "../backToTop";
import MarketplacePage from "./(marketplace)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Marketplace - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
