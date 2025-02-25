import BackToTop from "@/app/backToTop";
import StyleGuidePage from "./(style-guide)";

export const metadata = {
  title: "Style Guide - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
