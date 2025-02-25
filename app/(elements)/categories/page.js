import BackToTop from "@/app/backToTop";
import CategoriesPage from "./(categories)";

export const metadata = {
  title: "Categories - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
