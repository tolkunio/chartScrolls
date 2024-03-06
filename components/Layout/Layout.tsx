import {NextPage} from "next";
import {PropsWithChildren,ReactElement} from "react";
import Header from "@/components/header/Header";
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