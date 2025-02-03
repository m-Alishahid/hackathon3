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



     <section>
        <div className="text-6xl font-black text-blue-500 items-center justify-center flex">
          Hello world of rental
        </div>

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

