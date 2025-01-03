import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const page = async () => {
  const query = `*[_type == "about"][0]{
  introuction,
  tecnicalSkills,
  personalInterests,
  profileImage
}`;

const about = await client.fetch(query);
return (
    
    <section className="text-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-4xl font-bold text-center mb-8">
          About Me
        </header>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Profile Image */}
          <Image
            src={urlFor(about.profileImage).url()}
            alt="Hammad Ahmed - Full Stack Developer Profile Image"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg"
          />

          {/* About Text */}
          <article className="text-center md:text-left">
            {/* Introduction */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Introduction
            </h3>
            <p className="text-lg leading-loose mb-6">{about.introuction}</p>

            {/* Technical Skills */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Technical Skills
            </h3>
            <p className="text-lg leading-loose mb-6">{about.tecnicalSkills}</p>

            {/* Personal Interests */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Personal Interests
            </h3>
            <p className="text-lg leading-loose">{about.personalInterests}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default page;
