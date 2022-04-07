import Navbar from "../components/Navbar";
import "../styles/style.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
