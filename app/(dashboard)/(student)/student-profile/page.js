import BackToTop from "@/app/backToTop";
import StudentProfile from "./(profile)";

export const metadata = {
  title: "Student Profile - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const StudentProfileLayout = () => {
  return (
    <>
      <StudentProfile />
      <BackToTop />
    </>
  );
};

export default StudentProfileLayout;
