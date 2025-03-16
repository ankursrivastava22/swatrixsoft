import BackToTop from "@/app/backToTop";
import StyleGuidePage from "./(style-guide)";

export const metadata = {
  title: "Style Guide - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const StyleGuideLayout = () => {
  return (
    <>
      <StyleGuidePage />
      <BackToTop />
    </>
  );
};

export default StyleGuideLayout;
