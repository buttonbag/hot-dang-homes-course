import Image from "next/image";

export const Cover = ({children, background}) => {
  return <section className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    <Image 
      alt="" 
      aria-hidden="true"
      fill 
      priority
      className="object-cover mix-blend-soft-light" 
      src={background}/>
      <div className="max-w-5xl mx-auto z-10">
        {children}
      </div>
    </section>;
};