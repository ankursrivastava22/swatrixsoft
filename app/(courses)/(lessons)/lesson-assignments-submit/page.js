import BackToTop from "@/app/backToTop";
import AssignmentsSubmitPage from "./(assignments-submit)";

export const metadata = {
  title: "Lesson Quiz Result - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
