import Header from "@/app/components/common/header/Header";
type LayoutProps = {
    children?: React.ReactNode
};
const Layout = ({children}:LayoutProps) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
