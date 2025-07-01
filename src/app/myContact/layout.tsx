import { Metadata } from "next";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Mohammad's Contact",
  description: "contact of mohammad khosravani",
};

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-slate-950 min-h-screen relative">{children}</div>
    </>
  );
};

export default Layout;
