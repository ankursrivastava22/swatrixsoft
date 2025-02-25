import BackToTop from "@/app/backToTop";
import CounterPage from "./(counter)";

export const metadata = {
  title: "Counter - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
