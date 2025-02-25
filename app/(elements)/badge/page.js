import BackToTop from "@/app/backToTop";
import BadgePage from "./(badge)";

export const metadata = {
  title: "Badge - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
