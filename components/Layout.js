import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Coin Tracker</title>
        <meta name="Keywords" content="nextjs"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <img src="logo.png" className="logo" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
