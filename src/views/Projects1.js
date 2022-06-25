import React from "react";
import sorting from "../img/sorting.png";
import markdown from "../img/markdown.png";
import codeHere from "../img/code-here.png";
import { Card } from "./Card";

export const Projects1 = () => {
  return (
    <>
      <div className="bg-primary text-black	 flex flex-col items-center justify-center mt-16">
        <p className="text-5xl font-semibold mt-16">My Projects </p>
        <p className="opacity-70 mt-3 mb-32">........................................</p>
      </div>
      <div className="md:px-20 -mt-20 mb-10">
        <div className="flex flex-wrap items-center">
        
          <Card
            img={sorting}
            title="Sorting Visulizer"
            date="April'21 - April'21"
            desc="A platform for in-depth step by step understanding of some famous sorting algorithms visually."
            href="https://gentle-medovik-d32b6e.netlify.app/"
            github="https://github.com/bshekhar123/sorting-visualizer"
            style=""
          />
          <Card
            img={markdown}
            title="Markdown Editor"
            date="May'22 - May'22"
            desc="Markdown is a text-to-HTML conversion tool for web writers to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML"
            href="https://thriving-pastelito-c23cbc.netlify.app/"
            github="https://github.com/bshekhar123/markdown-editor"
            style=""
          />
          {/* <Card
            img={codeHere}
            title="Code Here"
            date="Aug'21 - Aug'21"
            desc="Code Here - An Online Coding Editor, created using HTML, CSS, Javascript, and Reactjs. It supports HTML, CSS, and Javascript."
            href="https://code-here.vercel.app/"
            github="https://github.com/anugoyal998/Code-Here"
            style=""
          /> */}
        </div>
      </div>
    </>
  );
};
