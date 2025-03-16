import HomePageLayout from "./(main-demo)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Swatrixsoft - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const HomePage = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <HomePageLayout getBlog={blog} />
    </>
  );
};

export default HomePage;
