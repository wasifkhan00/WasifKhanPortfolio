import React from "react";
import propertyImg from "../public/assets/projects/LuminarAI.PNG";
import cryptoImg from "../public/assets/projects/PageExp.jpg";
import ProjectItem from "./ProjectItem";

const Blog = () => {
  return (
    <div id="Blog" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Blogs
        </p>
        <h2 className="py-4">Blogs i've Written so far!</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Luminar AI"
            backgroundImg={propertyImg}
            projectUrl="https://greyjournal.net/2021/08/04/https-greyjournal-net-why-is-everyone-obsessed-with-luminar-ai/"
            tech="Grey Journal"
          />
          <ProjectItem
            title="Google Page Experience"
            backgroundImg={cryptoImg}
            projectUrl="https://greyjournal.net/2021/08/21/google-page-experience-updates-painful/"
            tech="Grey Journal"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
