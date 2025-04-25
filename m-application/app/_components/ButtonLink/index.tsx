import stlyes from "./index.module.css"
type Props ={
    href :string;
    children: React.ReactNode;
};



export default function ButtonLink({href,children}: Props) {
  return (
    <a href={href} className={stlyes.button}>
        {children}
        </a>
  );
}
