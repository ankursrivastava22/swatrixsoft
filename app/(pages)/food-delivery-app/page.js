import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(food-delivery-app)";
import FoodDeliverypage from "./(food-delivery-app)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const FoodDeliverypageLayout = () => {
  return (
    <>
      <FoodDeliverypage />

      <BackToTop />
    </>
  );
};

export default FoodDeliverypageLayout;
