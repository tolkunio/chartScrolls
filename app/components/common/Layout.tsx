import Footer from "@/app/components/common/footer/Footer";
import Header from "@/app/components/common/header/Header";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;
