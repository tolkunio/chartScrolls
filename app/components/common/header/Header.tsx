import s from './Header.module.scss';
import Logo from "@/app/components/common/logo/Logo";
import Link from "next/link";

const menu = ['About us', 'News', 'Pricing', 'Contacts'];
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.logoBlock}>
                        <Logo/>
                        <span>ChartScrolls</span>
                    </div>
                    <div className={s.menuBlock}>
                        {menu.map((el) => <span key={el}>{el}</span>)}
                    </div>
                    <div className={s.authBlock}>
                        <Link href={'/signup'}>Sign Up</Link>
                        <Link href={'/signup'}>Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
