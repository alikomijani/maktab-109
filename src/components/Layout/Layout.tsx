import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main className="lg:container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
