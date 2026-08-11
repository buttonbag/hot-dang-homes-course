"use client"
import { useEffect, useState } from "react"
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import { Filters } from "./Filters";

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();
  const pathname = usePathname();

  const search = async () => {
    
    const {page, petFriendly, parking, minPrice, maxPrice} = queryString.parse(window.location.search);
    
    const filters = {};
      if (petFriendly === "true") {
        filters.petFriendly = true;
      }
      if (parking === "true") {
        filters.parking = true;
      }
      if (minPrice) {
        filters.minPrice = parseInt(minPrice);
      }
      if (maxPrice) {
        filters.maxPrice = parseInt(maxPrice);
      }

    const res = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || 1),
        ...filters
      })
    });
    const data = await res.json();
    console.log("SEARCH DATA: ", data);
    setProperties(data.properties);
    setTotalResults(data.total);
  };

  const handlePageClick = (pageNumber) => {
    const {
      petFriendly,
      parking,
      minPrice,
      maxPrice,
    } = queryString.parse(window.location.search);

   router.push(`${pathname}?page=${pageNumber}&petFriendly=${
      petFriendly === "true"
    }&parking=${
      parking === "true"
    }&minPrice=${minPrice}&maxPrice=${maxPrice}`);

  }
  
  useEffect(() => {
    search();
  }, []);
  
  const handleSearch = ({petFriendly, parking, minPrice, maxPrice,}) => {
    // update browser url
    // search
   router.push(`${pathname}?page=1&petFriendly=${
      !!petFriendly
    }&parking=${
      !!parking
    }&minPrice=${
      minPrice
    }&maxPrice=${
      maxPrice
    }`);
    console.log("HANDLE SEARCH: ", petFriendly, parking, minPrice, maxPrice,);

  };

  return <div>
    <Filters onSearch={handleSearch} />
    <Results properties={properties} />
    <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
  </div>
}