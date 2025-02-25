import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";

export const metadata = {
  title: "Instructor - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const InstructorLayout = () => {
  return (
    <>
      <InstructorPage />
      <BackToTop />
    </>
  );
};

export default InstructorLayout;
