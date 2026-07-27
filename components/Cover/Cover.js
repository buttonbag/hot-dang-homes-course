import Image from "next/image";

export const Cover = ({children, background}) => {
  return <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    <Image 
    alt="Cover" 
    fill 
    className="object-cover mix-blend-soft-light" 
    src={background}/>
    {children}</div>;
};