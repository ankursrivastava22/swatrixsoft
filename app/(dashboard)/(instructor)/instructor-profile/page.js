import BackToTop from "@/app/backToTop";
import InstructorProfile from "./(profile)";

export const metadata = {
  title: "Instructor Profile - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const InstructorProfileLayout = () => {
  return (
    <>
      <InstructorProfile />
      <BackToTop />
    </>
  );
};

export default InstructorProfileLayout;
