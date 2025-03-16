import BackToTop from "@/app/backToTop";
import AboutPage from "./(about)";

export const metadata = {
  title: "About - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AboutLayout = () => {
  return (
    <>
      <AboutPage />

      <BackToTop />
    </>
  );
};

export default AboutLayout;
