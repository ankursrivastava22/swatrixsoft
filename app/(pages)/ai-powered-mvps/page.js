import BackToTop from "@/app/backToTop";
import AIPoweredMvpsPage from "./(ai-powered-mvps)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AIPoweredMVPSLayout = () => {
  return (
    <>
      <AIPoweredMvpsPage />

      <BackToTop />
    </>
  );
};

export default AIPoweredMVPSLayout;
