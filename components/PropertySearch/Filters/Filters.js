import { Input } from "components/Input"
import { useState } from "react"

export const Filters = ({onSearch}) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [parking, setParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch({
      petFriendly,
      parking,
      minPrice,
      maxPrice,
    });
  }

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      <form className="flex-1">

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

      </form>
      <form className="flex-1">

        <span>Min price</span>
        <Input type="number" value={minPrice} onChange={(e)=>{setMinPrice(e.target.value)}} />

      </form>
      <form className="flex-1">

        <span>Max price</span>
        <Input type="number" value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)}} />

      </form>

      <button className="btn" onClick={handleSearch} >Search</button>
    </div>
  )
}