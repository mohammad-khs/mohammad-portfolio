import { FC} from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-slate-950 h-screen">{children}</div>
    </>
  );
};

export default Layout;
