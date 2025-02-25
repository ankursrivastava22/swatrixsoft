import BackToTop from "@/app/backToTop";
import AssignmentsSubmitPage from "./(assignments-submit)";

export const metadata = {
  title: "Lesson Quiz Result - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AssignmentsSubmitLayout = () => {
  return (
    <>
      <AssignmentsSubmitPage />
      <BackToTop />
    </>
  );
};

export default AssignmentsSubmitLayout;
