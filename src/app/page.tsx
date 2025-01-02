import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export interface Post {
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

  const blogData = await client.fetch(query);
  const slug = blogData[0]?.slug;
  console.log(slug);

  return (
    <div className="min-h-screen bg-[#2C2B2C]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Card */}
            {blogData.map((item: Post, index: number) => (
              <div className="p-4 md:w-1/3" key={item.slug || index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.imageUrl || "/red_rose.jpg"}
                    alt="Red Rose"
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-[#D89F55] mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed mb-3 text-[#D89F55] text-justify">
                      {item.description.slice(0, 170)}...
                    </p>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="mt-4 text-white bg-[#D89F55] hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] py-2 px-4 rounded-md transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
