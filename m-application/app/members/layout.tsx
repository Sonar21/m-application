import Sheet from "@/app/_components/Sheet"
import Hero from "../_components/Hero";
type Props ={
    children:React.ReactNode;
};
export default function RootLayout({children} :Props){
    
    return(
        <>
        <Hero title="Members" sub="メンバ"/>
         <Sheet>{children}</Sheet>;
        </>
    )
}