

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
        description
    }`,
    { slug }
  );
}

export default async function PaymentPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="bg-[#f6f7f9] min-h-screen flex flex-col items-center p-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* Back Button */}
      <Link href="/">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6">
          ← Back to Home
        </button>
      </Link>

      {/* Payment Form */}
      <div className="payment w-full flex flex-wrap gap-6 justify-center">
        {/* Billing Info Card */}
        <div className="w-full lg:w-[852px] flex flex-col justify-around bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold">Billing Info</h2>
          <p className="flex justify-between text-sm text-gray-600">
            <span>Please enter your billing info</span>
            <span>Step 1 of 3</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex flex-col gap-2 w-full lg:w-[46%]">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#f6f7f9] px-4 py-2 rounded-lg border"
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[46%]">
              <label className="font-semibold">Phone Number</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="bg-[#f6f7f9] px-4 py-2 rounded-lg border"
              />
            </div>
          </div>
        </div>

        {/* Rental Info Card */}
        <div className="w-full lg:w-[852px] flex flex-col justify-around bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold">Rental Info</h2>
          <p className="flex justify-between text-sm text-gray-600">
            <span>Please select your rental date</span>
            <span>Step 2 of 3</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex flex-col gap-2 w-full lg:w-[46%]">
              <label className="font-semibold">Rental Date</label>
              <input
                type="date"
                placeholder="Select rental date"
                className="bg-[#f6f7f9] px-4 py-2 rounded-lg border"
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[46%]">
              <label className="font-semibold">Return Date</label>
              <input
                type="date"
                placeholder="Select return date"
                className="bg-[#f6f7f9] px-4 py-2 rounded-lg border"
              />
            </div>
          </div>
        </div>

        {/* Confirmation Card */}
        <div className="w-full lg:w-[852px] flex flex-col justify-around bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold">Confirmation</h2>
          <p className="flex justify-between text-sm text-gray-600">
            <span>We are getting to the end. Just a few clicks and your rental is ready</span>
            <span>Step 3 of 3</span>
          </p>

          {/* Final Confirmation Container */}
          <div className="mt-6 bg-[#f6f7f9] p-6 rounded-lg flex flex-col items-center gap-6">
            {/* Billing Method */}
            <div className="w-full lg:w-[80%] flex justify-between items-center border-b-2 pb-4">
              <div>
                <h3 className="text-lg font-semibold">Billing Method</h3>
                <p className="text-sm text-gray-600">Choose your preferred billing method.</p>
              </div>
              <select className="bg-white border p-2 rounded-lg">
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Car Image */}
            <div className="aspect-square flex justify-center items-center mt-4 w-full lg:w-[80%]">
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

            {/* Total Price and Payment Button */}
            <div className="w-full lg:w-[80%] flex flex-col items-center mt-6">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                {product.name}
              </h1>
              <h3 className="text-lg font-semibold text-blue-600">
                Total Price: {product.pricePerDay} / day
              </h3>
              <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-bold shadow-md transition">
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
