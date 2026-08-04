import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"

export const PropertyCard = ({
    title, 
    destination, 
    bathrooms, 
    bedrooms, 
    parking, 
    petFriendly, 
    price, 
    image,
    alt
  }) => {
  return <Link href={destination} className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
    <div className="flex w-full">
      <Image src={image} height="200" width="300" objectFit="cover" alt={alt} />
    </div>
    <div className="mt-3 text-lg font-bold">{title}</div>
    <div className="text-lg">${numeral(price).format("0,0")}</div>
    <div className="flex justify-between text-sm mt-3">
      <div>
        <FontAwesomeIcon icon={faBath} /><span className="pl-2">{bathrooms} Bath</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBed} /><span className="pl-2">{bedrooms} Beds</span>
      </div>
    </div>
    
    {(!!parking || !!petFriendly) && (
      <div className="flex justify-between text-sm mt-3">
        <div>
          {!!parking &&
           <>
            <FontAwesomeIcon icon={faCar} /><span className="pl-2">{parking} Parking Available</span>
           </>
          }
        </div>
        <div>
          {!!petFriendly &&
           <>
            <FontAwesomeIcon icon={faDog} /><span className="pl-2">{petFriendly} Pet Friendly</span>
           </>
          }
        </div>
      </div>
    )}
  </Link>
}