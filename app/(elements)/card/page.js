import BackToTop from "@/app/backToTop";
import CardPage from "./(card)";

export const metadata = {
  title: "Card - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const CardLayout = () => {
  return (
    <>
      <CardPage />

      <BackToTop />
    </>
  );
};

export default CardLayout;
