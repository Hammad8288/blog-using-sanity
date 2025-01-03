import { client } from "@/sanity/lib/client";
import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
interface fullBlog {
  title: string;
  content: any;
  imageUrl: string;
  author: { authorname: string; authorimage: string } | null;
  _id: string;
}
async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0] {
    title,
    content,
    "slug": slug.current,
    "imageUrl": image.asset->url,
     author->{authorname, "authorimage": authorimage.asset->url}
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function blogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={800}
        height={400}
        className="w-full max-h-96 object-cover rounded-lg mb-6"
      />
      {data.author && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Author</h3>
          <div className="flex items-center mt-2">
            <Image
              src={data.author.authorimage}
              alt={data.author.authorname}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="font-bold underline">{data.author.authorname}</p>
          </div>
        </div>
      )}
      <br />
      <div className="text-gray-800">
        {/* Render the Portable Text content */}
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
