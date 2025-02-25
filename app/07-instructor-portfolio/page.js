import BackToTop from "../backToTop";
import InstructorPortfolioPage from "./(instructor-portfolio)";

export const metadata = {
  title: "Instructor Portfolio - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
