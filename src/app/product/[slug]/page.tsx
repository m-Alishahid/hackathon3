


// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/products";
// import { groq } from "next-sanity";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Navbar from "@/app/components/Navbar";


// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "car" && slug.current == $slug][0]{
//         _id,
//         name,
//         _type,
//         image,
//         pricePerDay,
//         description
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   const defaultDescription =
//     "This car is perfect for your travel needs, offering great performance, reliability, and comfort for every journey.";

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Back Button */}
//         <Link href="/">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6">
//             ← Back to Home
//           </button>
//         </Link>

//         {/* Product Details Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Product Image */}
//           <div className="aspect-square flex justify-center items-center">
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg object-cover"
//               />
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-between gap-6">
//             <div>
//               <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
//                 {product.name}
//               </h1>
//               <p className="text-3xl font-semibold text-blue-600 mb-4">
//                 ${product.pricePerDay} / day
//               </p>
//               <p className="text-lg font-black text-gray-600 leading-relaxed">
//                 {defaultDescription}
//               </p>
//             </div>

//           <Link href={`/payment/${product.slug.current}`}>
//             <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-bold shadow-md transition">
//               Rent Now
//             </button>
//             </Link>
//           </div>
//         </div>

//         {/* Additional Information Section */}
//         <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Why Choose {product.name}?
//           </h2>
//           <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
//             <li>Top-notch performance and reliability</li>
//             <li>Affordable daily rental price</li>
//             <li>Well-maintained and ready for any trip</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        pricePerDay,
        description,
        slug // Ensure slug is fetched from Sanity
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const defaultDescription =
    "This car is perfect for your travel needs, offering great performance, reliability, and comfort for every journey.";

  // Ensure that the slug is available before accessing
  const productSlug = product.slug?.current;

  if (!productSlug) {
    return <div>Error: Slug not found for the product!</div>; // Handling case where slug is missing
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6">
            ← Back to Home
          </button>
        </Link>

        {/* Product Details Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square flex justify-center items-center">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-blue-600 mb-4">
                {product.pricePerDay} / day
              </p>
              <p className="text-lg font-black text-gray-600 leading-relaxed">
                {defaultDescription}
              </p>
            </div>

            {/* Rent Now Button */}
            <Link href={`/paymentmethod/${productSlug}`}>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-bold shadow-md transition">
                Rent Now
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose {product.name}?
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Top-notch performance and reliability</li>
            <li>Affordable daily rental price</li>
            <li>Well-maintained and ready for any trip</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
