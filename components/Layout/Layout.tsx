import {NextPage} from "next";
import {PropsWithChildren,ReactElement} from "react";
import Header from "@/components/header/Header";

export const Layout:NextPage<PropsWithChildren>=({children})=>{
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}
export const getLayout=(page:ReactElement)=>{
    return <Layout>{page}</Layout>
}