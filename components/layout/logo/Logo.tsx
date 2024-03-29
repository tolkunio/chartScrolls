import Link from "next/link";
import Image from "next/image";
type LogoPropsType={
    width:number,
    height:number
}

const Logo = ({width,height}:LogoPropsType) => {
    return (
        <Link href={'/'}>
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