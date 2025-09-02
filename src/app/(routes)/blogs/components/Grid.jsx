import Image from "next/image";
import React from "react";

const Grid = ({ posts }) => {
  return (
    <section className="wrapper pb-16 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl overflow-hidden  bg-white transition"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{willChange: "transform"}}
                className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-md">
                {post.date}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0a3af8] transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Grid;
