import BackToTop from "@/app/backToTop";
import CounterPage from "./(counter)";

export const metadata = {
  title: "Counter - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CounterLayout = () => {
  return (
    <>
      <CounterPage />

      <BackToTop />
    </>
  );
};

export default CounterLayout;
