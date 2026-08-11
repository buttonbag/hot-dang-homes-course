import Image from "next/image"

export const Gallery = ({columns, cropImages, items}) => {
  return <div className="flex flex-wrap max-w-5xl mx-auto">
    {items.map((item)=>(
      <div key={item.id}>
        <Image 
          src={item.attributes.url}
          height={item.attributes.height || maxHeight}
          width={item.attributes.width || maxWidth}
          alt={item.attributes.alt || ""}
        />
      </div>
    ))};
  </div>
}