import BackToTop from "@/app/backToTop";
import AdmissionGuidePage from "./(admission-guide)";

export const metadata = {
  title: "Admission Guide - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AdmissionGuideLayout = () => {
  return (
    <>
      <AdmissionGuidePage />

      <BackToTop />
    </>
  );
};

export default AdmissionGuideLayout;
