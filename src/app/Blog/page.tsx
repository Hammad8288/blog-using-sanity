import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const query = `*[_type == "blog"] {
    title,
    "slug": slug.current,
    summary,
    "imageUrl": image.asset->url,
    _id
  }`;

  const blogPosts = await client.fetch(query);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8">
      {blogPosts.map((post: any) => (
        <div
          key={post._id}
          className="w-full max-w-sm bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={300}
            height={200}
            className="w-full object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4 text-gray-900">
            {post.title}
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-4">{post.summary}</p>
          <Link href={`/BlogPost/${post.slug}`}>
            <div className="bg-blue-500 px-2 py-2 rounded-md w-full mt-9 text-center cursor-pointer hover:bg-blue-600 font-bold">
              Read More
            </div>
          </Link>
        </div>
      ))}   
    </div>
  );
};

export default Blog;
