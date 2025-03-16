import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-01)/index";

export const metadata = {
  title: "About Us 01 - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};
const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
