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
          <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px]" />
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

