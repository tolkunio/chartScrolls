import s from './Footer.module.scss';
import Logo from "@/app/components/common/logo/Logo";
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
                    <Link href={'/about'}>About Us</Link>
                    <Link href={'/news'}>News</Link>
                </div>
                <div className={s.block}>
                    <span>Company</span>
                    <span>Contacts</span>
                </div>
                <div className={s.block}>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </div>
                <div className={s.block}>
                    <span>Notice</span>
                    <span>Cookie Notice</span>
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
