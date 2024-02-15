import s from './Logo.module.scss';
import Link from "next/link";
import Image from "next/image";
type LogoPropsType={
    width:number,
    height:number
}

const Logo = ({width,height}:LogoPropsType) => {
    return (
        <Link href={'/'} classname={s.logo}>
            <Image
                src='/icons/logo.svg'
                width={width}
                height={height}
                alt={'chartScrolls'}
                draggable={false}
            />
        </Link>
    );
};

export default Logo;