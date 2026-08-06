import { useEffect, useState } from "react"
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters";

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter()

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

  const handlePageClick = async (pageNumber) => {
    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {shallow: true});
    search();
  }
  
  useEffect(() => {
    search();
  }, []);
  
  const handleSearch = async ({petFriendly, parking, minPrice, maxPrice,}) => {
    // update browser url
    // search
    await router.push(`${router.query.slug.join("/")}?page=1&petFriendly=${!!petFriendly}&parking=${!!parking}&minPrice=${minPrice}&maxPrice=${maxPrice},`, null, {shallow: true});
    console.log("HANDLE SEARCH: ", petFriendly, parking, minPrice, maxPrice,);
    search();
  };

  return <div>
    <Filters onSearch={handleSearch} />
    <Results properties={properties} />
    <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
  </div>
}