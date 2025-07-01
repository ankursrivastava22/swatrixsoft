import BackToTop from "@/app/backToTop";
import MobileTesting from "@/components/mobile-testing/MobileTesting";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const MobileTestingLayout = () => {
  return (
    <>
      <MobileTesting />

      <BackToTop />
    </>
  );
};

export default MobileTestingLayout;
