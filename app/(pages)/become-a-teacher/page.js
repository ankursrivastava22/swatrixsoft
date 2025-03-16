import BackToTop from "@/app/backToTop";
import TeacherPage from "./(become-a-teacher)";

export const metadata = {
  title: "Become a Teacher - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};
const TeacherLayout = () => {
  return (
    <>
      <TeacherPage />

      <BackToTop />
    </>
  );
};

export default TeacherLayout;
