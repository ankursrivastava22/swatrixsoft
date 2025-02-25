import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-02)/index";

export const metadata = {
  title: "About Us 02 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
