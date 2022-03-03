import { priceGenerator } from "./priceGenerator";

const getData = async (number) => {
  const itemsPool = [];
  for (let i = 0; i < number; i++) {
    try {
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks?page=2"
      );

      const data = await response.json();

      const imgID = data.data[i].image_id;
      const url = data.config.iiif_url;
      const imgDef = "/full/843,/0/default.jpg";
      const itemImageLink = `${url}/${imgID}${imgDef}`;

      const item = {
        imgLink: itemImageLink,
        idNumber: data.data[i].id,
        title: data.data[i].title,
        price: priceGenerator()
      };
      itemsPool.push(item);
    } catch (err) {
      console.log(err);
    }
  }
  
  return itemsPool
};

export { getData };
