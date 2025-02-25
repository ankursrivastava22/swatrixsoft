import BackToTop from "@/app/backToTop";
import CallToActionPage from "./(call-to-action)";

export const metadata = {
  title: "Call To Action - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const CallToActionLayout = () => {
  return (
    <>
      <CallToActionPage />

      <BackToTop />
    </>
  );
};

export default CallToActionLayout;
