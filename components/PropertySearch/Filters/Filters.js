import { Input } from "components/Input"
import { useEffect, useState } from "react"
import queryString from 'query-string';

export const Filters = ({onSearch}) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [parking, setParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState("");

  const validatePrices = (min, max) => {
    if (min === "" || max === "") { //check if min max has value
      return "";
    }

    const minValue = parseInt(min, 10); //evaluate if values can be converted to integers or NaN
    const maxValue = parseInt(max, 10);

    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) { //error if NaN
      return "Prices must be valid numbers.";
    }

    if (minValue >= maxValue) { //check if min is more than max
      return "Min price must be less than max price.";
    }

    return ""; //return if tests pass
  };

  const handleSearch = () => {
    const validationError = validatePrices(minPrice, maxPrice);

    if (validationError) { //set error if true
      setError(validationError);
      return;
    }

    setError("");
    onSearch({
      petFriendly,
      parking,
      minPrice,
      maxPrice,
    });
  }

  useEffect(()=>{
    const {
      petFriendly: petFriendlyInit,
      parking: parkingInit,
      minPrice: minPriceInit,
      maxPrice: maxPriceInit,
    } = queryString.parse(window.location.search);

    setPetFriendly(petFriendlyInit === "true");
    setParking(parkingInit === "true");
    setMinPrice(minPriceInit || "");
    setMaxPrice(maxPriceInit || "");
  }, [])

  return (
    <div className="max-w-5xl mx-auto my-5 flex flex-col gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      
      <div>

        <span>Min price</span>
        <Input type="number" value={minPrice} onChange={(e)=>{setMinPrice(e.target.value)}} />

        <span>Max price</span>
        <Input type="number" value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)}} />

        {error ? (
          <p className="text-red-600">{error}</p>
        ) : null}

      </div>

        <div className="flex gap-5">
          <div>
            <div>
              <label>
                <input type="checkbox" checked={parking} onChange={()=>{setParking(value => !value)}} />
                <span className="pl-2">has parking</span>
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" checked={petFriendly} onChange={()=>{setPetFriendly(value => !value)}} />
                <span className="pl-2">pet friendly</span>
              </label>
            </div>
          </div>
          
          <div><button className="btn" onClick={handleSearch} >Search</button></div>
        </div>

    </div>
  )
}