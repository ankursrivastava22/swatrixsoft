import BackToTop from "@/app/backToTop";
import CategoriesPage from "./(categories)";

export const metadata = {
  title: "Categories - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CategoriesLayout = () => {
  return (
    <>
      <CategoriesPage />

      <BackToTop />
    </>
  );
};

export default CategoriesLayout;
