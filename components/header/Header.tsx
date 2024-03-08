import s from './Header.module.scss';
import Logo from "@/components/ui/logo/Logo";

const menu = ['About us', 'News', 'Pricing', 'Contacts'];
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.logoBlock}>
                        <Logo width={50} height={39}/>
                        <span>ChartScrolls</span>
                    </div>
                    <div className={s.menuBlock}>

                    </div>
                    <div className={s.authBlock}>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
