import React from "react";
import mycollege from "../img/mycollege.png";
import drawingBoard from "../img/drawing-board.png";
import codeHere from "../img/code-here.png";
import { BsFillCalendarCheckFill, BsGithub } from "react-icons/bs";
import { VscLinkExternal } from "react-icons/vsc";

export const Projects = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="text-primary text-4xl font-bold">My Projects</p>
      <div className="grid grid-cols-3 items-center px-20">
        <Card
          img={drawingBoard}
          title="Drawing Board"
          date="Nov'21 - Dec'21"
          desc="A Digital board for writing, drawing, and sketching. Supports drawing and moving rectangle, circle, line, freehand and text. Auto saves  the user's board.'"
          href="https://drawing-board.vercel.app/"
          github="https://github.com/anugoyal998/drawing-board"
        />
        <Card
          img={mycollege}
          title="MyCollege"
          date="Sep'21 - Oct'21"
          desc="MyCollege - A Notes and updates App for NIT KKR studensts. All branchs notes and study material, send push notifications of updates from NIT KKR."
          href="https://my-college.vercel.app/"
          github="https://github.com/anugoyal998/MyCollege"
        />
        <Card
          img={codeHere}
          title="Code Here"
          date="Aug'21 - Aug'21"
          desc="Code Here - An Online Coding Editor, created using HTML, CSS, Javascript, and Reactjs. It supports HTML, CSS, and Javascript."
          href="https://code-here.vercel.app/"
          github="https://github.com/anugoyal998/Code-Here"
        />
      </div>
    </div>
  );
};

const Card = ({ img, title, date, desc, href, github }) => {
  return (
    <div className="m-4 text-fadedBlack">
      <a href={href} target="_blank">
        <img
          src={img}
          alt="img"
          className="hover:scale-105 cursor-pointer transition-all transform rounded-md border"
        />
      </a>
      <p className="text-xl lg:text-2xl font-bold mt-1">{title}</p>
      <div className="flex items-center space-x-2 mt-1 lg:mt-0">
        <div>
          <BsFillCalendarCheckFill className="lg:text-lg" />
        </div>
        <p className="font-semibold text-sm lg:text-base">{date}</p>
      </div>
      <p className="text-sm">{desc}</p>
      <div className="flex items-center space-x-2 mt-1">
        <a
          href={href}
          target="_blank"
          className="transform cursor-pointer hover:scale-105"
        >
          <VscLinkExternal className="text-lg" />
        </a>
        <a
          href={github}
          target="_blank"
          className="transform cursor-pointer hover:scale-105"
        >
          <BsGithub className="text-lg" />
        </a>
      </div>
    </div>
  );
};
