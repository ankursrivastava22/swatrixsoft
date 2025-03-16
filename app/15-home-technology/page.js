import BackToTop from "../backToTop";
import HomeTechnologyPage from "./(home-technology)";

export const metadata = {
  title: "Home Technology - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const HomeTechnologyLayout = () => {
  return (
    <>
      <HomeTechnologyPage />
      <BackToTop />
    </>
  );
};

export default HomeTechnologyLayout;
