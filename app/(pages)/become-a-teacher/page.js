import BackToTop from "@/app/backToTop";
import TeacherPage from "./(become-a-teacher)";

export const metadata = {
  title: "Become a Teacher - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
