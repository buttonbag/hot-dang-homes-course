"use client"
import { useEffect } from "react";

export const Calendar = ({dataUrl}) => {
  useEffect(()=>{
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);
  
  return (
    <div className="calendly-inline-widget max-w-5xl mx-auto" data-url={dataUrl} style={{height: 700 + "px"}}></div>
  )
}

