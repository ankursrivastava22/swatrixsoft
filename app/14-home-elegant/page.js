import BackToTop from "../backToTop";
import HomeElegantPage from "./(home-elegant)";

export const metadata = {
  title: "Home Elegant - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
