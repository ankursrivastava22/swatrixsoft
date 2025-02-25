import BackToTop from "../backToTop";
import HomeElegantPage from "./(home-elegant)";

export const metadata = {
  title: "Home Elegant - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const HomeElegantLayout = () => {
  return (
    <>
      <HomeElegantPage />
      <BackToTop />
    </>
  );
};

export default HomeElegantLayout;
