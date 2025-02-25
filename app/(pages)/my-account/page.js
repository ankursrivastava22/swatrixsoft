import BackToTop from "@/app/backToTop";
import MyAccountPage from "./(my-account)";

export const metadata = {
  title: "My Account - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const MyAccountLayout = () => {
  return (
    <>
      <MyAccountPage />

      <BackToTop />
    </>
  );
};

export default MyAccountLayout;
