// "use client"


// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Home() {


//   useEffect(() => {
//     const sections = document.querySelectorAll("#block1, #block2, #block3, #block4, #block5");

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         // Only add the animate class when the element is in view
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate");
//         }
//       });
//     }, { threshold: 0.1 }); // 10% visibility

//     sections.forEach((section) => observer.observe(section));

//     // Cleanup the observer when the component unmounts
//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);





//   return (
//     <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">


// <section id="block1" className=" w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center">
//   <Image src={"/Ads 1.png"} alt="" width={600} height={360} className="max-w-full" />
//   <Image src={"/Ads 2.png"} alt="" width={600} height={360} className="max-w-full" />
// </section>


// <section id="block2" className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
//   <Image src={"/Pick - Up.png"} alt="" width={500} height={132} className="max-w-full" />
//   {/* <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" /> */}


//   {/* switch */}
//   <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
//     <img src="/swap.png" alt="Switch" className="w-[24px] h-[24px]" />
//   </div>


//   <Image src={"/Drop - Off.png"} alt="" width={500} height={132} className="max-w-full" />
// </section>







//       <section id="block3" className="popular w-full flex flex-col gap-4">
//         <div className="first w-full flex items-center justify-between">
//           <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
//           <Link href={"/categories"}>
//             <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
//               View All
//             </h1>
//           </Link>
//         </div>
//         <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sport</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <Link href={'/details'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sport</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car (1).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <Link href={'/details'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sedan</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sport</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car (1).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>


//       <section id="block4" className="popular w-full flex flex-col gap-4">
//         <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
//         <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <Link href={'/details'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>
//         </div>
//         <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 NEW MG ZS <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <Link href={'/details'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//             </CardFooter>
//           </Card>


//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 New MG ZS<Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>

// <section id="block5" className="button w-full text-center">
//   <Link href={"/categories"}>
//     <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
//       Show More Cars
//     </button>
//   </Link>
// </section>






//     </div>
//   );
// }








// "use client";

// import { useEffect, useState } from "react";
// import { fetchDataFromSanity } from "@/sanity/lib/fetchdata";
// import { allproducts } from "@/sanity/lib/query";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "./components/Navbar";

// type Product = {
//   slug: any;
//   _id: string;
//   name: string;
//   type: string;
//   fuel_capacity: string;
//   transmission: string;
//   seating_capacity: string;
//   price_per_day: string;
//   image_url: string;
// };

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     async function fetchProducts() {
//       const data: Product[] = await fetchDataFromSanity({ query: allproducts });
//       setProducts(data);
//       setFilteredProducts(data);
//       setVisibleProducts(data.slice(0, 12)); // Show only the first 12 products initially
//     }
//     fetchProducts();
//   }, []);

//   const handleSearch = (searchTerm: string) => {
//     if (searchTerm.trim() === "") {
//       setFilteredProducts(products);
//       setVisibleProducts(products.slice(0, 12));
//     } else {
//       const filtered = products.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           product.type.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//       setVisibleProducts(filtered.slice(0, 12));
//     }
//   };

//   const handleShowMore = () => {
//     setVisibleProducts(filteredProducts); // Show all filtered products
//     setShowMore(true);
//   };

//   return (
//     <div>
//       {/* Pass `handleSearch` to Navbar */}
//       <Navbar onSearch={handleSearch} />
//       <section id="block1" className=" w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center">
//         <Image src={"/Ads 1.png"} alt="" width={600} height={360} className="max-w-full" />
//         <Image src={"/Ads 2.png"} alt="" width={600} height={360} className="max-w-full" />
//       </section>


//       <section id="block2" className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
//         <Image src={"/Pick - Up.png"} alt="" width={500} height={132} className="max-w-full" />
//         {/* <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" /> */}


//         {/* switch */}
//         <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
//           <img src="/swap.png" alt="Switch" className="w-[24px] h-[24px]" />
//         </div>


//         <Image src={"/Drop - Off.png"} alt="" width={500} height={132} className="max-w-full" />
//       </section>


//       <br />

//       <h2 className="ml-9 text-2xl font-bold text-gray-800 mb-6">Most Popular</h2>
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">


//         {visibleProducts.map((product) => (
//           <div
//             key={product._id}
//             className="border p-4 rounded-lg shadow-md flex flex-col items-center"
//           >
//             <Image
//               src={product.image_url}
//               alt={product.name}
//               width={300}
//               height={200}
//               className="rounded-md"
//             />
//             <h2 className="text-lg font-bold">{product.name}</h2>
//             <p>{product.type}</p>
//             <p>${product.price_per_day} / day</p>
//             <Link href={`/product/${product._id}`}>
//               <button className="bg-blue-600 text-white p-2 mt-4 rounded-md">
//                 Rent Now
//               </button>
//             </Link>
//           </div>
//         ))}
//       </section>

//       {!showMore && filteredProducts.length > 12 && (
//         <button
//           className="bg-blue-600 text-white p-3 rounded-md mx-auto block"
//           onClick={handleShowMore}
//         >
//           Show More Cars
//         </button>
//       )}
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/query";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Product } from "../../types/products";
import { urlFor } from "@/sanity/lib/image";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allproducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setVisibleProducts(fetchedProducts.slice(0, 12)); // Show only 12 initially
    }
    fetchProducts();
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
      setVisibleProducts(products.slice(0, 12));
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product._type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setVisibleProducts(filtered.slice(0, 12));
    }
  };

  const handleShowMore = () => {
    setVisibleProducts(filteredProducts); // Show all filtered products
    setShowMore(true);
  };

  return (
    <div>
      {/* Navbar with search functionality */}
      <Navbar onSearch={handleSearch} />

      {/* Advertising Section */}
      <section id="block1" className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center">
        <Image src="/Ads 1.png" alt="Ad 1" width={600} height={360} className="max-w-full" />
        <Image src="/Ads 2.png" alt="Ad 2" width={600} height={360} className="max-w-full" />
      </section>

      {/* Pickup and Drop-off Section */}
      <section id="block2" className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src="/Pick - Up.png" alt="Pick-Up" width={500} height={132} className="max-w-full" />
        <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
          <img src="/swap.png" alt="Switch" className="w-[24px] h-[24px]" />
        </div>
        <Image src="/Drop - Off.png" alt="Drop-Off" width={500} height={132} className="max-w-full" />
      </section>

      <h2 className="ml-9 text-2xl font-bold text-gray-800 mb-6">Most Popular</h2>

      {/* Product Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {visibleProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product._type}</p>
            <p>{product.pricePerDay} </p>

            <Link href={`/product/${product.slug.current}`}>
              <button className="bg-blue-600 text-white p-2 mt-4 rounded-md">
                Rent Now
              </button>
            </Link>

          </div>
        ))}
      </section>

      {/* Show More Button */}
      {!showMore && filteredProducts.length > 12 && (
        <button
          className="bg-blue-600 text-white p-3 rounded-md mx-auto block"
          onClick={handleShowMore}
        >
          Show More Cars
        </button>
      )}
    </div>
  );
}

