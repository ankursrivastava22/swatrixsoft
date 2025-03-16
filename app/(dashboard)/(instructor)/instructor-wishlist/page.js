import BackToTop from "@/app/backToTop";
import WishlistPage from "./(wishlist)";

export const metadata = {
  title:
    "Instructor Wishlist Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const WishlistLayout = () => {
  return (
    <>
      <WishlistPage />
      <BackToTop />
    </>
  );
};

export default WishlistLayout;
