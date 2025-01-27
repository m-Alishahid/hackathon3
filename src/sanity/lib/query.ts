// import { defineQuery } from "next-sanity";

// export const allproducts = defineQuery(`
//   *[_type == "car"] {
//     _id,
//     name,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     slug,
//     pricePerDay,
//     "image_url": image.asset->url,
//     tags
//   }
// `);

// export const fourProducts = defineQuery(`
//   *[_type == "car"][0..3] {
//     _id,
//     name,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     slug,
//     pricePerDay,
//     "image_url": image.asset->url,
//     tags
//   }
// `);




import { groq } from "next-sanity";

export const allproducts=groq`*[_type == "car"]`;
export const four =groq`*[_type == "car"][0..3]`;



// import { groq } from "next-sanity";

// export const allproducts = groq`
//   *[_type == "car"] {
//     _id,
//     name,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     slug,
//     pricePerDay,
//     "image_url": image.asset->url,
//     tags
//   }
// `;


// export const fourProduct = groq`
//   *[_type == "car"][0..3] {
//     _id,
//     name,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     slug,
//     pricePerDay,
//     "image_url": image.asset->url,
//     tags
//   }
// `;