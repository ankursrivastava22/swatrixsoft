import BackToTop from "@/app/backToTop";
import AboutPage from "./(about)";

export const metadata = {
  title: "About - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
