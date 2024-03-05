import {NextPage} from "next";
import {PropsWithChildren} from "react";
import Header from "@/components/header/Header";
import {ReactElement} from "react";
import Footer from "@/components/footer/Footer";
import TickerBlock from "@/components/sections/tickerBlock/TickerBlock";

export const Layout:NextPage<PropsWithChildren>=({children})=>{
    return(
        <div>
            <Header/>
            <TickerBlock/>
            {children}

        </div>
    )
}
export const getLayout=(page:ReactElement)=>{
    return <Layout>{page}</Layout>
}