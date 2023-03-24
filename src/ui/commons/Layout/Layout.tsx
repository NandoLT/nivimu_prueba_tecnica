import Header from './Header/Header';
import Footer from "./Footer/Footer";

import "./Layout.css";


type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return(
    <>
      <Header />
      <div className="layout">
          <main className="main">
              <section className="layoutContent">
                {children}
              </section>
          </main>
          <Footer />
      </div>
    </>
  );
}

export default Layout;