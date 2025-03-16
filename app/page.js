import BackToTop from "./backToTop";
import HomePage from "./01-main-demo/page";

export const metadata = {
  title: "Home - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
