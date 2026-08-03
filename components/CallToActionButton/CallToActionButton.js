import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({align, destination, label}) => {
  console.log("CTA: ",  align, destination, label);
  const alignMap = {
    left:  "text-left",
    center: "text-center",
    right: "text-right",
  }
  
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={label}/>
    </div>
  )
}