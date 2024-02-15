import s from './Logo.module.scss';
import Link from "next/link";
import Image from "next/image";
import logoImg from '../../../../assets/images/logo.png';

const Logo = () => {
    return (
        <Link href={'/'} classname={s.logo}>
            <Image
                src={logoImg}
                width={50}
                height={40}
                alt={'chartScrolls'}
                draggable={false}
            />
        </Link>
    );
};

export default Logo;
