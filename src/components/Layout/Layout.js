import { Fragment } from "react";
import Footer from "../Footer/Footer";
import TopHead from "../TopHead/TopHead";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <TopHead />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
