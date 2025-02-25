import UniversityStatusPage from "./(university-status)";
import BackToTop from "../backToTop";

export const metadata = {
  title: "University Status - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const UniversityStatusLayout = () => {
  return (
    <>
      <UniversityStatusPage />
      <BackToTop />
    </>
  );
};

export default UniversityStatusLayout;
