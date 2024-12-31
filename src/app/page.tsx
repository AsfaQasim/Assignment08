import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Post {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Page() {
  const query = `
 *[_type == 'blog']{
  title,description,
    "slug":slug.current,
    "imageUrl":image.asset->url
}`;

  const blogData: Post[] = await client.fetch(query);
  console.log(blogData);

  return (
    <div className="min-h-screen bg-[#2C2B2C]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/red_rose.jpg" // Static image path
                  alt="Red Rose"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-[#D89F55] mb-3">
                    Red Rose
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#D89F55]">
                    "A red rose symbolizes love, passion, and beauty in its
                    purest form." 🌹
                  </p>
                  <button className="mt-4 text-white bg-[#D89F55] hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] py-2 px-4 rounded-md transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/sunflower.avif"
                  alt="Dummy Image"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-[#D89F55] mb-3">
                    Sun Flower
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#D89F55]">
                    "A sunflower 🌻 symbolizes adoration, loyalty, and the
                    vibrant warmth of the ☀️."
                  </p>
                  <button className="mt-4 text-white bg-[#D89F55] hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] py-2 px-4 rounded-md transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/purple.jpg"
                  alt="Dummy Image"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-[#D89F55] mb-3">
                    Purple Flower
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#D89F55]">
                    "Purple flowers 💜 symbolize elegance, grace, and a touch of
                    mystery."
                  </p>
                  <button className="mt-4 text-white bg-[#D89F55] hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] py-2 px-4 rounded-md transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
