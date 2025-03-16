import BackToTop from "@/app/backToTop";
import SearchPage from "./(search)";

export const metadata = {
  title: "Search - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
