import Header from "@/app/components/common/header/Header";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div>{props.children}</div>
        </div>
    );
};

export default Layout;
