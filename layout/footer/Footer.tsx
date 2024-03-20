import s from './Footer.module.scss';
import Logo from "@/components/layout/logo/Logo";
import Link from "next/link";
const Footer = () => {
    return (
        <div className={s.footer}>
          <div className={s.container}>
            <div className={s.flexWrapper}>
                <div className={s.logo}>
                    <Logo width={37} height={29}/>
                    <span>ChartScrolls</span>
                </div>
                <div className={s.block}>
                    <span>© 2024  All Rights Reserved.</span>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Footer;
