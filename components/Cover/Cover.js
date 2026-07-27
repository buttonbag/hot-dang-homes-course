import Image from "next/image";

export const Cover = ({children, background}) => {
  return <div className="h-screen text-yellow-500 bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    <Image 
    alt="Cover" 
    fill 
    className="object-cover mix-blend-soft-light" 
    src={background}/>
      <div >
        {children}
      </div>
    </div>;
};