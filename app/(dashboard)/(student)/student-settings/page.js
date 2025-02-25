import BackToTop from "@/app/backToTop";
import SettingPage from "./(settings)";

export const metadata = {
  title: "Student Settings - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SettingLayout = () => {
  return (
    <>
      <SettingPage />

      <BackToTop />
    </>
  );
};

export default SettingLayout;
