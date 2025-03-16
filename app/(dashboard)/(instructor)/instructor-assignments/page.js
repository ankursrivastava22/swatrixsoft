import BackToTop from "@/app/backToTop";
import AssignmentsPage from "./(assignments)";

export const metadata = {
  title:
    "Instructor Assignments - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AssignmentsLayout = () => {
  return (
    <>
      <AssignmentsPage />

      <BackToTop />
    </>
  );
};

export default AssignmentsLayout;
