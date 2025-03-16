import BackToTop from "@/app/backToTop";
import BadgePage from "./(badge)";

export const metadata = {
  title: "Badge - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BadgeLayout = () => {
  return (
    <>
      <BadgePage />

      <BackToTop />
    </>
  );
};

export default BadgeLayout;
