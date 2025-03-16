import BackToTop from "@/app/backToTop";
import LoginPage from "./(login)";

export const metadata = {
  title: "Login & Register - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LoginLayout = () => {
  return (
    <>
      <LoginPage />
      <BackToTop />
    </>
  );
};

export default LoginLayout;
