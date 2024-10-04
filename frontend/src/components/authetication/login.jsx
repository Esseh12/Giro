import Top from "../top";
import AuthNavbar from "../authetication/auth_nav";
import Footer from "../footer";
import LoginMiddle from "./login-middle";

const Login = () => {
  return (
    <>
      <Top />
      <AuthNavbar />
      <LoginMiddle />
      <Footer />
    </>
  );
};

export default Login;
