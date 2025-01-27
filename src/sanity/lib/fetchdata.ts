// import { createClient } from "next-sanity";



// const client=createClient({
//     projectId:"456p13l2",
//     dataset:"production",
//     useCdn:true,
//     apiVersion:"2023-10-10"



// })


// export async function fetchDataFromSanity({query,params={}}:{query:string , params?:any}){
//     return await client.fetch(query , params)
// }








// import { createClient } from "next-sanity";

// // Create the Sanity client
// const client = createClient({
//   projectId: "456p13l2",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2023-10-10"
// });

// // Define the function to fetch data from Sanity
// export async function fetchDataFromSanity({ query, params = {} }: { query: string, params?: any }) {
//   return await client.fetch(query, params);
// }

// // Define the GROQ query (assuming you want to fetch by productId)
// const allproducts = `*[_type == "product" && _id == $productId]`;

// // Fetch product details by productId
// async function fetchProductDetails(productId: string) {
//   const data = await fetchDataFromSanity({
//     query: allproducts,
//     params: { productId } // Pass productId as part of params
//   });

//   // Return the product that matches the productId
//   return data.find((prod: Product) => prod._id === productId);
// }
