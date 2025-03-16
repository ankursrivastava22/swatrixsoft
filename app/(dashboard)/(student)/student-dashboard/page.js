import BackToTop from "@/app/backToTop";
import StudentDashboard from "./(dashboard)";

export const metadata = {
  title: "Student Dashboard - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const StudentDashboardLayout = () => {
  return (
    <>
      <StudentDashboard />
      <BackToTop />
    </>
  );
};

export default StudentDashboardLayout;
