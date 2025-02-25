import BackToTop from "../backToTop";
import HomeTechnologyPage from "./(home-technology)";

export const metadata = {
  title: "Home Technology - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
