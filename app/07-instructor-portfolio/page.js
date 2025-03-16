import BackToTop from "../backToTop";
import InstructorPortfolioPage from "./(instructor-portfolio)";

export const metadata = {
  title: "Instructor Portfolio - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const InstructorPortfolioLayout = () => {
  return (
    <>
      <InstructorPortfolioPage />
      <BackToTop />
    </>
  );
};

export default InstructorPortfolioLayout;
