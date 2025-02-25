import BackToTop from "@/app/backToTop";
import SearchPage from "./(search)";

export const metadata = {
  title: "Search - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SearchLayout = () => {
  return (
    <>
      <SearchPage />

      <BackToTop />
    </>
  );
};

export default SearchLayout;
