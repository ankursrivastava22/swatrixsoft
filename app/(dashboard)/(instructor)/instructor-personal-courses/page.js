import BackToTop from "@/app/backToTop";
import PersonalCoursesPage from "./(personal-courses)";

export const metadata = {
  title:
    "Instructor Personal Courses History Attempts Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const PersonalCoursesLayout = () => {
  return (
    <>
      <PersonalCoursesPage />

      <BackToTop />
    </>
  );
};

export default PersonalCoursesLayout;
