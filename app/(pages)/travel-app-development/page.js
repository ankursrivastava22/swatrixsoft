import BackToTop from "@/app/backToTop";
import TravelAppPage from "./(travel-app-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const TravelAppPageLayout = () => {
  return (
    <>
      <TravelAppPage />

      <BackToTop />
    </>
  );
};

export default TravelAppPageLayout;
