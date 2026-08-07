import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import numeral from "numeral"

export const PropertyFeatures = ({price, bedrooms, bathrooms, parking, petFriendly}) => {
  return <div className="max-w-lg my-10 bg-white mb-10 text-center">
    <div>

    <div>
      <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
    </div>
    <div>
      <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
    </div>
    <div>
      {!!petFriendly && 
        <>
          <FontAwesomeIcon icon={faDog} /> {petFriendly} petFriendly
        </>
      }
    </div>
    <div>
      {!!parking && 
        <>
          <FontAwesomeIcon icon={faCar} /> {parking} parking
        </>
      }
    </div>
    <h3>
      ${numeral(price).format("0,0")}
    </h3>

    </div>
  </div>
}