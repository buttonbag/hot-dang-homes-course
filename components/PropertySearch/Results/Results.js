import { PropertyCard } from "./PropertyCard"

export const Results = ({properties}) => {
  return <div 
  className="max-w-5xl m-auto md:grid grid-cols-3 gap-5 mb-10">{properties.map(property => (
    <PropertyCard
      key={property.databaseId}
      title={property.title} 
      destination={property.uri}
      price={property.propertyFeatures.price}
      bedrooms={property.propertyFeatures.bedrooms}
      bathrooms={property.propertyFeatures.bathrooms}
      parking={property.propertyFeatures.parking}
      petFriendly={property.propertyFeatures.petFriendly}
      image={property.featuredImage?.node?.sourceUrl}
      alt={property.featuredImage?.node?.alt || ""}
    />
  ))}</div>
}