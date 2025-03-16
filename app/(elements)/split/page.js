import BackToTop from "@/app/backToTop";
import SplitPage from "./(split)";

export const metadata = {
  title: "Split - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SplitLayout = () => {
  return (
    <>
      <SplitPage />
      <BackToTop />
    </>
  );
};

export default SplitLayout;
