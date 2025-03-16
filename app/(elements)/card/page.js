import BackToTop from "@/app/backToTop";
import CardPage from "./(card)";

export const metadata = {
  title: "Card - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
