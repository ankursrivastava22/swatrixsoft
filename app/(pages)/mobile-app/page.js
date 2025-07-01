import BackToTop from "@/app/backToTop";
import MobileDevelopment from "./(mobile-app-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const MobileDevelopmentLayout = () => {
  return (
    <>
      <MobileDevelopment />

      <BackToTop />
    </>
  );
};

export default MobileDevelopmentLayout;
