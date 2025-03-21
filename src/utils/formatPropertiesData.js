import noImage from "../assets/no-image.jpg";

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

const formatPropertiesData = (data) => {
    if (!Array.isArray(data)) {
      throw new Error("Очікувався масив");
    }
  
    return data.map((property) => ({
      id: property._id,
      name: property.generalInfo.name,
      province: property.generalInfo.province,
      coordinates: property.generalInfo.coordinates,
      price:formatPrice(property.generalInfo.price),
      type: property.generalInfo.type,
      rooms: Number(property.generalInfo.rooms) || 0,
      bathrooms: property.generalInfo.bathrooms,
      size: property.generalInfo.size,
      livingArea: property.generalInfo.living_area,
      terrace: property.generalInfo.terrace,
      reference: property.generalInfo.reference,
      images: property.images?.map((img) => 
        img.original || img.medium || img.large || img.small || noImage
      ) || [noImage],
    }));
  };
  
  export default formatPropertiesData;
  