import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/page";

interface Params {
  params: {
    slug: string;
  };
}

const BlogPost = async (params: Params) => {
  const { slug } = params.params;

  const res: Post[] = await client.fetch(
    `
*[_type == 'blog' && slug.current == $slug]{
  title, description,
  "slug": slug.current,
  "imageUrl": image.asset->url
}
        `,
    { slug }
  );
  const data: Post = res[0];
  console.log(data);

  return (
    <main className="min-h-screen bg-[#2C2B2C] text-gray-300 px-6 py-12 lg:px-24 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#D89F55] mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-400">
            "Delve into the details of this amazing blog post."
          </p>
        </div>
        <div className="flex flex-col items-center mb-5">
          {/* Circular Image */}
          <div className="mb-3 w-28 h-28 rounded-full overflow-hidden border-4 border-[#D89F55] shadow-md">
            <Image
              src={data.imageUrl}
              alt="Red Rose"
              width={112} // Matches the container width and height
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Description Text */}
          <p className="text-center text-lg text-[#D89F55] font-semibold">
            "Red roses symbolize love, passion, and beauty." 🌹
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={data.imageUrl}
            alt={data.title}
            height={600}
            width={800}
            className="object-cover w-full"
          />
        </div>

        {/* Content Section */}
        <div className="bg-[#2C2B2C] p-6 rounded-lg shadow-lg">
          <p className="leading-relaxed text-lg text-[#D89F55]">
            {data.description}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="px-6 py-2 text-white bg-[#D89F55] hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] rounded-md transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
