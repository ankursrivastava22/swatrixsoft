import BackToTop from "@/app/backToTop";
import MyAccountPage from "./(my-account)";

export const metadata = {
  title: "My Account - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
